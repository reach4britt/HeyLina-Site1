import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const FAQSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appnKWUwPgADJQRZK/Early%20Access%20Users",
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer patj9sEidz04FG5KU.794a996ed0808af7faf5afe8f425c21dea5a96ab430f06d97e2c8aa27bcdc951",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Name: formData.name,
                  "Phone Number": formData.phone,
                  Email: formData.email,
                },
              },
            ],
          }),
        }
      );

      const result = await res.json();
      console.log("Airtable response:", result);

      if (res.ok) {
        alert("🎉 You're on the list!");
        setFormData({ name: "", phone: "", email: "" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting. Please try again later.");
    }
  };

  return (
    <section id="signup" className="w-full py-16 px-4">
      <Card className="w-full bg-[#5124c5] rounded-[20px] overflow-hidden">
        <CardContent className="p-6 sm:p-10 md:p-12">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Text */}
            <div className="w-full lg:w-1/2 flex flex-col space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-snug">
                  Introducing <span className="text-[#c9b4ff]">Text Lina</span>
                  <br />
                  Your Personal Dating Strategist
                </h2>

                <p className="text-base sm:text-lg text-white">
                  Need an instant gut-check on a dating decision? Text Lina.
                </p>

                <p className="text-base sm:text-lg text-white">
                  Your dating coach, bestie, and therapist all in one. The only
                  dating hotline that remembers your patterns & helps you make
                  the right choice — every time.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4">
                <div className="flex items-center">
                  <img
                    className="w-4 h-4 mr-2"
                    alt="Icon"
                    src="https://c.animaapp.com/DzXLCUcv/img/icon.svg"
                  />
                  <span className="text-sm sm:text-base text-[#ffffffb3]">
                    AI-Powered Dating Advice
                  </span>
                </div>

                <div className="flex items-center">
                  <img
                    className="w-4 h-3 mr-2"
                    alt="Vector"
                    src="https://c.animaapp.com/DzXLCUcv/img/vector.png"
                  />
                  <span className="text-sm sm:text-base text-[#ffffffb3]">
                    Real-time Text Support
                  </span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
              <div className="w-full max-w-md space-y-6">
                <h3 className="text-white text-xl font-bold mb-2 leading-tight w-full">
                  Ready for love that makes sense? Let Lina guide you.
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent text-white border-white/50 placeholder:text-white/50"
                    required
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent text-white border-white/50 placeholder:text-white/50"
                    required
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent text-white border-white/50 placeholder:text-white/50"
                    required
                  />
                  <Button
                    type="submit"
                    className="rounded-[18px] bg-white text-[#5124c5] font-bold hover:bg-[#f0eaff] transition-all duration-200 w-full h-12 plausible-event-name=Get+Early+Access"

                  >
                    Get Early Access – Limited to 200 Users
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
