import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";
import { BLOG_POSTS } from "@/data/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printing & Signage Blog Dubai | Tips, Guides & Insights | SBF Print",
  description: "Expert printing tips, signage guides, and design insights from SBF Print & Design — Dubai's leading commercial printing press in Downtown Dubai.",
  alternates: {
    canonical: "https://sbfprint.ae/blog",
  },
  openGraph: {
    title: "Printing & Signage Blog Dubai | SBF Print & Design",
    description: "Expert printing tips, signage guides, and design insights from Downtown Dubai's leading commercial printing press.",
    url: "https://sbfprint.ae/blog",
    images: [{ url: "/portfolio/gold-foil-luxury-card.jpg", width: 1200, height: 630, alt: "SBF Print & Design Blog Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Printing & Signage Blog Dubai | SBF Print",
    description: "Expert printing tips and signage guides from SBF Print & Design Dubai.",
    images: ["/portfolio/gold-foil-luxury-card.jpg"],
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-white text-zinc-900 min-h-screen pt-48 md:pt-52 pb-20 selection:bg-[#C68FE6] selection:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center pb-12 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#C68FE6] bg-[#C68FE6]/10 px-3.5 py-1 rounded-full inline-block">
              Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
              Printing &amp; Signage Blog
            </h1>
            <p className="text-sm text-zinc-500 max-w-xl mx-auto leading-relaxed">
              Expert guides, tips, and industry insights from SBF Print &amp; Design — Downtown Dubai&apos;s leading commercial printing press.
            </p>
            <div className="w-16 h-1 bg-[#C68FE6] rounded-full mx-auto" />
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-black uppercase tracking-wider bg-[#C68FE6] text-white px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-[11px] text-zinc-400 font-semibold">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                    <span>·</span>
                    <span>{post.comments.length} comments</span>
                  </div>
                  <h2 className="text-sm font-bold text-zinc-900 group-hover:text-[#C68FE6] transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#C68FE6] group-hover:underline pt-1">
                    Read Article →
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      <Footer />
      <MobileConversionOverlay />
    </main>
  );
}
