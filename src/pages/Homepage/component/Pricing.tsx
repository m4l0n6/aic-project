import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Setting from "@/config";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 19,
    description:
      "Perfect for beginners who want to start improving with AI-powered feedback.",
    features: [
      "50 practice uploads/month",
      "20 audio-to-sheet conversions/month",
      "Basic analysis",
      "Beginner practice exercises",
    ],
    buttonText: "Get started",
  },
  {
    name: "Advanced",
    price: 29,
    isRecommended: true,
    description:
      "Great for intermediate learners who want detailed analysis and more practice capacity.",
    features: [
      "150 practice uploads/month",
      "100 audio-to-sheet conversions/month",
      "Custom practice exercises",
      "Priority processing speed",
    ],
    buttonText: "Get started",
    isPopular: true,
  },
  {
    name: "Premium",
    price: 49,
    description:
      "Designed for serious learners and performers preparing for auditions or competitions.",
    features: [
      "Unlimited practice uploads",
      "Unlimited audio-to-sheet conversions",
      "Personalized learning plans",
      "Dedicated support access",
    ],
    buttonText: "Get started",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
      <h1 className="text-5xl sm:text-6xl font-semibold text-center tracking-tighter">
        Pricing
      </h1>
      <div className={`mt-12 sm:mt-16 max-w-(--breakpoint-lg) mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-8`}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative border rounded-lg p-6 ${Setting.secondaryGradient}`}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">${plan.price}</p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-4" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className={cn("w-full mt-6", plan.isPopular && Setting.mainGradient)}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
