import { Link } from "react-router-dom";
import { Fish, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Fish className="h-8 w-8" />
              <span className="text-xl font-bold">RS Fisheries</span>
            </div>
            <p className="text-sm leading-relaxed text-primary-foreground/80">
              Your trusted partner for quality seafood supply. Serving markets
              with fresh, reliable, and sustainable products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/catalog"
                  className="hover:text-accent transition-colors"
                >
                  Fish Catalog
                </Link>
              </li>
              <li>
                <Link
                  to="/buyers"
                  className="hover:text-accent transition-colors"
                >
                  For Buyers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/enquiry"
                  className="hover:text-accent transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-accent transition-colors"
                >
                  Staff Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="h-5 w-5 shrink-0" />
                <span>9494288997, 9440011704</span>
              </li>
              <li className="flex gap-2 break-all">
                <Mail className="h-5 w-5 shrink-0" />
                <span>n.vamsikiran4@gmail.com</span>
              </li>
              <li className="flex gap-2">
                <MapPin className="h-5 w-5 shrink-0" />
                <span className="leading-relaxed">
                  3rd floor, Above Varun Bajaj showroom, ViP Hills, 100 feet
                  Road, Madhapur, Hyderabad 500081
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
          <p className="px-4">
            © {new Date().getFullYear()} RS Fisheries. All rights reserved.
            <span className="block sm:inline">
              {" "}
              Powered by{" "}
              <a
                href="https://www.outrightcreators.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[#139BC3] hover:underline"
              >
                Outright Creators
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
