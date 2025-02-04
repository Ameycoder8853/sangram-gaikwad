import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Twitter, Linkedin, Instagram, Youtube, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <Helmet>
        <title>Contact Sangram Realty | Real Estate Consultants in Pune</title>
        <meta name="description" content="Get in touch with Pune's leading real estate consultants. Visit our office in Baner or contact us for property inquiries, site visits, and expert guidance." />
        <meta name="keywords" content="contact real estate agent pune, property consultation pune, real estate office pune, property site visit pune, real estate inquiry pune, property dealers contact pune, real estate broker pune, property assistance pune, real estate help pune, property guidance pune, real estate support pune, property visit pune, real estate consultation pune, property meeting pune, real estate appointment pune, property discussion pune" />
        <link rel="canonical" href="https://sangramgaikwad.com/contact" />
      </Helmet>

    <div className="min-h-screen bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="animate-fade-up text-center">
          <h1 className="mb-4 font-display text-4xl font-bold text-white">Get in Touch</h1>
          <p className="mx-auto mb-12 max-w-2xl text-white">
            We're here to help you find your perfect property. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8 rounded-lg bg-primary p-8 shadow-lg">
            <div className="animate-fade-up [--animation-delay:200ms]">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">Visit Us</h3>
                  <p className="text-white">Thorave Vishwa complex , Balewadi -411045 near comfort zone</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up [--animation-delay:400ms]">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold   text-white">Call Us</h3>
                  <p className="text-white">+91 98819 50536</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up [--animation-delay:600ms]">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold  text-white">Email Us</h3>
                  <p className="text-white">Sangram2882@gmail.com </p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up [--animation-delay:800ms]">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold   text-white">Business Hours</h3>
                  <p className="text-white">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-white">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-up [--animation-delay:1000ms]">
              <h3 className="mb-4 font-semibold  text-white">Connect With Us</h3>
              <div className="flex gap-4">
                <a href="#" className="rounded-full text-white bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-white">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="rounded-full text-white bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-white">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.instagram.com/sangram_gaikwad_realestate?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="rounded-full text-white bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-white">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.youtube.com/@Sangram_gaikwad_realestate" className="rounded-full text-white bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-white">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="https://wa.me/919881950536" className="rounded-full text-white bg-primary/10 p-3 transition-colors hover:bg-primary hover:text-white">
                  <MessageSquare className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-up [--animation-delay:400ms]">
            <div className="rounded-lg bg-primary p-8 shadow-lg">
              <h2 className="mb-6 font-display text-2xl font-semibold  text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] w-full"
                  />
                </div>
                
                <Button type="submit" className="w-full text-white">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
