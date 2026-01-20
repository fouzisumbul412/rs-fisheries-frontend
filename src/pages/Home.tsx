import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Truck,
  Award,
  Clock,
  Database,
  CheckCircle,
  Waves,
} from "lucide-react";
import { fishData } from "@/data/fishData";
import FishCard from "@/components/FishCard";
import heroImage from "@/assets/hero-seafood.jpg";
import FeaturedFishCarousel from "@/components/FeaturedFishCarousel";

const Home = () => {
  const featuredFish = fishData.slice(0, 15);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fresh Seafood. Reliable Supply. Smarter Operations.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              RS Fisheries delivers premium quality seafood across multiple
              markets with digitized operations, ensuring consistency and
              reliability in every shipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/enquiry">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/catalog">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground"
                >
                  View Fish Catalog
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Key Highlights */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Waves className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Multi-Market Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Serving restaurants, retailers, and wholesalers across local,
                  regional, and export-ready markets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Award className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Quality & Hygiene Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Maintaining cold chain integrity and rigorous quality controls
                  from source to delivery.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Truck className="h-10 w-10 text-primary mb-2" />
                <CardTitle>On-Time Shipments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Reliable logistics and fleet management ensuring your seafood
                  arrives fresh and on schedule.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <Database className="h-10 w-10 text-primary mb-2" />
                <CardTitle>Digitized Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Advanced CRM and inventory systems providing real-time
                  tracking and transparent communication.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Fish */}
      <section className="py-16 bg-muted/30 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Fish Types
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our wide selection of premium seafood, available fresh or
              frozen to meet your business needs.
            </p>
          </div>

          <FeaturedFishCarousel fish={featuredFish} />

          <div className="text-center mt-10">
            <Link to="/catalog">
              <Button size="lg">View Full Catalog</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent process from enquiry to delivery
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                1
              </div>
              <h3 className="text-xl font-semibold">Enquire</h3>
              <p className="text-muted-foreground">
                Submit your requirements through our enquiry form or contact us
                directly. We'll respond within 24 hours.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                2
              </div>
              <h3 className="text-xl font-semibold">Confirm</h3>
              <p className="text-muted-foreground">
                Receive pricing, availability, and delivery options. Review and
                confirm your order with our team.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-bold mx-auto">
                3
              </div>
              <h3 className="text-xl font-semibold">Deliver</h3>
              <p className="text-muted-foreground">
                Receive fresh seafood at your location with our reliable
                cold-chain logistics and tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose RS Fisheries */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Choose RS Fisheries
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Consistent quality and freshness guaranteed",
                "Transparent pricing with no hidden costs",
                "Reliable on-time delivery across all markets",
                "Full cold-chain compliance and certifications",
                "Responsive customer service and communication",
                "Flexible ordering with competitive bulk rates",
                "Wide product range from premium to value options",
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Talk to our team today for pricing and availability
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/enquiry">
              <Button size="lg" variant="secondary">
                Request Today's Prices
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-primary-foreground/10 border-primary-foreground/30 hover:bg-primary-foreground/20 text-primary-foreground"
              >
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
