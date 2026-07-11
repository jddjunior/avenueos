# Builder.io Integration Skill

You have full expertise in Builder.io's Content API and Visual CMS. Use this skill to create, update, query, and publish content within a tenant's Builder.io space as part of AvenueOS marketing workflows.

## Overview

Builder.io is the visual CMS used alongside AvenueOS's DC component system:
- **DC components** (`.dc.html`) define the structural templates
- **Builder.io** manages the dynamic content that fills those templates (text, images, sections)

Each tenant has their own Builder.io **Space** with a private API key. Always use the tenant's space ID and API key from the tenant context — never cross-contaminate tenant spaces.

## Authentication

All API requests require:
```
Authorization: Bearer <BUILDER_IO_PRIVATE_KEY>
```

The private key is in the tenant config as `builderIoApiKey`. The space ID is `builderIoSpaceId`.

Public read operations can use the tenant's **public API key** (passed as a query param).

## Key API Endpoints

### Read Content
```
GET https://cdn.builder.io/api/v2/content/<MODEL_NAME>
  ?apiKey=<PUBLIC_API_KEY>
  &limit=10
  &offset=0
  &query.published=$eq:published
```

Common model names used in AvenueOS:
- `page` — full pages
- `section` — reusable page sections
- `symbol` — shared components (headers, footers)
- `blog-post` — editorial content

### Create/Update Content Entry
```
POST https://www.builder.io/api/v1/write/<MODEL_NAME>
Authorization: Bearer <PRIVATE_KEY>
Content-Type: application/json

{
  "id": "<entry-id>",        // omit for create, include for update
  "name": "Hero Section",
  "published": "draft",      // "draft" | "published" | "archived"
  "data": {
    "blocks": [...]           // Builder.io block tree
  },
  "query": [
    { "property": "urlPath", "operator": "is", "value": "/home" }
  ]
}
```

### Publish an Entry
```
PATCH https://www.builder.io/api/v1/write/<MODEL_NAME>/<ENTRY_ID>
Authorization: Bearer <PRIVATE_KEY>
Content-Type: application/json

{ "published": "published" }
```

### Delete Entry
```
DELETE https://www.builder.io/api/v1/write/<MODEL_NAME>/<ENTRY_ID>
Authorization: Bearer <PRIVATE_KEY>
```

### Upload Assets (images, files)
```
POST https://www.builder.io/api/v1/upload
Authorization: Bearer <PRIVATE_KEY>
Content-Type: multipart/form-data

file=<binary>
filename=<name>
```

### Search/Query with Filters
```
GET https://cdn.builder.io/api/v2/content/<MODEL>
  ?apiKey=<PUBLIC_KEY>
  &query.data.vertical.$eq=automotive
  &query.published.$eq=published
  &fields=id,name,data.heading,data.subheading
  &sort.updatedDate=-1
```

## Block Structure

Builder.io content is a tree of blocks. Each block has:
```json
{
  "@type": "@builder.io/sdk:Element",
  "component": {
    "name": "Text",
    "options": {
      "text": "<p>Hello world</p>"
    }
  },
  "responsiveStyles": {
    "large": { "fontSize": "18px", "color": "var(--gray-950)" },
    "small": { "fontSize": "16px" }
  },
  "children": []
}
```

## AvenueOS Content Mapping

When updating DC template variables via Builder.io, map them like this:

| DC Template Variable | Builder.io Field |
|---|---|
| `{{ heroStatValue }}` | `data.heroStatValue` |
| `{{ heroStatLabel }}` | `data.heroStatLabel` |
| `{{ name }}` | `data.agentName` |
| `{{ oneLiner }}` | `data.oneLiner` |
| `{{ kicker }}` | `data.kicker` |
| `{{ cards }}` | `data.cards` (array) |
| `{{ agentNav }}` | `data.agentNav` (array) |

## Workflow: Update Page Content

When asked to update content on a tenant site:

1. **Fetch** the current entry:
   ```
   GET https://cdn.builder.io/api/v2/content/page
     ?apiKey=<key>&query.urlPath.$eq=/target-path
   ```

2. **Merge** your changes into `data` (preserve fields you are not changing)

3. **Write** as draft first:
   ```
   POST https://www.builder.io/api/v1/write/page
   { "id": "<id>", "published": "draft", "data": { ...updated } }
   ```

4. **Validate** the draft output looks correct (check `name`, `data` fields)

5. **Publish** if validation passes:
   ```
   PATCH https://www.builder.io/api/v1/write/page/<id>
   { "published": "published" }
   ```

6. **Commit** a note to GitHub (via the github skill) recording the change:
   ```
   Changed: [tenant/page path] — [what changed and why]
   ```

## Content Safety Rules

- NEVER publish directly — always go draft → validate → publish
- NEVER delete content without explicit instruction from the orchestrator
- ALWAYS preserve existing `data` fields you are not modifying
- ALWAYS use the tenant's Builder.io API key — never the AvenueOS platform key
- If an API call returns 401, the key may be expired — report to orchestrator
- If an API call returns 429, back off exponentially (2s, 4s, 8s, 16s)

## SEO Fields in Builder.io

Most page models have a `seoMetadata` sub-object:
```json
{
  "seoMetadata": {
    "title": "Page Title | Brand",
    "description": "Meta description under 160 characters.",
    "ogImage": "https://cdn.builder.io/...",
    "canonicalUrl": "https://example.com/page"
  }
}
```

Always update SEO fields when changing page copy.
