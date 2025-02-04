import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Building, Shield, TrendingUp, Users, Heart, Youtube, Instagram, Twitter, Linkedin, MessageSquare } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const featuredProperties = [
    {
      id: 1,
      title: "24k Altura",
      price: "2,80,00,000",
      location: "Baner",
      image: "/24kaltura.jpeg",
      link:/properties
    },
    {
      id: 2,
      title: "24k Manor",
      price: "3,37,00,000",
      location: "Pimple Nilakh",
      image: "/manor4.jpg",
      link:"/properties"
    },
    {
      id: 3,
      title: "Elina Tower",
      price: "1,39,00,000",
      location: "Pimple Nilakh",
      image: "/elina 3.jpg",
      link:"/properties"
    },
  ];

  const advantages = [
    {
      icon: Shield,
      title: "Secure Investment",
      description: "Real estate provides a stable and secure long-term investment opportunity."
    },
    {
      icon: TrendingUp,
      title: "Appreciation",
      description: "Property values tend to appreciate over time, building wealth for your future."
    },
    {
      icon: Building,
      title: "Rental Income",
      description: "Generate passive income through rental properties."
    },
    {
      icon: Heart,
      title: "Quality of Life",
      description: "Own your dream home and improve your family's quality of life."
    }
  ];

  const testimonials = [
    {
      name: "John Doe",
      role: "Property Investor",
      content: "Working with Sangram Realty was a great experience. They helped me find the perfect investment property.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
    },
    {
      name: "Jane Smith",
      role: "Homeowner",
      content: "The team at Sangram Realty made buying our first home a smooth and enjoyable process.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
    }
  ];

  const portfolioWorks = [
    {
      title: "24k Altura",
      description: "A collection of premium flats in Baner By Kolte Patil",
      image: "/24kaltura.jpeg",
      link: "/properties",
      stats: {
        units: "50 Units",
        value: "₹2.80CR",
        completion: "2024"
      }
    },
    {
      title: "24k Manor",
      description: "A collection of premium flats in Pimple Nilakh By Kolte Patil",
      image: "/manor4.jpg",
      link: "/properties",

      stats: {
        units: "50 Units",
        value: "₹3.37CR",
        completion: "2024"
      }
    },
    {
      title: "Balmoral Riverside",
      description: "A collection of premium flats in Balewadi called Balmoral Riverside",
      image: "https://firebasestorage.googleapis.com/v0/b/videomatic-ai-5c2b2.appspot.com/o/properties%2F1738669088486_balmoral9.jpg?alt=media&token=ff812ce8-4b61-486d-9f79-c829a2966954",
      link: "/properties",

      stats: {
        units: "50 Units",
        value: "₹10CR",
        completion: "2024"
      }
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80')" }}>
        <div className="hero-overlay" />
        <div className="container relative z-10 flex h-full flex-col items-center justify-center text-white mt-20">
          <h1 className="animate-fade-up text-center font-display text-5xl font-bold md:text-7xl">
            Sangram Gaikwad Realestate
          </h1>
          <p className="mt-6 animate-fade-up text-center text-lg opacity-90 md:text-xl">
            Your Trusted Partner in Real Estate Excellence
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              size="lg"
              className="animate-fade-up bg-secondary hover:bg-secondary/90"
              onClick={() => navigate("/properties")}
            >
              Explore Properties
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="animate-fade-up border-white text-white hover:bg-primary hover:text-white"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <h2 className="text-center font-display text-4xl font-bold text-white">
            Featured Properties
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white">
            Discover our handpicked selection of premium properties in the most sought-after locations.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProperties.map((property) => (
              <div
                key={property.id}
                className="property-card cursor-pointer"
                onClick={() => window.open(property.link, "_blank")} // Opens in a new tab
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">{property.title}</h3>
                  <p className="text-lg font-bold text-white">
                    ₹{property.price.toLocaleString()}
                  </p>
                  <p className="text-white">{property.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              onClick={() => navigate("/properties")}
              className="bg-[#010f4a] hover:bg-primary/90 text-white"
            >
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <h2 className="text-center font-display text-4xl font-bold text-white">
            Why Invest in Real Estate?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((advantage, index) => (
              <div key={index} className="flex flex-col items-center rounded-lg bg-primary p-6 text-center shadow-md transition-all hover:shadow-xl">
                <advantage.icon className="h-12 w-12 text-secondary" />
                <h3 className="mt-4 font-display text-xl font-bold text-white">
                  {advantage.title}
                </h3>
                <p className="mt-2 text-white">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Work Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <h2 className="text-center font-display text-4xl font-bold text-white">
            Our Portfolio
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white">
            Discover our successful projects and developments that showcase our commitment to excellence
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {portfolioWorks.map((work, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-primary shadow-lg transition-all hover:shadow-xl cursor-pointer"
                onClick={() => window.open(work.link, "_blank")} // Opens in a new tab
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-white">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-white">{work.description}</p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <h2 className="text-center font-display text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-primary p-6 shadow-md">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-white">{testimonial.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-white">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy a Property Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <h2 className="text-center font-display text-4xl font-bold text-white">
            Why Buy a Property Now?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div className="rounded-lg bg-primary p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  Low Interest Rates
                </h3>
                <p className="mt-2 text-white">
                  Take advantage of historically low interest rates to secure your dream property with affordable monthly payments.
                </p>
              </div>
              <div className="rounded-lg bg-primary p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  Growing Market Value
                </h3>
                <p className="mt-2 text-white">
                  Real estate consistently appreciates over time, making it a solid long-term investment for your future.
                </p>
              </div>
              <div className="rounded-lg bg-primary p-6">
                <h3 className="font-display text-xl font-bold text-white">
                  Tax Benefits
                </h3>
                <p className="mt-2 text-white">
                  Enjoy various tax deductions and benefits available to property owners, including mortgage interest and property tax deductions.
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80"
                alt="Property Investment"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Process Section */}
      <section className="bg-primary py-20">
        <div className="container">
          <h2 className="text-center font-display text-4xl font-bold text-white">
            Your Investment Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white">
            We make property investment simple and straightforward
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="relative rounded-lg bg-primary p-6 shadow-md">
              <div className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                1
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                Consultation
              </h3>
              <p className="mt-2 text-white">
                Meet with our experts to discuss your investment goals and preferences.
              </p>
            </div>
            <div className="relative rounded-lg bg-primary p-6 shadow-md">
              <div className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                2
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                Property Selection
              </h3>
              <p className="mt-2 text-white">
                Browse our curated selection of properties that match your criteria.
              </p>
            </div>
            <div className="relative rounded-lg bg-primary p-6 shadow-md">
              <div className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                3
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                Documentation
              </h3>
              <p className="mt-2 text-white">
                We handle all the paperwork and legal requirements for a smooth process.
              </p>
            </div>
            <div className="relative rounded-lg bg-primary p-6 shadow-md">
              <div className="absolute -top-4 left-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-white">
                4
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                Key Handover
              </h3>
              <p className="mt-2 text-white">
                Receive the keys to your new property and start your ownership journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights Section */}
      <section className="py-20 bg-primary">
        <div className="container">
          <h2 className="text-center font-display text-4xl font-bold text-white">
            Market Insights
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
              alt="Market Analysis"
              className="rounded-lg object-cover"
            />
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-2xl font-bold   text-white">
                  Current Market Trends
                </h3>
                <p className="mt-2 text-white">
                  Stay informed about the latest real estate market trends and make informed investment decisions.
                </p>
              </div>
              <div className="grid gap-4">
                <div className="rounded-lg bg-primary p-4 shadow-md">
                  <h4 className="font-bold text-white">Property Value Growth</h4>
                  <p className="text-white">Average annual appreciation of 5-7% in prime locations</p>
                </div>
                <div className="rounded-lg bg-primary p-4 shadow-md">
                  <h4 className="font-bold text-white">Rental Yield</h4>
                  <p className="text-white">Consistent rental yields of 3-5% in residential sectors</p>
                </div>
                <div className="rounded-lg bg-primary p-4 shadow-md">
                  <h4 className="font-bold text-white">Market Demand</h4>
                  <p className="text-white">Growing demand in premium residential segments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-12 text-white">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-display text-xl font-bold">Contact Us</h3>
              <div className="mt-4 space-y-2">
                <p>Thorave Vishwa complex,</p>
                <p>Balewadi -411045 near comfort zone</p>
                <p>Phone: +91 98819 50536</p>
                <p>Email: Sangram2882@gmail.com </p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">Quick Links</h3>
              <div className="mt-4 space-y-2">
                <p><a href="/properties" className="hover:text-secondary">Properties</a></p>
                <p><a href="/about" className="hover:text-secondary">About Us</a></p>
                <p><a href="/contact" className="hover:text-secondary">Contact</a></p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-bold">Follow Us</h3>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.youtube.com/@Sangram_gaikwad_realestate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-secondary hover:text-white"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/sangram_gaikwad_realestate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-secondary hover:text-white"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-secondary hover:text-white"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://wa.me/919881950536"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary p-2 text-white transition-colors hover:bg-secondary hover:text-white"
                >
                  <MessageSquare className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-white/20 pt-8 text-center">
            <p>&copy; 2025 Sangram Gaikwad. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
