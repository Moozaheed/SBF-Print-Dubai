import { NextResponse } from "next/server";
import { PRODUCTS } from "@/data/pricing";

export const dynamic = "force-static";

export async function GET() {
  const xmlItems = PRODUCTS.map(
    (p) => `
    <item>
      <g:id>sbf-${p.id}</g:id>
      <g:title>${p.name} Printing</g:title>
      <g:description>Premium ${p.name} printed in Downtown Dubai with 48-hour delivery across UAE.</g:description>
      <g:link>https://sbfprint.ae</g:link>
      <g:image_link>https://sbfprint.ae/portfolio/gold-foil-luxury-card.jpg</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${p.minPressFee.toFixed(2)} AED</g:price>
      <g:brand>SBF Print And Design</g:brand>
    </item>`
  ).join("");

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>SBF Print And Design Product Feed</title>
    <link>https://sbfprint.ae</link>
    <description>Commercial Printing &amp; Custom Packaging Catalog Dubai</description>
    ${xmlItems}
  </channel>
</rss>`;

  return new NextResponse(xmlContent, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
