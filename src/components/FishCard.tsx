import { Fish } from "@/data/fishData";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

interface FishCardProps {
  fish: Fish;
}

const FishCard = ({ fish }: FishCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "50px" },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Card
      ref={cardRef}
      className={`h-[420px] flex flex-col overflow-hidden transition-all duration-500
    hover:shadow-lg
    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
    >
      {/* Image */}
      <div className="h-[200px] w-full overflow-hidden shrink-0">
        <img
          src={fish.image}
          alt={fish.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Header */}
      <CardHeader className="pb-2">
        <div className="flex justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-lg line-clamp-1">{fish.name}</CardTitle>
            <CardDescription className="text-xs font-mono line-clamp-1">
              {fish.shortCode}
            </CardDescription>
          </div>

          <div className="flex flex-wrap gap-1 max-w-[110px] justify-end">
            {fish.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="mt-auto space-y-2">
        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Common Use
          </p>
          <p className="text-sm line-clamp-2">{fish.commonUse}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-muted-foreground">
            Available As
          </p>
          <p className="text-sm line-clamp-2">{fish.availableAs.join(", ")}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FishCard;
