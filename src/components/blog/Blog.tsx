import { useState, useEffect } from "react";
import DayOne from "./DayOne";
import DayTwo from "./DayTwo";
import DayThree from "./DayThree";
import DayFour from "./DayFour";
import DayFive from "./DayFive";
import DaySix from "./DaySix";
import DaySeven from "./DaySeven";

// Define blog post type
export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
};

// Blog posts - only keeping the OJT diary entries
const blogPosts: BlogPost[] = [
  {
    id: "7",
    title: "Day Seven of OJT: Small Wins, Big Lessons",
    excerpt:
      "Our day of overcoming challenges with the notification system and learning the value of persistence in software development.",
    date: "February 24, 2025",
    slug: "day-seven-ojt",
  },
  {
    id: "6",
    title: "Day Six of OJT: Turning Feedback Into Features",
    excerpt:
      "How we implemented document history logs and notification features based on real user feedback to create a more meaningful system.",
    date: "February 22, 2025",
    slug: "day-six-ojt",
  },
  {
    id: "5",
    title: "Day Five of OJT: Progress Report and Real-World Insights",
    excerpt:
      "Our experience submitting our first progress report and gathering valuable user insights to improve our document tracking system.",
    date: "February 21, 2025",
    slug: "day-five-ojt",
  },
  {
    id: "4",
    title: "Day Four of OJT: Implementing Document Tracking and User Roles",
    excerpt:
      "Our progress developing the core features of the document tracking system and implementing user role management.",
    date: "February 20, 2025",
    slug: "day-four-ojt",
  },
  {
    id: "3",
    title: "Day Three of OJT: Planning Features and Starting Development",
    excerpt:
      "Our journey from project planning to actual development as we start building the document tracking system.",
    date: "February 19, 2025",
    slug: "day-three-ojt",
  },
  {
    id: "2",
    title: "Day Two of OJT: Laying the Groundwork and Overcoming Git Hurdles",
    excerpt:
      "Our team's journey through Git challenges and setting up the Django development environment.",
    date: "Feb 18, 2025",
    slug: "day-two-ojt",
  },
  {
    id: "1",
    title: "Day One: On the Job Training (OJT)",
    excerpt:
      "My experience during the first day of on-the-job training as a graduating IT student.",
    date: "Feb 17, 2025",
    slug: "day-one-ojt",
  },
];

interface BlogProps {
  initialSelectedPost?: BlogPost | null;
  onBack?: () => void;
  onPostSelect?: (post: BlogPost) => void;
}

export default function Blog({
  initialSelectedPost = null,
  onBack,
  onPostSelect,
}: BlogProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(
    initialSelectedPost
  );

  // Use initialSelectedPost if provided (for direct linking)
  useEffect(() => {
    if (initialSelectedPost) {
      setSelectedPost(initialSelectedPost);
    }
  }, [initialSelectedPost]);

  const handlePostSelect = (post: BlogPost) => {
    if (onPostSelect) {
      // If we have a parent handler, let the parent component handle showing the post
      onPostSelect(post);
    } else {
      // Otherwise, handle it locally
      setSelectedPost(post);
    }
  };

  const handleBack = () => {
    if (onBack) {
      // If we have a parent back handler, use it
      onBack();
    } else {
      // Otherwise, handle it locally
      setSelectedPost(null);
    }
  };

  // If a post is selected, show the post view
  if (selectedPost) {
    return <BlogPost post={selectedPost} onBack={handleBack} />;
  }

  // Otherwise, show the blog listing
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 cursor-pointer hover:bg-black/30 transition-all"
            onClick={() => handlePostSelect(post)}
          >
            <h2 className="text-2xl font-semibold mb-2 text-[#646cff]">
              {post.title}
            </h2>
            <div className="text-sm text-gray-400 mb-3">{post.date}</div>
            <p className="text-gray-300">{post.excerpt}</p>
            <button
              className="mt-4 text-sm font-medium text-[#646cff] hover:text-[#535bf2]"
              onClick={(e) => {
                e.stopPropagation();
                handlePostSelect(post);
              }}
            >
              Read more →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// BlogPost component - specialized for each day's post
interface BlogPostProps {
  post: BlogPost;
  onBack: () => void;
}

function BlogPost({ post, onBack }: BlogPostProps) {
  // Render the appropriate component based on the slug
  const backButton = (
    <button
      onClick={onBack}
      className="fixed top-16 left-4 z-20 flex items-center px-3 py-2 text-sm font-medium text-[#646cff] hover:text-[#535bf2] bg-black/50 rounded-lg backdrop-blur-sm"
    >
      ← Back to blog
    </button>
  );

  // Use a switch statement for better readability
  switch (post.slug) {
    case "day-one-ojt":
      return (
        <div className="relative">
          {backButton}
          <DayOne />
        </div>
      );
    case "day-two-ojt":
      return (
        <div className="relative">
          {backButton}
          <DayTwo />
        </div>
      );
    case "day-three-ojt":
      return (
        <div className="relative">
          {backButton}
          <DayThree />
        </div>
      );
    case "day-four-ojt":
      return (
        <div className="relative">
          {backButton}
          <DayFour />
        </div>
      );
    case "day-five-ojt":
      return (
        <div className="relative">
          {backButton}
          <DayFive />
        </div>
      );
    case "day-six-ojt":
      return (
        <div className="relative">
          {backButton}
          <DaySix />
        </div>
      );
    case "day-seven-ojt":
      return (
        <div className="relative">
          {backButton}
          <DaySeven />
        </div>
      );
    default:
      return (
        <div className="relative">
          {backButton}
          <div className="text-center py-10">Post not found</div>
        </div>
      );
  }
}
