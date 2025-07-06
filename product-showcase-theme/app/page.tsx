"use client";

import { useState, useEffect } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  X,
  ArrowRight,
  Eye,
  Heart,
  Share2,
  Download,
  Zap,
  Shield,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  Quote,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Clock,
  Target,
  Code,
  Database,
  Cloud,
  Cpu,
  Settings,
  Layers,
  Sparkles,
  Rocket,
  User,
  Github,
  Linkedin,
  ExternalLink,
  Box,
  Package,
  Briefcase,
  Book,
  Camera,
  Video,
  Image,
  FileText,
  BarChart,
  PieChart,
  LineChart,
} from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  metrics: {
    users: string;
    rating: number;
    reviews: number;
  };
  liveUrl: string;
  githubUrl: string;
  showcase: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatar: string;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const products: Product[] = [
    {
      id: "ecommerce",
      name: "E-Commerce Platform",
      category: "web",
      description: "Full-featured online marketplace with advanced shopping cart, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Real-time inventory management",
        "Multi-payment gateway integration",
        "Advanced search and filtering",
        "Order tracking system",
        "Admin analytics dashboard",
        "Mobile responsive design",
      ],
      metrics: {
        users: "10,000+",
        rating: 4.9,
        reviews: 234,
      },
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/alexdev/ecommerce",
      showcase: true,
    },
    {
      id: "chatbot",
      name: "AI Chat Assistant",
      category: "ai",
      description: "Intelligent customer service chatbot powered by machine learning and natural language processing.",
      image: "/api/placeholder/600/400",
      technologies: ["Python", "OpenAI", "React", "WebSockets", "Docker"],
      features: [
        "Natural language understanding",
        "Multi-language support",
        "Integration with popular platforms",
        "Analytics and reporting",
        "Custom training capabilities",
        "Real-time chat interface",
      ],
      metrics: {
        users: "5,000+",
        rating: 4.8,
        reviews: 189,
      },
      liveUrl: "https://ai-chat-demo.com",
      githubUrl: "https://github.com/alexdev/ai-chat",
      showcase: true,
    },
    {
      id: "banking",
      name: "Mobile Banking App",
      category: "mobile",
      description: "Secure mobile banking application with transaction management and financial insights.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Firebase", "Plaid", "Biometric Auth"],
      features: [
        "Secure biometric authentication",
        "Real-time transaction tracking",
        "Budget management tools",
        "Bill payment integration",
        "Financial analytics",
        "Cross-platform compatibility",
      ],
      metrics: {
        users: "50,000+",
        rating: 4.7,
        reviews: 1024,
      },
      liveUrl: "https://banking-app-demo.com",
      githubUrl: "https://github.com/alexdev/banking-app",
      showcase: true,
    },
    {
      id: "dashboard",
      name: "Analytics Dashboard",
      category: "dashboard",
      description: "Real-time data visualization platform with interactive charts and comprehensive reporting.",
      image: "/api/placeholder/600/400",
      technologies: ["Vue.js", "D3.js", "MongoDB", "Redis", "Chart.js"],
      features: [
        "Real-time data visualization",
        "Interactive charts and graphs",
        "Custom report generation",
        "Data export capabilities",
        "Multi-datasource integration",
        "Responsive design",
      ],
      metrics: {
        users: "2,500+",
        rating: 4.6,
        reviews: 156,
      },
      liveUrl: "https://analytics-demo.com",
      githubUrl: "https://github.com/alexdev/analytics",
      showcase: false,
    },
    {
      id: "crm",
      name: "Customer CRM System",
      category: "web",
      description: "Comprehensive customer relationship management system with lead tracking and sales pipeline.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MySQL", "Redis", "Docker"],
      features: [
        "Lead management and tracking",
        "Sales pipeline visualization",
        "Email marketing integration",
        "Customer interaction history",
        "Reporting and analytics",
        "Team collaboration tools",
      ],
      metrics: {
        users: "3,200+",
        rating: 4.5,
        reviews: 89,
      },
      liveUrl: "https://crm-demo.com",
      githubUrl: "https://github.com/alexdev/crm",
      showcase: false,
    },
    {
      id: "portfolio",
      name: "Portfolio Generator",
      category: "web",
      description: "Dynamic portfolio website generator with customizable themes and content management.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
      features: [
        "Multiple portfolio themes",
        "Drag-and-drop page builder",
        "SEO optimization",
        "Custom domain support",
        "Analytics integration",
        "Mobile-first design",
      ],
      metrics: {
        users: "1,800+",
        rating: 4.8,
        reviews: 67,
      },
      liveUrl: "https://portfolio-generator.com",
      githubUrl: "https://github.com/alexdev/portfolio-gen",
      showcase: false,
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp Inc.",
      rating: 5,
      content:
        "Alex's e-commerce platform transformed our business. The intuitive design and robust features helped us increase sales by 150% in just 6 months.",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: "2",
      name: "Mike Chen",
      role: "CEO",
      company: "StartupXYZ",
      rating: 5,
      content:
        "The AI chatbot solution reduced our customer service workload by 60%. Alex's attention to detail and technical expertise is outstanding.",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "CTO",
      company: "FinanceFlow",
      rating: 5,
      content:
        "The mobile banking app Alex built is secure, user-friendly, and scalable. Our users love the seamless experience and advanced features.",
      avatar: "/api/placeholder/80/80",
    },
    {
      id: "4",
      name: "David Kim",
      role: "Marketing Director",
      company: "DataInsights",
      rating: 4,
      content:
        "The analytics dashboard provides incredible insights into our data. The visualizations are beautiful and the performance is exceptional.",
      avatar: "/api/placeholder/80/80",
    },
  ];

  const categories = [
    { id: "all", label: "All Products", count: products.length },
    { id: "web", label: "Web Apps", count: products.filter((p) => p.category === "web").length },
    { id: "mobile", label: "Mobile Apps", count: products.filter((p) => p.category === "mobile").length },
    { id: "ai", label: "AI Solutions", count: products.filter((p) => p.category === "ai").length },
    { id: "dashboard", label: "Dashboards", count: products.filter((p) => p.category === "dashboard").length },
  ];

  const showcaseProducts = products.filter((p) => p.showcase);
  const filteredProducts = activeFilter === "all" ? products : products.filter((p) => p.category === activeFilter);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Alex Rodriguez</h1>
                <p className="text-gray-600">Product Portfolio</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors">
                <MessageSquare className="w-4 h-4" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Bringing Ideas to Life Through Code</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Discover a collection of innovative digital products built with cutting-edge technologies. From e-commerce platforms to AI
            solutions, each project represents a commitment to excellence and user experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Eye className="w-5 h-5" />
              View Portfolio
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-200">Products Built</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-blue-200">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-blue-200">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Showcasing the most impactful solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showcaseProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-6xl">
                      {product.category === "web" && <Globe />}
                      {product.category === "mobile" && <Smartphone />}
                      {product.category === "ai" && <Cpu />}
                      {product.category === "dashboard" && <BarChart />}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2"
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.metrics.rating}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {product.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">+{product.technologies.length - 3} more</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">{product.metrics.users} users</div>
                    <div className="flex items-center gap-2">
                      <a href={product.liveUrl} className="text-blue-600 hover:text-blue-800 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a href={product.githubUrl} className="text-gray-600 hover:text-gray-800 transition-colors">
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">All Products</h2>
            <p className="text-xl text-gray-600">Complete collection of digital solutions</p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeFilter === category.id ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-6xl">
                    {product.category === "web" && <Globe />}
                    {product.category === "mobile" && <Smartphone />}
                    {product.category === "ai" && <Cpu />}
                    {product.category === "dashboard" && <BarChart />}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <div className="flex items-center gap-1">
                      {renderStars(product.metrics.rating)}
                      <span className="text-sm text-gray-600 ml-1">({product.metrics.reviews})</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4">{product.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                        {tech}
                      </span>
                    ))}
                    {product.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">+{product.technologies.length - 3}</span>
                    )}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">{product.metrics.users} users</div>
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">Real feedback from satisfied customers</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 relative">
              <div className="flex items-center justify-between mb-6">
                <button onClick={prevTestimonial} className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setAutoPlay(!autoPlay)}
                    className={`p-2 rounded-full transition-colors ${autoPlay ? "bg-blue-600 text-white" : "bg-white text-gray-600"}`}
                  >
                    {autoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>

                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>

                <button onClick={nextTestimonial} className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="text-center">
                <Quote className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <p className="text-xl text-gray-700 mb-6 italic">"{testimonials[currentTestimonial].content}"</p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-gray-800">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
                    <p className="text-gray-500">{testimonials[currentTestimonial].company}</p>
                  </div>
                </div>

                <div className="flex justify-center mt-4">{renderStars(testimonials[currentTestimonial].rating)}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your next digital product to life. From concept to deployment, I'll help you create solutions that
            delight users and drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <div className="text-white text-8xl">
                      {selectedProduct.category === "web" && <Globe />}
                      {selectedProduct.category === "mobile" && <Smartphone />}
                      {selectedProduct.category === "ai" && <Cpu />}
                      {selectedProduct.category === "dashboard" && <BarChart />}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      {renderStars(selectedProduct.metrics.rating)}
                      <span className="text-sm text-gray-600 ml-1">({selectedProduct.metrics.reviews} reviews)</span>
                    </div>
                    <span className="text-sm text-gray-600">{selectedProduct.metrics.users} users</span>
                  </div>

                  <p className="text-gray-600 mb-6">{selectedProduct.description}</p>

                  <div className="flex gap-4">
                    <a
                      href={selectedProduct.liveUrl}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={selectedProduct.githubUrl}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Key Features</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.technologies.map((tech) => (
                      <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
