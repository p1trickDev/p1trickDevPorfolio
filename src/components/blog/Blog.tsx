import { useState, lazy, Suspense } from "react";
// import { cn } from "@/lib/utils";
// import { ReactNode } from "react";

// Import ScrollLinked component using lazy loading
const ScrollLinked = lazy(() => import("./ScrollLinked"));

// Define blog post type
type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

// Sample blog posts
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with React 19",
    excerpt:
      "Learn about the new features in React 19 and how to use them effectively in your projects.",
    date: "2023-10-15",
    slug: "getting-started-with-react-19",
  },
  {
    id: "2",
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt:
      "Discover how to create beautiful, responsive user interfaces using Tailwind CSS.",
    date: "2023-09-22",
    slug: "building-responsive-uis-with-tailwind",
  },
  {
    id: "3",
    title: "Animation Techniques for Modern Web Applications",
    excerpt:
      "Explore various animation techniques to enhance user experience in your web applications.",
    date: "2023-08-10",
    slug: "animation-techniques-for-modern-web",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // If a post is selected, show the post view
  if (selectedPost) {
    return (
      <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
    );
  }

  // Otherwise, show the blog listing
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer hover:bg-black/30 transition-all"
            onClick={() => setSelectedPost(post)}
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#646cff]">
              {post.title}
            </h2>
            <div className="text-sm text-gray-400 mb-3">{post.date}</div>
            <p className="text-gray-300">{post.excerpt}</p>
            <button
              className="mt-4 text-sm font-medium text-[#646cff] hover:text-[#535bf2]"
              onClick={() => setSelectedPost(post)}
            >
              Read more →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// BlogPost component - uses ScrollLinked for article view
interface BlogPostProps {
  post: BlogPost;
  onBack: () => void;
}

function BlogPost({ post, onBack }: BlogPostProps) {
  return (
    <div className="relative">
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <ScrollLinked>
          <div className="max-w-3xl mx-auto px-4 pt-16 pb-24">
            <button
              onClick={onBack}
              className="flex items-center mb-8 text-sm font-medium text-[#646cff] hover:text-[#535bf2]"
            >
              ← Back to blog
            </button>

            <h1 className="text-4xl font-bold mb-3">{post.title}</h1>
            <div className="text-sm text-gray-400 mb-8">{post.date}</div>

            {/* Blog content - you would fetch this from your CMS or data source */}
            <div className="prose prose-invert max-w-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod
                eget ligula quis, imperdiet sagittis justo.
              </p>
              <p>
                In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a
                luctus porta. Mauris laoreet augue ut felis blandit, at iaculis
                odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
                eu tincidunt neque tincidunt a.
              </p>
              <h2>Getting Started</h2>
              <p>
                In eget sodales arcu, consectetur efficitur metus. Duis
                efficitur tincidunt odio, sit amet laoreet massa fringilla eu.
                Pellentesque id lacus pulvinar elit pulvinar pretium ac non
                urna. Mauris id mauris vel arcu commodo venenatis.
              </p>
              <p>
                Aliquam eu risus arcu. Proin sit amet lacus mollis, semper massa
                ut, rutrum mi. Sed sem nisi, luctus consequat ligula in, congue
                sodales nisl.
              </p>
              <h2>Advanced Techniques</h2>
              <p>
                Vestibulum bibendum at erat sit amet pulvinar. Pellentesque
                pharetra leo vitae tristique rutrum. Donec ut volutpat ante, ut
                suscipit leo.
              </p>
              <p>
                Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum
                fringilla aliquet. Pellentesque auctor vehicula malesuada.
                Aliquam id feugiat sem, sit amet tempor nulla.
              </p>
              <p>
                Quisque fermentum felis faucibus, vehicula metus ac, interdum
                nibh. Curabitur vitae convallis ligula. Integer ac enim vel
                felis pharetra laoreet.
              </p>
              <h2>Conclusion</h2>
              <p>
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Pellentesque hendrerit ac augue quis pretium. Morbi ut
                scelerisque nibh.
              </p>
              <p>
                Integer auctor, massa non dictum tristique, elit metus efficitur
                elit, ac pretium sapien nisl nec ante. In et ex ultricies,
                mollis mi in, euismod dolor.
              </p>
              <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
              {/* Add more paragraphs to enable scrolling */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ac rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod
                eget ligula quis, imperdiet sagittis justo.
              </p>
              <p>
                In viverra fermentum ex ac vestibulum. Aliquam eleifend nunc a
                luctus porta. Mauris laoreet augue ut felis blandit, at iaculis
                odio ultrices. Nulla facilisi. Vestibulum cursus ipsum tellus,
                eu tincidunt neque tincidunt a.
              </p>
            </div>
          </div>
        </ScrollLinked>
      </Suspense>
    </div>
  );
}
