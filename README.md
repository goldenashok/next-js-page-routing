# next-js-page-routing
1. File System based routing mechanism
2. when a file is added to the page folder in a project, it automatically becomes available as a route
3. By mixing and matching file names with a nested folder structure, it is possible to pretty much define the most common routing system

1. Page based mechanism - pages are associated with a route based on their file name
2. Nested routes - Nested folder structure, files will be automatically routed in the same way in the URL
3. Dynamic routes - Can be created by adding square brackets to a page name
4. Catch all routes - Add there dots inside square brackets to create a catch all routes. Helful when you want different URLs for the same page layout or even when you're working with pages where some of the route parameters are optional.
5. Link Component to navigate on click of an element
6. useRouter hook router.push method to navigate programmatically.
7. How to create a custom 404 page.

URL 
1. http://localhost:3000/ -> pages/index.js
2. http://localhost:3000/about -> pages/about.js
3. http://localhost:3000/blog -> pages/blog/index.js

Nested Routing
1. http://localhost:3000/blog -> pages/blog/index.js
2. http://localhost:3000/blog/first -> pages/blog/first.js
3. http://localhost:3000/blog/second -> pages/blog/second.js

Dynamic Routing
1. http://localhost:3000/product -> pages/product/index.js
2. http://localhost:3000/product/1 -> pages/product/[productId].js or prages/product/[productId]/index.js

Nested Dynamic Routing
1. http://localhost:3000/product/1/review -> pages/product/[productId]/review/index.js
2. http://localhost:3000/product/1/review/1 -> pages/product/[productId]/review/[reviewId].js

Catch All Routes
1. http://localhost:3000/docs/feature1 or http://localhost:3000/docs/feature1/feature2 or http://localhost:3000/docs/feature1/feature2/feature3 -> pages/docs/[...params].js

Link Component Navigation
Link used to navigate one page to another page
<Link href="/product"><a>Product</a></Link>
<Link href="/product" replace><a>Product</a></Link> -> Replace used replace to from source page history


Navigate Programatically

import {useRouter} form 'next/router';

const router = userRouter();
router.push('/produt');

