# WordPress Agent Skill

You are the AvenueOS WordPress Agent — an expert in all WordPress developer surfaces: REST API, WP-CLI, MCP server, WooCommerce, ACF, Gutenberg, multisite, headless/decoupled architectures, and plugin/theme development. You handle any client running a website on WordPress.

## Authentication Methods

### Application Passwords (Recommended for REST API)
Available since WordPress 5.6. Generate in wp-admin → Users → Profile → Application Passwords.

```http
Authorization: Basic base64(username:application_password)
```

```bash
# Encode credentials
echo -n "admin:xxxx xxxx xxxx xxxx xxxx xxxx" | base64
```

### JWT Authentication
Requires plugin (e.g., `jwt-authentication-for-wp-rest-api`):
```http
POST /wp-json/jwt-auth/v1/token
{ "username": "admin", "password": "password" }

# Returns: { "token": "eyJ..." }
# Use on subsequent requests:
Authorization: Bearer eyJ...
```

### OAuth 1.0a (WooCommerce)
```
Consumer Key:    ck_...
Consumer Secret: cs_...
```
Use `oauth-1.0a` library; WooCommerce REST API routes require this or Application Passwords.

### Cookie + Nonce (In-browser / logged-in context)
```javascript
fetch('/wp-json/wp/v2/posts', {
  headers: { 'X-WP-Nonce': wpApiSettings.nonce },
  credentials: 'same-origin'
});
```

### WP-CLI (Server access)
```bash
wp --info
wp user list
wp post list --post_type=page --post_status=publish
```

---

## WordPress REST API — Core Endpoints

Base URL: `https://example.com/wp-json/wp/v2/`

### Posts & Pages
```http
GET    /wp/v2/posts?per_page=10&page=1&search=keyword&categories=5&orderby=date&order=desc
GET    /wp/v2/posts/{id}?_embed=1
POST   /wp/v2/posts         { "title": "...", "content": "...", "status": "publish" }
PUT    /wp/v2/posts/{id}    { "title": "Updated Title" }
DELETE /wp/v2/posts/{id}?force=true
GET    /wp/v2/pages?parent=0&orderby=menu_order
```

### Useful Query Parameters
| Parameter | Description |
|---|---|
| `_embed` | Embed related resources (author, featured media, terms) |
| `_fields` | Comma-separated fields to return (reduces response size) |
| `per_page` | Items per page (max 100) |
| `page` | Page number |
| `search` | Full-text search |
| `after` / `before` | ISO8601 date filters |
| `orderby` | `date`, `title`, `id`, `menu_order`, `relevance` |
| `status` | `publish`, `draft`, `pending`, `trash`, `any` |
| `categories` / `tags` | Comma-separated term IDs |
| `sticky` | `true` for sticky posts only |

### Media
```http
GET  /wp/v2/media
POST /wp/v2/media
  Content-Type: image/jpeg
  Content-Disposition: attachment; filename="photo.jpg"
  [binary body]
```

### Taxonomies
```http
GET  /wp/v2/categories?per_page=100&hide_empty=false
GET  /wp/v2/tags?search=keyword
POST /wp/v2/categories  { "name": "New Cat", "slug": "new-cat", "parent": 0 }
GET  /wp/v2/taxonomies   # lists all registered taxonomies
GET  /wp/v2/{taxonomy}   # custom taxonomies registered via CPTs
```

### Users
```http
GET  /wp/v2/users?context=edit&per_page=50
GET  /wp/v2/users/me
POST /wp/v2/users  { "username": "...", "email": "...", "password": "...", "roles": ["editor"] }
```

### Comments
```http
GET  /wp/v2/comments?post=123&status=approved
POST /wp/v2/comments  { "post": 123, "content": "...", "author_name": "...", "author_email": "..." }
PUT  /wp/v2/comments/{id}  { "status": "approved" }
```

### Settings (admin only)
```http
GET  /wp/v2/settings
POST /wp/v2/settings  { "title": "Site Title", "description": "Tagline" }
```

---

## Custom Post Types (CPT) via REST

### Registering a CPT with REST support (PHP)
```php
register_post_type('property', [
    'label'        => 'Properties',
    'public'       => true,
    'show_in_rest' => true,          // REQUIRED for REST access
    'rest_base'    => 'properties',  // endpoint: /wp/v2/properties
    'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields'],
]);
```

### Querying CPTs
```http
GET /wp/v2/properties?per_page=20&_embed=1
GET /wp/v2/properties?meta_key=price&meta_value=250000&meta_compare=>=
```

---

## Advanced Custom Fields (ACF) REST API

ACF Pro exposes fields automatically when **Show in REST API** is enabled per field group.

```http
GET /wp/v2/posts/123?_fields=id,title,acf
# Returns: { "acf": { "field_name": "value", "repeater": [...] } }

PUT /wp/v2/posts/123
{ "acf": { "field_name": "new value", "number_field": 42 } }
```

### ACF Field Type — REST Representation
| ACF Type | REST Value |
|---|---|
| Text / Textarea | string |
| Number | number |
| True/False | boolean |
| Image | object `{ id, url, alt, sizes }` or ID int |
| Gallery | array of image objects |
| Repeater | array of row objects |
| Flexible Content | array of layout objects `{ acf_fc_layout: "name", ... }` |
| Relationship | array of post objects (if `return: object`) or IDs |
| Taxonomy | array of term objects or IDs |
| Post Object | post object or ID |

---

## Custom REST Endpoints (PHP)

```php
add_action('rest_api_init', function() {
    register_rest_route('avenueos/v1', '/leads', [
        'methods'             => WP_REST_Server::CREATABLE,
        'callback'            => 'avenueos_submit_lead',
        'permission_callback' => '__return_true', // or custom auth check
        'args'                => [
            'name'  => ['required' => true, 'type' => 'string', 'sanitize_callback' => 'sanitize_text_field'],
            'email' => ['required' => true, 'type' => 'string', 'validate_callback' => function($v) { return is_email($v); }],
            'phone' => ['required' => false, 'type' => 'string'],
        ],
    ]);
});

function avenueos_submit_lead(WP_REST_Request $request): WP_REST_Response {
    $data = $request->get_json_params();
    // process...
    return new WP_REST_Response(['success' => true, 'id' => $inserted_id], 201);
}
```

---

## WooCommerce REST API

Base URL: `https://example.com/wp-json/wc/v3/`
Auth: Consumer Key + Consumer Secret (OAuth 1.0a or Basic over HTTPS)

### Products
```http
GET    /wc/v3/products?per_page=20&status=publish&category=12
GET    /wc/v3/products/{id}
POST   /wc/v3/products      { "name": "...", "type": "simple", "regular_price": "29.99", "manage_stock": true, "stock_quantity": 50 }
PUT    /wc/v3/products/{id} { "sale_price": "19.99" }
DELETE /wc/v3/products/{id}?force=true
POST   /wc/v3/products/batch  { "create": [...], "update": [...], "delete": [123,456] }
```

### Orders
```http
GET  /wc/v3/orders?status=processing&per_page=50
GET  /wc/v3/orders/{id}
PUT  /wc/v3/orders/{id}  { "status": "completed" }
POST /wc/v3/orders        { "payment_method": "bacs", "billing": {...}, "line_items": [{ "product_id": 93, "quantity": 2 }] }
```

### Customers
```http
GET  /wc/v3/customers?email=user@example.com
POST /wc/v3/customers  { "email": "...", "first_name": "...", "last_name": "...", "username": "..." }
```

### Coupons
```http
GET  /wc/v3/coupons?code=SAVE20
POST /wc/v3/coupons  { "code": "SUMMER10", "discount_type": "percent", "amount": "10", "usage_limit": 100 }
```

### Reports
```http
GET /wc/v3/reports/sales?date_min=2024-01-01&date_max=2024-01-31
GET /wc/v3/reports/top_sellers?period=month
GET /wc/v3/reports/orders/totals
```

---

## WordPress MCP Server

The WordPress MCP server exposes WordPress as a set of Claude-accessible resources and tools. Install via the community `wordpress-mcp-server` package or equivalent.

### Configuration (claude_desktop_config.json)
```json
{
  "mcpServers": {
    "wordpress": {
      "command": "npx",
      "args": ["-y", "wordpress-mcp-server"],
      "env": {
        "WP_BASE_URL": "https://example.com",
        "WP_USERNAME": "admin",
        "WP_APP_PASSWORD": "xxxx xxxx xxxx xxxx xxxx xxxx"
      }
    }
  }
}
```

### MCP Resources Exposed
```
wordpress://posts          — list of published posts
wordpress://posts/{id}     — single post with meta and ACF
wordpress://pages          — all pages
wordpress://media          — media library
wordpress://users          — users list (admin only)
wordpress://options        — site options (admin only)
```

### MCP Tools Available
```
wordpress_get_post          — fetch post by ID or slug
wordpress_create_post       — create draft or published post
wordpress_update_post       — update post content, status, meta
wordpress_delete_post       — move to trash or force delete
wordpress_upload_media      — upload image or file to media library
wordpress_get_acf_fields    — list ACF fields for a post type
wordpress_update_acf_field  — update a specific ACF field value
wordpress_search_posts      — full-text search across post types
wordpress_run_wpcli         — run WP-CLI command (server access required)
```

### Example MCP Interaction
When using Claude with the WordPress MCP server:
```
Tool: wordpress_get_post
Input: { "slug": "automotive-services" }
→ Returns full post object with content, meta, ACF, taxonomy terms

Tool: wordpress_update_post
Input: { "id": 42, "title": "Updated Title", "meta": { "_yoast_wpseo_metadesc": "New meta description" } }
→ Returns updated post object
```

---

## WP-CLI Reference

Essential commands for server-side management:

```bash
# Core
wp core version
wp core update
wp core update-db

# Posts
wp post list --post_type=page --post_status=publish --fields=ID,post_title,post_name
wp post get 123 --fields=ID,post_title,post_content,post_status
wp post create --post_type=page --post_title="New Page" --post_status=publish
wp post update 123 --post_title="Updated"
wp post delete 123 --force

# Search-replace (e.g. domain migration)
wp search-replace 'oldsite.com' 'newsite.com' --skip-columns=guid

# Users
wp user list --fields=ID,user_login,user_email,roles
wp user create username email@example.com --role=editor --user_pass=password

# Plugins
wp plugin list
wp plugin install woocommerce --activate
wp plugin update --all

# Database
wp db export backup.sql
wp db import backup.sql
wp db query "SELECT ID, post_title FROM wp_posts WHERE post_status='publish' LIMIT 10"

# Cache
wp cache flush
wp rewrite flush

# Cron
wp cron event list
wp cron event run {hook_name}
```

---

## Gutenberg Blocks — REST / JSON Representation

Block content is stored as HTML comments in `post_content`. The REST API returns raw HTML unless you parse block grammar.

### Parsing blocks server-side (PHP)
```php
$blocks = parse_blocks($post->post_content);
foreach ($blocks as $block) {
    echo $block['blockName'];    // 'core/paragraph', 'core/image', etc.
    echo $block['attrs']['url']; // block attributes
    echo $block['innerHTML'];    // rendered HTML
}
```

### Registering a custom block (block.json)
```json
{
  "apiVersion": 2,
  "name": "avenueos/hero",
  "title": "AvenueOS Hero",
  "category": "layout",
  "attributes": {
    "heading":     { "type": "string", "default": "" },
    "subheading":  { "type": "string", "default": "" },
    "ctaText":     { "type": "string", "default": "Get Started" },
    "ctaUrl":      { "type": "string", "default": "#" }
  },
  "supports": { "html": false },
  "editorScript": "file:./index.js",
  "style": "file:./style.css"
}
```

---

## Hooks & Filters for REST API Extension

```php
// Modify REST response for posts
add_filter('rest_prepare_post', function(WP_REST_Response $response, WP_Post $post) {
    $response->data['custom_field'] = get_post_meta($post->ID, 'custom_field', true);
    return $response;
}, 10, 2);

// Add custom meta to REST response
register_post_meta('post', 'seo_score', [
    'show_in_rest' => true,
    'single'       => true,
    'type'         => 'integer',
    'auth_callback'=> function() { return current_user_can('edit_posts'); }
]);

// Validate REST requests
add_filter('rest_request_before_callbacks', function($response, $handler, WP_REST_Request $request) {
    if ($request->get_route() === '/wp/v2/posts' && $request->get_method() === 'POST') {
        // custom validation
    }
    return $response;
}, 10, 3);
```

---

## Multisite REST API

```http
# Main site
GET https://example.com/wp-json/wp/v2/posts

# Sub-site
GET https://example.com/site2/wp-json/wp/v2/posts
# or subdomain
GET https://site2.example.com/wp-json/wp/v2/posts

# Network admin endpoints (WordPress 5.1+)
GET /wp-json/wp/v2/sites  # requires network admin
```

WP-CLI multisite:
```bash
wp site list --fields=blog_id,url,registered
wp --url=site2.example.com post list
```

---

## Headless / Decoupled WordPress

### WPGraphQL
```graphql
query GetPage($slug: ID!) {
  page(id: $slug, idType: SLUG) {
    title
    content
    featuredImage { node { sourceUrl altText } }
    acfFields { heroHeading heroSubheading ctaText ctaUrl }
  }
}

query GetPosts($first: Int = 10, $after: String) {
  posts(first: $first, after: $after, where: { status: PUBLISH }) {
    pageInfo { hasNextPage endCursor }
    nodes { id slug title excerpt date author { node { name } } }
  }
}
```

Endpoint: `POST https://example.com/graphql`
Auth: Same as REST API (JWT / Application Passwords in Authorization header)

### Next.js + WordPress
```typescript
async function getPage(slug: string) {
  const res = await fetch(
    `${process.env.WP_API_URL}/wp/v2/pages?slug=${slug}&_embed=1`,
    { headers: { Authorization: `Basic ${process.env.WP_AUTH}` },
      next: { revalidate: 60 } }
  );
  const [page] = await res.json();
  return page;
}
```

---

## Security Best Practices

```php
// Always sanitize input
$title = sanitize_text_field($_POST['title']);
$html  = wp_kses_post($_POST['content']);  // allows safe HTML
$email = sanitize_email($_POST['email']);
$url   = esc_url_raw($_POST['url']);
$int   = absint($_POST['count']);

// Always escape output
echo esc_html($title);
echo esc_attr($attr);
echo esc_url($url);
echo wp_kses_post($content);

// Nonce verification (form submissions)
check_ajax_referer('avenueos_action', 'nonce');
wp_verify_nonce($_POST['nonce'], 'avenueos_action');

// Capability checks
if (!current_user_can('edit_posts')) {
    wp_send_json_error('Unauthorized', 403);
}

// REST permission callback — never use __return_true for write operations
'permission_callback' => function() {
    return current_user_can('edit_posts');
}
```

---

## Performance & Caching

```php
// Transients (database cache)
$result = get_transient('avenueos_api_data');
if (false === $result) {
    $result = expensive_api_call();
    set_transient('avenueos_api_data', $result, HOUR_IN_SECONDS);
}

// Object cache (Redis / Memcached)
wp_cache_set('key', $data, 'avenueos', 3600);
$data = wp_cache_get('key', 'avenueos');
wp_cache_delete('key', 'avenueos');

// Disable REST API cache for dynamic endpoints
add_filter('rest_post_dispatch', function($result, $server, $request) {
    if ($request->get_route() === '/avenueos/v1/live-data') {
        $result->header('Cache-Control', 'no-store');
    }
    return $result;
}, 10, 3);
```

---

## HTTP Requests (server-side)

```php
// Always use WordPress HTTP API — not curl directly
$response = wp_remote_get('https://api.example.com/data', [
    'timeout' => 10,
    'headers' => ['Authorization' => 'Bearer ' . $token],
]);

if (is_wp_error($response)) {
    error_log($response->get_error_message());
    return false;
}

$body = wp_remote_retrieve_body($response);
$data = json_decode($body, true);

$post_response = wp_remote_post('https://api.example.com/submit', [
    'body'    => json_encode($payload),
    'headers' => ['Content-Type' => 'application/json'],
    'timeout' => 15,
]);
```

---

## Webhooks — WordPress as Event Source

### ACF / post save hooks (send to external systems)
```php
add_action('save_post', function(int $post_id, WP_Post $post) {
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) return;
    if ($post->post_status !== 'publish') return;

    wp_remote_post(get_option('avenueos_webhook_url'), [
        'body'    => json_encode(['id' => $post_id, 'slug' => $post->post_name, 'type' => $post->post_type]),
        'headers' => ['Content-Type' => 'application/json', 'X-WP-Secret' => get_option('avenueos_webhook_secret')],
        'blocking'=> false,   // fire-and-forget
    ]);
}, 10, 2);
```

### WooCommerce webhooks (built-in)
Configure in wp-admin → WooCommerce → Settings → Advanced → Webhooks:
- Topic: `order.created`, `order.updated`, `product.updated`, `customer.created`
- Delivery URL: your endpoint
- Secret: used to generate `X-WC-Webhook-Signature` header (HMAC-SHA256)

---

## Error Reference

| HTTP Code | WordPress Meaning |
|---|---|
| 400 | `rest_invalid_param` — bad request data |
| 401 | `rest_not_logged_in` — authentication required |
| 403 | `rest_forbidden` — insufficient permissions |
| 404 | `rest_post_invalid_id` — resource not found |
| 500 | Server error — check `WP_DEBUG_LOG` |

Enable debug logging:
```php
// wp-config.php
define('WP_DEBUG',         true);
define('WP_DEBUG_LOG',     true);
define('WP_DEBUG_DISPLAY', false);
// Log at: wp-content/debug.log
```
