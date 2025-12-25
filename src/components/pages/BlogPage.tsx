import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BaseCrudService } from '@/integrations';
import { BlogPosts } from '@/entities';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPosts[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { items } = await BaseCrudService.getAll<BlogPosts>('blogposts');
        setPosts(items.sort((a, b) => {
          const dateA = a.publishDate ? new Date(a.publishDate).getTime() : 0;
          const dateB = b.publishDate ? new Date(b.publishDate).getTime() : 0;
          return dateB - dateA;
        }));
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 bg-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-7xl text-primary-foreground mb-6">
              Knife Care & Expertise Blog
            </h1>
            <p className="font-paragraph text-xl text-light-gray">
              Expert insights, tips, and guides on knife maintenance, sharpening techniques, and
              blade selection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          {loading ? (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-dark-gray">Loading blog posts...</p>
            </div>
          ) : posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post._id}
                  className="bg-background border border-light-gray rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {post.featuredImage && (
                    <Link to={`/blog/${post.slug || post._id}`}>
                      <Image
                        src={post.featuredImage}
                        alt={post.title || 'Blog post'}
                        className="w-full h-56 object-cover hover:opacity-90 transition-opacity"
                        width={400}
                      />
                    </Link>
                  )}

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-dark-gray">
                      {post.publishDate && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-paragraph">
                            {new Date(post.publishDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric',
                            })}
                          </span>
                        </div>
                      )}
                      {post.author && (
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span className="font-paragraph">{post.author}</span>
                        </div>
                      )}
                    </div>

                    <Link to={`/blog/${post.slug || post._id}`}>
                      <h2 className="font-heading text-2xl text-foreground mb-3 hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                    </Link>

                    {post.excerpt && (
                      <p className="font-paragraph text-base text-dark-gray mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}

                    <Link
                      to={`/blog/${post.slug || post._id}`}
                      className="inline-flex items-center gap-2 font-paragraph text-base text-primary hover:text-primary/80 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-paragraph text-lg text-dark-gray">
                No blog posts available at the moment. Check back soon for expert knife care tips!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-5xl text-primary-foreground mb-6">
              Ready to Experience Expert Knife Care?
            </h2>
            <p className="font-paragraph text-xl text-light-gray mb-8">
              Let us bring artisan precision to your blades with our professional sharpening
              services
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-paragraph text-lg px-8 py-6 h-auto"
            >
              <Link to="/contact">Schedule Your Service</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
