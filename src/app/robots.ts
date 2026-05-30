import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
      {
        userAgent: "Yandex",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: "https://usta.net.kg/sitemap.xml",
    host: "https://usta.net.kg",
  };
}
