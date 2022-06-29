# Franchise Hub Server API Routes
***BASE DEBUG ROUTE: https://franchise-hub-server.herokuapp.com***

## Hello World!
> •  `GET` ➜ `/`

## Website
### Create new forms:
> •  `POST` ➜ `/api/v1/webview/forms/franchisor-registration/new` <br>

> •  `POST` ➜ `/api/v1/webview/forms/newsletter-subscribers/new` <br>

> •  `POST` ➜ `/api/v1/webview/forms/free-advice/new` <br>

> •  `POST` ➜ `/api/v1/webview/forms/franchisee-application/new` <br>

### `GET` card data:
> •  `GET` ➜ `/api/v1/webview/section/top-franchise-opportunities/all` <br>

> •  `GET` ➜ `/api/v1/webview/section/listed-franchises/all` <br>

> •  `GET` ➜ `/api/v1/webview/section/trending-videos/all` <br>

> •  `GET` ➜ `/api/v1/webview/section/trending-franchises` <br>
 - `?quantity=number-of-items` <br>

> •  `GET` ➜ `/api/v1/webview/section/events/all`
	
### Filter Franchises:
> •  `GET` ➜ `/api/v1/webview/section/filter` <br>
- `?search_by=location`<br>
  - `&industry=industry`<br>
  - `&country=country`<br>
  - `&state=state`<br>
- `?search_by=investment`<br>
  - `&industry=industry`<br>
  - `&min=min_investment`<br>
  - `&max=max_investment`

## Dashboard
### Admin Login:
> •  `POST` ➜ `/api/v1/admin/login` <br>

> •  `POST` ➜ `/api/v1/admin/logout` <br>

### Event Section Menu:
> •  `GET` ➜ `/api/v1/admin/dashboard/web/events/:page`
 - `?quantity=per-page-quantity` <br>

> •  `POST` ➜ `/api/v1/admin/dashboard/web/events/new` <br>

> •  `DELETE` ➜ `/api/v1/admin/dashboard/web/events/:objectId` <br>

### Trending Videos Section Menu:
> •  `GET` ➜ `/api/v1/admin/dashboard/web/trending-videos/:page`
 - `?quantity=per-page-quantity` <br>

> •  `POST` ➜ `/api/v1/admin/dashboard/web/trending-videos/new` <br>

> •  `DELETE` ➜ `/api/v1/admin/dashboard/web/trending-videos/:objectId` <br> 

### Franchisor Registration Form Menu:
> •  `POST` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/new` <br>

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/all/:page`
 - `?quantity=per-page-quantity` <br>

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/read/:page`
 - `?quantity=per-page-quantity` <br>

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/unread/:page`
 - `?quantity=per-page-quantity` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/update/:objectId` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/mark-read/:objectId` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/mark-unread/:objectId` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/enable-listing/:objectId` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/disable-listing/:objectId` <br>

> •  `DELETE` ➜ `/api/v1/admin/dashboard/forms/franchisor-registration/:objectId` <br>

### Franchisee Application Form Menu:

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/franchisee-application/all/:page`
 - `?quantity=per-page-quantity` <br>

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/franchisee-application/read/:page`
 - `?quantity=per-page-quantity` <br>

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/franchisee-application/unread/:page`
 - `?quantity=per-page-quantity` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/franchisee-application/mark-read/:objectId` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/franchisee-application/mark-unread/:objectId` <br>

> •  `DELETE` ➜ `/api/v1/admin/dashboard/forms/franchisee-application/:objectId` <br>

### Free Advice Form Menu:

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/free-advice/all/:page`
 - `?quantity=per-page-quantity` <br>

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/free-advice/read/:page`
 - `?quantity=per-page-quantity` <br>

> •  `GET` ➜ `/api/v1/admin/dashboard/forms/free-advice/unread/:page`
 - `?quantity=per-page-quantity` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/free-advice/mark-read/:objectId` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/free-advice/mark-unread/:objectId` <br>

> •  `DELETE` ➜ `/api/v1/admin/dashboard/forms/free-advice/:objectId` <br>

### Newsletter Subscribers Form Menu:
> •  `GET` ➜ `/api/v1/admin/dashboard/forms/newsletter-subscribers/:page`
 - `?quantity=per-page-quantity` <br>

> •  `PUT` ➜ `/api/v1/admin/dashboard/forms/newsletter-subscribers/mark-allread` <br>

> •  `DELETE` ➜ `/api/v1/admin/dashboard/forms/newsletter-subscribers/:objectId` <br>

## Admin Profile
### Change Admin Username:
> •  `POST` ➜ `/api/v1/admin/dashboard/profile/change-username` <br>

### Change Admin Password:
> •  `POST` ➜ `/api/v1/admin/dashboard/profile/change-password` <br>
