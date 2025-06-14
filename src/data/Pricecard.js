// src/data/pricingPlans.js
const pricingPlans = [
  {
    title: "One-time Exam Analysis",
    price: "3€",
    period: "/per exam",
    badge: null,
    subText: "Single Report Analysis",
    features: [
      "One comprehensive AI analysis",
      "GPT-4.5–powered insights",
      "Downloadable PDF summary",
      "No Subscription Required",
      "Discount Code Support",
    ],
    button: "Get started",
    theme: "light",
  },
  {
    title: "Subscription Plan",
    price: "29€",
    period: "/weekly",
    badge: "Best Value",
    subText: "Billed annually.",
    features: [
      "Unlimited Exam Analysis",
      "Save 50%+ Compared to Per-Use",
      "Break-even at just 5 reports/week",
      "Auto-renews Weekly",
      "Basic chat and email support",
    ],
    button: "Get started",
    theme: "dark",
  },
];

export default pricingPlans;
