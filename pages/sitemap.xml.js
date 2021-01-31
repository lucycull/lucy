const toUrl = (host, route) =>
    `<url><loc>https://www.${host}${route}</loc></url>`

const createSitemap = (host, routes, posts) => `<?xml version="1.0" encoding="utf-8"?><urlset xmlns='http://sitemaps.org/schemas/sitemap/0.9'>${routes.map((route) => toUrl(host, route)).join("")}</urlset>`

export default  function Sitemap() {}

Sitemap.getInitialProps = ({res, req}) => {
    const routes = ["", "/design", "/photos", "/blog", "/contact"]
    const sitemap = createSitemap(req.headers.host, routes)
    res.setHeader("Content-Type", "text/xml")
    res.write(sitemap)
    res.end()
    return res
}