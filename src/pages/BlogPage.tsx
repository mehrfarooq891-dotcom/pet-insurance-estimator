import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, ArrowRight, BookOpen, Filter } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/blogData';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => (
  <div 
    id={`blog-card-${post.id}`}
    className="bg-white rounded-2xl border border-border hover:border-primary/20 hover:shadow-hero transition-all duration-300 flex flex-col h-full overflow-hidden group hover:-translate-y-0.5"
  >
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center justify-between gap-4 mb-4">
        <span 
          id={`blog-card-emoji-${post.id}`}
          className="text-2xl p-2 bg-warm rounded-xl"
        >
          {post.emoji}
        </span>
        <span 
          id={`blog-card-tag-${post.id}`}
          className="text-[10px] font-extrabold tracking-widest uppercase text-accent bg-primary-pale px-3 py-1 rounded-full border border-accent/10"
        >
          {post.tag}
        </span>
      </div>
      
      <h3 
        id={`blog-card-title-${post.id}`}
        className="text-xl font-serif font-bold text-text-main mb-3 leading-snug hover:text-accent transition-colors"
      >
        <Link to={post.link}>{post.title}</Link>
      </h3>
      
      <p 
        id={`blog-card-excerpt-${post.id}`}
        className="text-text-muted text-sm mb-6 line-clamp-3 leading-relaxed flex-grow font-sans"
      >
        {post.excerpt}
      </p>
      
      <div className="pt-4 border-t border-border/50 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-3 text-text-muted text-[11px] font-medium uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-accent" />
            {post.dateFormatted}
          </span>
          <span className="text-border">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-accent" />
            {post.readTime}
          </span>
        </div>
        
        <Link 
          id={`blog-card-link-${post.id}`}
          to={post.link} 
          className="text-primary hover:text-primary-dark font-extrabold text-xs flex items-center gap-1 group-hover:translate-x-0.5 transition-transform underline underline-offset-4 decoration-primary/20"
        >
          Read Report
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  </div>
);

const CATEGORIES = [
  "All", 
  "Guides & Tips", 
  "Breed Analytics", 
  "Financial Planning", 
  "Regional Cost Reports"
] as const;

export const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<typeof CATEGORIES[number]>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const getMajorCategory = (tag: string): typeof CATEGORIES[number] => {
    const lowercaseTag = tag.toLowerCase();
    if (lowercaseTag.includes("breed") || lowercaseTag.includes("health") || lowercaseTag.includes("risk") || lowercaseTag.includes("feline") || lowercaseTag.includes("golden")) {
      return "Breed Analytics";
    }
    if (lowercaseTag.includes("state") || lowercaseTag.includes("regional") || lowercaseTag.includes("guide") && (lowercaseTag.includes("texas") || lowercaseTag.includes("california") || lowercaseTag.includes("new york") || lowercaseTag.includes("cost guide"))) {
      return "Regional Cost Reports";
    }
    if (lowercaseTag.includes("economic") || lowercaseTag.includes("financial") || lowercaseTag.includes("benefit") || lowercaseTag.includes("bill") || lowercaseTag.includes("monthly") || lowercaseTag.includes("premium")) {
      return "Financial Planning";
    }
    return "Guides & Tips";
  };

  // Sort and filter the posts in real time
  const processedPosts = useMemo(() => {
    // 1. Sort chronologically (newest first)
    const sorted = [...BLOG_POSTS].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // 2. Filter by Category and Search Query
    return sorted.filter(post => {
      const matchesCategory = selectedCategory === "All" || getMajorCategory(post.tag) === selectedCategory;
      const matchesSearch = searchQuery.trim() === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tag.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div id="blog-page-root" className="bg-bg min-h-screen pb-24">
      
      {/* Premium Hero/Header Section */}
      <header className="bg-primary-dark pt-24 pb-32 px-6 text-center relative overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] -mr-48 -mb-48" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-accent/20 border border-accent/30 text-accent text-[9px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] mb-6">
            Veterinary Actuarial Intelligence
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
            Independent Pet Insurance Cost Research
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            We analyze veterinary clinic prices, billing rates, and policy details across all 50 states to build independent, data-backed models for pet parents.
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 relative z-20 -mt-16">
        
        {/* Filter controls panel */}
        <div id="blog-controls-panel" className="bg-warm rounded-3xl border border-border p-6 shadow-card mb-12 flex flex-col md:flex-row gap-6 items-center justify-between">
          
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted/60 w-5 h-5" />
            <input 
              id="blog-search-input"
              type="text" 
              placeholder="Search 50+ articles, breeds, and state guides..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-border rounded-xl pl-12 pr-4 py-3.5 text-sm font-medium text-text-main placeholder-text-muted/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <span className="text-text-muted/60 text-[10px] font-extrabold uppercase tracking-widest flex items-center gap-1.5 mr-2 shrink-0">
              <Filter className="w-3.5 h-3.5 text-accent" />
              Filter:
            </span>
            {CATEGORIES.map((category) => (
              <button
                key={category}
                id={`category-tab-${category.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 shrink-0 ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-md shadow-primary/10"
                    : "bg-white text-text-muted hover:bg-white/80 border border-border hover:border-primary/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter / Meta Details */}
        <div className="flex items-center justify-between gap-4 mb-8 px-2">
          <p id="results-count" className="text-sm font-bold text-text-muted uppercase tracking-wider">
            Showing <span className="text-primary">{processedPosts.length}</span> of {BLOG_POSTS.length} Reports
          </p>
          {(selectedCategory !== "All" || searchQuery !== "") && (
            <button 
              id="clear-filters-btn"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-xs font-extrabold text-primary hover:text-primary-dark hover:underline uppercase tracking-wider"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Dynamic Post Grid */}
        {processedPosts.length > 0 ? (
          <div id="blog-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div id="blog-empty" className="text-center bg-white rounded-3xl border border-border p-16 max-w-lg mx-auto shadow-card">
            <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-text-main mb-2">No Reports Found</h3>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">
              We couldn't find any intelligence reports matching your current search parameters. Try adjusting your query or switching categories.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="bg-primary text-white font-bold text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-primary-dark shadow-md transition-all"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
