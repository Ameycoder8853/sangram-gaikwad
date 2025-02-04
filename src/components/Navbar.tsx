import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { House, Building, Info, Mail, Menu, LogIn, Home, Twitter, Linkedin, Instagram, Youtube, MessageSquare } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(auth.currentUser);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const NavLinks = () => (
    <>
      <Link to="/" className="flex items-center gap-2 hover:text-gray-300">
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      <Link to="/properties" className="flex items-center gap-2 hover:text-gray-300">
        <Building className="h-4 w-4" />
        <span>Properties</span>
      </Link>
      <Link to="/about" className="flex items-center gap-2 hover:text-gray-300">
        <Info className="h-4 w-4" />
        <span>About</span>
      </Link>
      <Link to="/contact" className="flex items-center gap-2 hover:text-gray-300">
        <Mail className="h-4 w-4" />
        <span>Contact</span>
      </Link>
    </>
  );

  const SocialLinks = () => (
    <div className="mt-4 flex gap-4">
      <a href="https://www.youtube.com/@Sangram_gaikwad_realestate" className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary hover:text-gray-300">
        <Youtube className="h-4 w-4" />
      </a>
      <a href="#" className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary hover:text-gray-300">
        <Instagram className="h-4 w-4" />
      </a>
      <a href="#" className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary hover:text-gray-300">
        <Twitter className="h-4 w-4" />
      </a>
      <a href="#" className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary hover:text-gray-300">
        <Linkedin className="h-4 w-4" />
      </a>
      <a href="https://wa.me/919881950536" className="rounded-full bg-primary/10 p-2 transition-colors hover:bg-primary hover:text-gray-300">
        <MessageSquare className="h-4 w-4" />
      </a>
    </div>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-primary/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold text-white">
          <House className="h-6 w-6" />
          <span>Sangram Gaikwad</span>
        </Link>
        
        <div className="hidden items-center gap-6 md:flex text-white">
          <NavLinks />
          {user ? (
            <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
          ) : (
            <Button onClick={() => navigate("/login")} variant="default" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Sign In
            </Button>
          )}
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[240px] bg-primary/95 backdrop-blur-sm text-white">
            <div className="flex flex-col gap-4 py-4">
              <NavLinks />
              {user ? (
                <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
              ) : (
                <Button onClick={() => navigate("/login")} variant="default">Sign In</Button>
              )}
              <SocialLinks />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
