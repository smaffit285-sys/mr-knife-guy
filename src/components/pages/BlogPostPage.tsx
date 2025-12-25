import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import { Button } from '@/components/ui/button';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPosts | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const { items } = await BaseCrudService.getAll<BlogPosts>('blogposts');
        const foundPost = items.find((p) => p.slug === slug || p._id === slug);
        setPost(foundPost || null);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="font-paragraph text-lg text-dark-gray">Loading post...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Post Not Found</h1>
          <p className="font-paragraph text-lg text-dark-gray mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-paragraph">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-paragraph text-base text-light-gray hover:text-secondary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <h1 className="font-heading text-5xl md:text-6xl text-primary-foreground mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-light-gray">
              {post.publishDate && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span className="font-paragraph text-base">
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              )}
              {post.author && (
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span className="font-paragraph text-base">{post.author}</span>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="py-12">
          <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src={post.featuredImage}
                alt={post.title || 'Blog post featured image'}
                className="w-full h-auto rounded-lg max-w-5xl mx-auto"
                width={1200}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="py-12 pb-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.article
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="prose prose-lg max-w-none">
              {post.content ? (
                <div
                  className="font-paragraph text-lg text-dark-gray leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <p className="font-paragraph text-lg text-dark-gray leading-relaxed">
                  {post.excerpt || 'Content coming soon...'}
                </p>
              )}
            </div>
          </motion.article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-secondary-foreground mb-6">
              Need Professional Knife Sharpening?
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/90 mb-8">
              Let our artisan expertise bring your blades back to razor-sharp perfection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-foreground text-primary-foreground hover:bg-foreground/90 font-paragraph text-lg px-8 py-6 h-auto"
              >
                <Link to="/contact">Book Service</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-primary-foreground font-paragraph text-lg px-8 py-6 h-auto"
              >
                <Link to="/blog">Read More Articles</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
