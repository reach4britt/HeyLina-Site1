import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const ServicesSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "https://api.airtable.com/v0/appnKWUwPgADJQRZK/Investor%20Leads",
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
        alert("🎉 Thanks for your interest! We'll be in touch.");
        setFormData({ name: "", email: "" });
      } else {
        alert("Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting. Please try again later.");
    }
  };

  return (
    <section className="w-full py-12 bg-[#5124c5]">
      <div className="container mx-auto px-4">
        <Card className="relative bg-[#f5f0ff54] border border-[#c8c8c8] rounded-[28px] overflow-hidden">
          <CardContent className="p-6 sm:p-10 md:p-12">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Left side - Text content */}
              <div className="w-full md:w-1/2 space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-[40.4px] leading-snug text-white font-semibold">
                  We are looking for{" "}
                  <span className="font-extrabold text-[#f5f0ff]">
                    investors
                  </span>
                  .
                  <br />
                  Why Invest in HeyLina?
                </h2>

                <p className="text-white text-sm sm:text-base leading-6 font-medium">
                  HeyLina is pioneering AI-powered relationship intelligence.
                  With a unique decision-layer approach and a growing user base,
                  we're building the go-to relationship strategist for the
                  $10B+ dating market. Invest in scalable, tech-first dating
                  built on behavioral science.
                </p>
              </div>

              {/* Right side - CTA and form */}
              <div className="w-full md:w-1/2 flex flex-col items-start justify-end space-y-6">
                <span className="font-bold text-white text-lg sm:text-[23.2px]">
                  Partner With Us
                </span>

                <form onSubmit={handleSubmit} className="w-full space-y-5">
                  <div className="w-full rounded-xl border border-white overflow-hidden">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-[56px] sm:h-[70px] bg-transparent border-none text-white text-base sm:text-[21.1px] px-6 sm:px-7 py-4 placeholder:text-white"
                      required
                    />
                  </div>

                  <div className="w-full rounded-xl border border-white overflow-hidden">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter your email address..."
                      value={formData.email}
                      onChange={handleChange}
                      className="h-[56px] sm:h-[70px] bg-transparent border-none text-white text-base sm:text-[21.1px] px-6 sm:px-7 py-4 placeholder:text-white"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full sm:w-[188px] h-[56px] sm:h-[70px] rounded-[20.07px] text-base sm:text-[22.3px] font-bold text-white tracking-tight shadow-[inset_0px_-6.69px_22.3px_#bd72f5,0px_15.61px_26.76px_#5409886b] bg-gradient-to-r from-[rgba(83,69,238,1)] via-[rgba(122,33,221,1)] to-[rgba(133,22,216,1)]  plausible-event-name=Partner+With+Us"
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
