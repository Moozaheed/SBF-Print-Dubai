import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileConversionOverlay from "@/components/MobileConversionOverlay";
import { BLOG_POSTS, getBlogBySlug } from "@/data/blogs";
import { Star, MessageSquare, ArrowLeft, Clock, Tag } from "lucide-react";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Blog Not Found | SBF Print" };
  return {
    title: `${post.title} | SBF Print & Design Dubai`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: "article",
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (!line) { elements.push(<div key={key++} className="h-3" />); continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="text-xl sm:text-2xl font-extrabold text-zinc-900 pt-6 pb-1 tracking-tight">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="text-base sm:text-lg font-bold text-zinc-900 pt-4 pb-1">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("| ")) {
      if (/^\|[\s|:-]+\|$/.test(line)) continue; // skip separator rows like |---|---|
      elements.push(
        <div key={key++} className="text-xs text-zinc-500 font-mono bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-1">
          {line}
        </div>
      );
    } else if (line.startsWith("- **")) {
      const parts = line.slice(2).split("**");
      elements.push(
        <li key={key++} className="flex gap-2 text-sm text-zinc-700 leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C68FE6] flex-shrink-0" />
          <span><strong className="text-zinc-900">{parts[1]}</strong>{parts[2]}</span>
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={key++} className="flex gap-2 text-sm text-zinc-700 leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C68FE6] flex-shrink-0" />
          <span>{line.slice(2)}</span>
        </li>
      );
    } else if (line.startsWith("**SBF tip:**")) {
      elements.push(
        <div key={key++} className="bg-[#C68FE6]/10 border-l-4 border-[#C68FE6] rounded-r-xl px-4 py-3 text-xs text-zinc-700 leading-relaxed">
          <strong className="text-[#C68FE6]">SBF Tip: </strong>
          {line.replace("**SBF tip:**", "").trim()}
        </div>
      );
    } else {
      // inline bold & links
      const parsed = line
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-[#C68FE6] font-semibold underline hover:text-[#b078d6]">$1</a>');
      elements.push(
        <p
          key={key++}
          className="text-sm text-zinc-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: parsed }}
        />
      );
    }
  }
  return elements;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.metaDescription,
        "image": `https://sbfprint.ae${post.image}`,
        "datePublished": post.date,
        "dateModified": post.date,
        "author": { "@type": "Organization", "name": "SBF Print & Design", "url": "https://sbfprint.ae" },
        "publisher": {
          "@type": "Organization",
          "name": "SBF Print & Design",
          "logo": { "@type": "ImageObject", "url": "https://sbfprint.ae/icon.svg" },
        },
        "mainEntityOfPage": { "@type": "WebPage", "@id": `https://sbfprint.ae/blog/${post.slug}` },
        "keywords": `printing dubai, ${post.category.toLowerCase()}, sbf print dubai, signage dubai, commercial printing uae`,
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sbfprint.ae" },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://sbfprint.ae/blog" },
          { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://sbfprint.ae/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <Navbar />

      <div className="bg-white text-zinc-900 pt-48 md:pt-52 pb-20 selection:bg-[#C68FE6] selection:text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-[#C68FE6] transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Blog
          </Link>

          {/* Article Header */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-zinc-400">
              <span className="bg-[#C68FE6]/10 text-[#C68FE6] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag className="w-3 h-3" /> {post.category}
              </span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              <span>{post.date}</span>
              <span className="flex items-center gap-1">
                <MessageSquare className="w-3 h-3" /> {post.comments.length} comments
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-sm text-zinc-500 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[16/8] rounded-2xl overflow-hidden mb-10 border border-zinc-200">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          {/* Article Content */}
          <article className="space-y-4 max-w-none">
            {renderContent(post.content)}
          </article>

          {/* Divider */}
          <div className="border-t border-zinc-200 my-14" />

          {/* Comments Section */}
          <section className="space-y-8">
            <h2 className="text-xl font-extrabold text-zinc-900">
              Comments <span className="text-[#C68FE6]">({post.comments.length})</span>
            </h2>

            <div className="space-y-5">
              {post.comments.map((comment, idx) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#C68FE6] text-white text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                      {comment.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900">{comment.name}</p>
                      <p className="text-[11px] text-zinc-400 font-medium">{comment.date}</p>
                    </div>
                    {/* Stars */}
                    <div className="ml-auto flex text-amber-400">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-zinc-600 leading-relaxed">{comment.comment}</p>
                </div>
              ))}
            </div>

            {/* Leave a Comment CTA */}
            <div className="bg-[#C68FE6]/5 border border-[#C68FE6]/20 rounded-2xl p-6 space-y-3 text-center">
              <p className="text-sm font-bold text-zinc-700">Have a question or feedback about this article?</p>
              <a
                href={`https://wa.me/9710525069091?text=${encodeURIComponent(`Hi SBF Print! I read your blog article: "${post.title}" and wanted to ask...`)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C68FE6] hover:bg-[#b078d6] text-white text-xs font-extrabold transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Chat with Us on WhatsApp
              </a>
            </div>
          </section>

          {/* Related Articles */}
          {related.length > 0 && (
            <>
              <div className="border-t border-zinc-200 my-14" />
              <section className="space-y-6">
                <h2 className="text-xl font-extrabold text-zinc-900">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {related.map((rel) => (
                    <Link
                      key={rel.slug}
                      href={`/blog/${rel.slug}`}
                      className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100">
                        <Image src={rel.image} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-4 space-y-1.5">
                        <span className="text-[10px] font-bold text-[#C68FE6] uppercase">{rel.category}</span>
                        <h3 className="text-sm font-bold text-zinc-900 group-hover:text-[#C68FE6] transition-colors leading-snug line-clamp-2">
                          {rel.title}
                        </h3>
                        <p className="text-[11px] text-zinc-400">{rel.date} · {rel.readTime}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </>
          )}

        </div>
      </div>

      <Footer />
      <MobileConversionOverlay />
    </main>
  );
}
