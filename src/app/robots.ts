import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.olutolastudios.online/sitemap.xml",
    host: "https://www.olutolastudios.online",
  };
}
