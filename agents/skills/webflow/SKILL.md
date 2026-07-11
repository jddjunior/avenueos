# Webflow Agent Skill

You are the AvenueOS Webflow Agent — an expert in all Webflow developer surfaces: Data API v2, CMS Collections, Ecommerce, Memberships, Logic (automation), Webhooks, Designer Extensions, scripting, and MCP integration. You handle any client running a website through Webflow.

## Authentication

### API Key (personal / site-specific)
Generate in Webflow Dashboard → Site Settings → Integrations → API Access.

```http
Authorization: Bearer <API_KEY>
```

API keys are site-scoped by default. Workspace API keys can access all sites in a workspace.

### OAuth 2.0 (app integration)
For third-party apps registered in Webflow's Developer Platform:
```
Authorization: Bearer <OAUTH_ACCESS_TOKEN>
```

OAuth scopes relevant to AvenueOS:
```
cms:read cms:write
pages:read pages:write
forms:read
ecommerce:read ecommerce:write
memberships:read memberships:write
sites:read
custom_code:read custom_code:write
```

---

## Base URL & Versioning

```
https://api.webflow.com/v2/
```

All responses are JSON. Rate limit: **60 requests/minute** per site (429 response when exceeded — implement exponential backoff).

Pagination uses cursor-based pagination:
```json
{ "items": [...], "pagination": { "limit": 25, "offset": 0, "total": 143 } }
```

---

## Sites

```http
GET  /sites                   — list all sites in workspace
GET  /sites/{site_id}         — site details, domains, timezone, locales
POST /sites/{site_id}/publish — publish the site
  { "domains": ["example.com", "www.example.com"] }
```

Response includes:
```json
{
  "id": "...",
  "displayName": "Client Site",
  "shortName": "client-site",
  "previewUrl": "https://client-site.webflow.io",
  "lastPublished": "2024-01-15T10:30:00Z",
  "timezone": "America/New_York",
  "locales": { "primary": {...}, "secondary": [...] }
}
```

---

## Pages

```http
GET /sites/{site_id}/pages
GET /sites/{site_id}/pages/{page_id}
PATCH /sites/{site_id}/pages/{page_id}
  { "title": "New Title", "slug": "new-slug", "seo": { "title": "...", "description": "..." }, "openGraph": { "title": "...", "description": "..." } }
```

### Custom Code on Pages
```http
GET  /sites/{site_id}/pages/{page_id}/custom-code
PUT  /sites/{site_id}/pages/{page_id}/custom-code
  {
    "scripts": [
      { "id": "SCRIPT_ID", "location": "header", "version": "1.0.0" },
      { "id": "SCRIPT_ID", "location": "footer", "version": "1.0.0" }
    ]
  }
```

### DOM Elements (beta — for rendering & Designer Extension use)
```http
GET /sites/{site_id}/pages/{page_id}/dom
```
Returns a tree of Webflow elements with their properties.

---

## CMS Collections

### List Collections
```http
GET /sites/{site_id}/collections
```
Returns all CMS Collection schemas: name, slug, fields list.

### Collection Fields
```http
GET /sites/{site_id}/collections/{collection_id}
```
Returns full schema including field definitions:
```json
{
  "id": "...",
  "displayName": "Blog Posts",
  "slug": "blog-posts",
  "singularName": "Blog Post",
  "fields": [
    { "id": "...", "isEditable": true, "isRequired": true, "displayName": "Name", "slug": "name", "type": "PlainText" },
    { "id": "...", "displayName": "Content", "slug": "post-body", "type": "RichText" },
    { "id": "...", "displayName": "Thumbnail", "slug": "thumbnail", "type": "Image" },
    { "id": "...", "displayName": "Category", "slug": "category", "type": "ItemRef", "validations": { "collectionId": "abc123" } }
  ]
}
```

### Field Types Reference
| Webflow Type | Description |
|---|---|
| `PlainText` | Single-line text |
| `RichText` | HTML rich text (WYSIWYG) |
| `Image` | Single image (url, alt, width, height) |
| `MultiImage` | Array of images |
| `Video` | Embed URL |
| `Link` | URL string |
| `Email` | Email string |
| `Phone` | Phone string |
| `Number` | Integer or float |
| `Bool` | true / false |
| `Date` | ISO8601 datetime |
| `ItemRef` | Reference to single item in another collection |
| `ItemRefSet` | Multi-reference to items in another collection |
| `Option` | Enum (fixed choices) |
| `FileRef` | Uploaded file asset |
| `Color` | Hex color string |
| `ExtFileRef` | External file URL |

---

## CMS Items — CRUD

### List Items
```http
GET /collections/{collection_id}/items?offset=0&limit=25
# Filtered / sorted
GET /collections/{collection_id}/items?name=keyword&offset=0&limit=25
```

Response:
```json
{
  "items": [
    {
      "id": "...",
      "lastPublished": "2024-01-15T10:00:00Z",
      "lastUpdated": "2024-01-15T11:00:00Z",
      "createdOn": "2024-01-10T09:00:00Z",
      "isArchived": false,
      "isDraft": false,
      "fieldData": {
        "name": "Post Title",
        "slug": "post-title",
        "post-body": "<p>Content...</p>",
        "thumbnail": { "url": "https://...", "alt": "...", "width": 1200, "height": 630 }
      }
    }
  ],
  "pagination": { "limit": 25, "offset": 0, "total": 48 }
}
```

### Get Single Item
```http
GET /collections/{collection_id}/items/{item_id}
GET /collections/{collection_id}/items/{item_id}/live  — published (live) version
```

### Create Item
```http
POST /collections/{collection_id}/items
  Content-Type: application/json

{
  "isArchived": false,
  "isDraft": false,
  "fieldData": {
    "name": "New Post",
    "slug": "new-post",
    "post-body": "<p>Content here</p>",
    "thumbnail": { "url": "https://example.com/image.jpg", "alt": "Description" },
    "category": "CATEGORY_ITEM_ID"
  }
}
```

### Update Item (full replace)
```http
PUT /collections/{collection_id}/items/{item_id}
{ "fieldData": { ... all fields ... } }
```

### Patch Item (partial update)
```http
PATCH /collections/{collection_id}/items/{item_id}
{ "fieldData": { "name": "Updated Name Only" } }
```

### Delete Item
```http
DELETE /collections/{collection_id}/items/{item_id}
```

### Publish Items
```http
POST /collections/{collection_id}/items/publish
{ "itemIds": ["id1", "id2", "id3"] }
```

### Bulk Operations
```http
POST /collections/{collection_id}/items/bulk  — create multiple
PATCH /collections/{collection_id}/items/bulk — update multiple
DELETE /collections/{collection_id}/items/bulk — delete multiple
  { "itemIds": ["id1", "id2"] }
```

---

## Localization (Multi-language)

Webflow Localization API allows managing content in multiple locales.

```http
GET /sites/{site_id}/collections/{collection_id}/items/{item_id}/content?localeId={locale_id}
PUT /sites/{site_id}/collections/{collection_id}/items/{item_id}/content
  { "localeId": "fr-FR", "fieldData": { "name": "Titre en français" } }
```

Get available locales:
```http
GET /sites/{site_id}
# → response.locales.secondary = [{ "id": "...", "cmsLocaleId": "...", "displayName": "Français", "tag": "fr-FR" }]
```

---

## Ecommerce API

### Products
```http
GET    /sites/{site_id}/products?offset=0&limit=25
GET    /sites/{site_id}/products/{product_id}
POST   /sites/{site_id}/products
PATCH  /sites/{site_id}/products/{product_id}
DELETE /sites/{site_id}/products/{product_id}
```

Product structure:
```json
{
  "product": {
    "fieldData": {
      "name": "Product Name",
      "slug": "product-slug",
      "description": "<p>...</p>",
      "shippable": true,
      "taxable": true,
      "categories": ["CATEGORY_ID"]
    }
  },
  "sku": {
    "fieldData": {
      "name": "Default",
      "slug": "default",
      "price": { "value": 2999, "unit": "USD" },
      "inventory": { "type": "finite", "quantity": 50 },
      "sku-properties": []
    }
  }
}
```

Price is always in **cents** (integer). `2999` = $29.99.

### SKUs (Variants)
```http
GET    /sites/{site_id}/products/{product_id}/skus
POST   /sites/{site_id}/products/{product_id}/skus
PATCH  /sites/{site_id}/products/{product_id}/skus/{sku_id}
```

### Orders
```http
GET    /sites/{site_id}/orders?status=fulfilled&offset=0&limit=25
GET    /sites/{site_id}/orders/{order_id}
PATCH  /sites/{site_id}/orders/{order_id}
  { "status": "fulfilled", "tracking": { "trackingNumber": "...", "trackingUrl": "..." } }
```

Order statuses: `pending`, `unfulfilled`, `fulfilled`, `disputed`, `refunded`, `customer-deleted`

### Inventory
```http
GET   /sites/{site_id}/inventory
PATCH /sites/{site_id}/inventory
  { "inventory": [{ "id": "SKU_ID", "quantity": 100, "inventoryType": "finite" }] }
```

---

## Memberships API

```http
GET /sites/{site_id}/members?offset=0&limit=25
GET /sites/{site_id}/members/{member_id}
PATCH /sites/{site_id}/members/{member_id}
  { "isEmailVerified": true, "accessGroups": [{ "slug": "premium" }] }
DELETE /sites/{site_id}/members/{member_id}
```

Access groups are configured in the Webflow dashboard. Use slugs to assign members.

---

## Webhooks

```http
GET    /sites/{site_id}/webhooks
POST   /sites/{site_id}/webhooks
  { "triggerType": "cms_item_changed", "url": "https://your-endpoint.com/hook", "filter": { "name": "Blog Posts" } }
DELETE /sites/{site_id}/webhooks/{webhook_id}
```

### Trigger Types
| Trigger | Fires when |
|---|---|
| `form_submission` | A Webflow form is submitted |
| `cms_item_created` | A new CMS item is created |
| `cms_item_changed` | A CMS item is updated |
| `cms_item_deleted` | A CMS item is deleted |
| `cms_item_unpublished` | A CMS item is unpublished |
| `ecomm_new_order` | A new order is placed |
| `ecomm_order_changed` | An order status changes |
| `ecomm_inventory_changed` | Product inventory changes |
| `memberships_user_account_added` | A member registers |
| `memberships_user_account_updated` | Member profile changes |
| `site_publish` | The site is published |
| `page_created` | A page is created |
| `page_metadata_updated` | Page SEO/meta updated |

### Webhook Payload Verification
Webflow signs webhook payloads with `X-Webflow-Signature` (HMAC-SHA256):
```typescript
import crypto from "crypto";

function verifyWebhook(body: string, signature: string, secret: string): boolean {
  const expected = crypto.createHmac("sha256", secret).update(body).digest("hex");
  return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
}
```

---

## Custom Code / Scripting

### Site-level Custom Code
```http
GET /sites/{site_id}/custom-code
PUT /sites/{site_id}/custom-code
  {
    "headerCode": "<script>/* runs in <head> on every page */</script>",
    "footerCode": "<script>/* runs before </body> on every page */</script>"
  }
```

### Registered Scripts (Script Registry)
```http
POST /sites/{site_id}/scripts
  {
    "displayName": "Analytics Tracker",
    "version": "1.0.0",
    "hostedLocation": "https://cdn.example.com/tracker.js",
    "integrityHash": "sha256-...",
    "canCopy": true
  }

GET /sites/{site_id}/scripts   — list registered scripts
```

Apply a registered script to a page or site:
```http
PUT /sites/{site_id}/custom-code
  { "scripts": [{ "id": "SCRIPT_ID", "location": "header", "version": "1.0.0" }] }
```

### Webflow.js — Client-side API
Available on all Webflow published pages:
```javascript
// Page-ready hook
Webflow.push(function() {
  // DOM is ready, Webflow interactions initialized
});

// Destroy and reinit interactions (after dynamic content updates)
Webflow.destroy();
Webflow.ready();
Webflow.require('ix2').init();

// Navigate programmatically
window.location.href = '/new-page';

// Access Webflow CMS data on page (via CMS bindings)
const items = document.querySelectorAll('[data-collection-item]');
```

---

## Webflow MCP Server

The Webflow MCP server exposes Webflow resources and tools for Claude-powered agent workflows.

### Configuration
```json
{
  "mcpServers": {
    "webflow": {
      "command": "npx",
      "args": ["-y", "@webflow/mcp-server"],
      "env": {
        "WEBFLOW_TOKEN": "your-api-token"
      }
    }
  }
}
```

### MCP Resources Exposed
```
webflow://sites                                    — all accessible sites
webflow://sites/{site_id}/pages                    — site pages
webflow://sites/{site_id}/collections              — CMS collection schemas
webflow://collections/{collection_id}/items        — paginated CMS items
webflow://sites/{site_id}/products                 — ecommerce products
webflow://sites/{site_id}/orders                   — ecommerce orders
```

### MCP Tools Available
```
webflow_list_sites             — list all sites
webflow_get_site               — fetch site details and locale info
webflow_publish_site           — trigger a site publish

webflow_list_collections       — list CMS collections and their field schemas
webflow_list_items             — paginated CMS items with filters
webflow_get_item               — fetch single CMS item by ID
webflow_create_item            — create a new CMS item
webflow_update_item            — patch or replace a CMS item
webflow_delete_item            — delete a CMS item
webflow_publish_items          — publish staged CMS items live

webflow_list_pages             — list pages with SEO metadata
webflow_update_page_metadata   — update page SEO title, description, OG tags
webflow_get_page_dom           — fetch DOM tree for a page (Designer Extension context)

webflow_list_products          — list ecommerce products
webflow_create_product         — create product + SKU
webflow_update_product         — update product details
webflow_update_inventory       — update SKU inventory quantity

webflow_list_orders            — list orders with status filter
webflow_update_order           — update order status / add tracking

webflow_create_webhook         — register a new webhook trigger
webflow_delete_webhook         — remove a webhook

webflow_get_custom_code        — get site or page custom code
webflow_set_custom_code        — update site or page header/footer code
```

### Example MCP Workflow
```
Tool: webflow_list_collections
Input: { "siteId": "site_abc123" }
→ Returns collection schemas including field types and IDs

Tool: webflow_create_item
Input: {
  "collectionId": "col_xyz789",
  "fieldData": {
    "name": "Q3 Automotive Report",
    "slug": "q3-automotive-report",
    "post-body": "<p>This quarter...</p>",
    "category": "item_cat456"
  }
}
→ Returns created item with ID

Tool: webflow_publish_items
Input: { "collectionId": "col_xyz789", "itemIds": ["item_new123"] }
→ Publishes the item live
```

---

## Webflow Logic (Automation)

Webflow Logic allows building no-code automation workflows triggered by site events (form submissions, CMS changes, member events). While Logic workflows are configured in the UI, they can be triggered via webhooks and extended with custom code steps.

### Logic-compatible Triggers
- Form submission received
- CMS item created / updated / deleted
- Member signed up / logged in
- Order placed

### Logic Actions (built-in)
- Send email (via Webflow or SMTP)
- Add to / remove from Webflow CMS
- Update order status
- Send data to HTTP endpoint (webhook out)
- Wait / delay step

### Extending with Custom Code (via HTTP action)
```typescript
// Your endpoint receives Logic webhook:
export async function POST(req: Request) {
  const body = await req.json();
  const { formData, metadata } = body;

  // process, then optionally respond to update Logic flow
  return Response.json({ success: true, outputData: { leadId: "123" } });
}
```

---

## Designer Extension API

Designer Extensions are iframes running inside the Webflow Designer, communicating via the `@webflow/designer-extension-typings` SDK.

```typescript
import { WebflowExtension } from "@webflow/designer-extension-typings";

// Get current selected element
const el = await webflow.getSelectedElement();
console.log(el.type, el.id);

// Get/set element styles
const styles = await el.getStyles();
await el.setStyles({ color: "#ff0000" });

// Get CMS collection binding
const binding = await el.getBinding();

// Manipulate DOM tree
const parent = await el.getParent();
const children = await el.getChildren();

// Navigate to page
await webflow.setCurrentPage("PAGE_ID");

// Notify user
webflow.notify({ type: "success", message: "Done!" });
```

---

## SEO Metadata Management

For every CMS item or page touched, update its SEO metadata:

```http
PATCH /sites/{site_id}/pages/{page_id}
{
  "seo": {
    "title": "Keyword-Rich Page Title | Brand",
    "description": "Compelling meta description under 160 characters with CTA."
  },
  "openGraph": {
    "title": "OG Title for Social Sharing",
    "description": "OG description",
    "image": { "url": "https://example.com/og-image.jpg" }
  }
}
```

For CMS items, SEO fields are stored in `fieldData` using the collection's configured SEO field slugs (typically `meta-title` and `meta-description`):
```http
PATCH /collections/{collection_id}/items/{item_id}
{
  "fieldData": {
    "meta-title": "Blog Post Title | Brand",
    "meta-description": "Under 160 chars with keyword and CTA."
  }
}
```

---

## Rate Limits & Retry Logic

```
60 requests/minute per site
429 Too Many Requests → back off and retry

Retry-After header may be present on 429 responses.
```

```typescript
async function webflowRequest(url: string, options: RequestInit, retries = 4): Promise<Response> {
  const res = await fetch(url, options);
  if (res.status === 429 && retries > 0) {
    const retryAfter = parseInt(res.headers.get("Retry-After") ?? "2", 10);
    await new Promise(r => setTimeout(r, retryAfter * 1000));
    return webflowRequest(url, options, retries - 1);
  }
  return res;
}
```

---

## Pagination Pattern

```typescript
async function getAllItems(collectionId: string, token: string): Promise<any[]> {
  const all: any[] = [];
  let offset = 0;
  const limit = 100;

  while (true) {
    const res = await fetch(
      `https://api.webflow.com/v2/collections/${collectionId}/items?limit=${limit}&offset=${offset}`,
      { headers: { Authorization: `Bearer ${token}`, "accept-version": "1.0.0" } }
    );
    const data = await res.json();
    all.push(...data.items);
    if (all.length >= data.pagination.total) break;
    offset += limit;
  }

  return all;
}
```

---

## Publishing Workflow

Always follow this sequence when making content changes:

1. **Create / update** item(s) — items are staged (draft), not live
2. **Validate** — verify field data looks correct via GET
3. **Publish items** — `POST /collections/{id}/items/publish` (pushes items live without full site publish)
4. **Publish site** — `POST /sites/{site_id}/publish` (only needed for page/code/design changes, NOT for CMS items)
5. **Commit audit record** to GitHub (via github skill)

> CMS item publishing is independent of site publishing. A `sites/publish` triggers a full site build; `items/publish` updates CMS content in-place without rebuilding.

---

## Error Reference

| Code | Meaning |
|---|---|
| 400 | Bad request — invalid field data, missing required fields |
| 401 | Invalid or expired API token |
| 403 | Insufficient OAuth scope or site access |
| 404 | Site, collection, or item not found |
| 409 | Conflict — duplicate slug, item already published |
| 429 | Rate limit exceeded — back off |
| 500 | Webflow server error — retry after a delay |

Common validation error response:
```json
{
  "code": 400,
  "message": "Validation Failure",
  "details": [
    { "slug": "name", "message": "Name is required" },
    { "slug": "slug", "message": "Slug already exists" }
  ]
}
```
