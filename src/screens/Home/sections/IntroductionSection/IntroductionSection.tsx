import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Brain, Heart, History, PieChart } from "lucide-react";

export const IntroductionSection = (): JSX.Element => {
  const featureCards = [
    {
      title: "Relationship Health Score™",
      description:
        "Understand the emotional health of your relationships over time. Track consistency, reciprocity, and long-term potential.",
      icon: <Heart className="w-10 h-10 text-purple-700" />,
    },
    {
      title: "AI Decision Support",
      description:
        "Unsure about a situationship? Conflicted about a text? Get instant AI-backed guidance before making a move.",
      icon: <Brain className="w-10 h-10 text-purple-700" />,
    },
    {
      title: "Decision History & Pattern Tracker",
      description:
        "Identify hidden patterns in your past dating decisions—break bad cycles, reinforce good ones.",
      icon: <History className="w-10 h-10 text-purple-700" />,
    },
    {
      title: "Dating Wrapped™",
      description:
        "Get a personalized year-in-review dating report with behavioral insights, takeaways, and real-time advice.",
      icon: <PieChart className="w-10 h-10 text-purple-700" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16 max-w-7xl">
      <header className="flex flex-col items-center justify-center mb-12 text-center">
        <div className="bg-white rounded-xl px-5 py-2 shadow-md mb-4">
          <span className="text-sm font-bold text-[#5124c5]">How It Works</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-2xl">
          <span className="text-black">The AI </span>
          <span className="text-[#5124c5]">Relationship Strategist</span>
          <span className="text-black"> You Didn't Know You Needed</span>
        </h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-stretch">
        {featureCards.map((card, index) => (
          <Card
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md h-full flex flex-col justify-between"
          >
            <CardContent className="p-0 flex flex-col gap-4">
              {card.icon}
              <h3 className="text-[#5124c5] font-bold text-base sm:text-lg">
                {card.title}
              </h3>
              <p className="text-black text-sm sm:text-base">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
