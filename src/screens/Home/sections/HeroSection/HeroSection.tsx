import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const testimonials = [
    {
      id: 1,
      name: "James T.",
      role: "Beta User",
      text: "HeyLina has helped me finally see my dating patterns. I feel so much more in control of my love life now!",
      image: "https://c.animaapp.com/DzXLCUcv/img/unsplash-zhvm3xiohoe@4x.png",
      featured: false,
    },
    {
      id: 2,
      name: "Olivia R.",
      role: "Beta User",
      text: "I used to waste so much time on the wrong people. HeyLina made me more intentional and confident in my dating choices.",
      image: "https://c.animaapp.com/DzXLCUcv/img/unsplash-zhvm3xiohoe-1@4x.png",
      featured: true,
    },
    {
      id: 3,
      name: "Daniel M.",
      role: "Beta User",
      text: "This is like having a super smart best friend who actually remembers all my dating mistakes and helps me avoid them!",
      image: "https://c.animaapp.com/DzXLCUcv/img/unsplash-zhvm3xiohoe-2@4x.png",
      featured: false,
    },
  ];

  return (
    <section className="w-full max-w-[1136px] mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <div className="bg-white/90 rounded-md shadow px-6 py-2 mb-4">
          <div className="font-bold text-[#3e1f7c] text-base sm:text-lg">
            Reviews
          </div>
        </div>
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl max-w-2xl leading-snug">
          <span className="text-[#423f62]">Over </span>
          <span className="text-[#6733eb]">500+ people </span>
          <span className="text-[#423f62]">
            are already dating smarter with HeyLina. Are you in?
          </span>
        </h2>
      </div>

      {/* Testimonials */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <Card
            key={t.id}
            className={`rounded-[20px] p-6 flex flex-col justify-between transform transition-transform duration-300 hover:translate-x-1 hover:-translate-y-1 ${
              t.featured ? "bg-[#5124c5] text-white" : "bg-white text-[#56366c]"
            }`}
          >
            <CardContent className="flex flex-col h-full justify-between p-0">
              <p className="text-sm sm:text-base mb-4">{t.text}</p>
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p
                    className={`text-sm ${
                      t.featured ? "text-yellow-300" : "text-[#5124c5]"
                    }`}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
