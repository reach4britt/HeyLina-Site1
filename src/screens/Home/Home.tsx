import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { HeroSection } from "./sections/HeroSection";
import { IntroductionSection } from "./sections/IntroductionSection";
import { InvestorSection } from "./sections/InvestorSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      <div className="bg-white w-full max-w-[1440px] relative overflow-hidden">
        {/* Hero Banner */}
        <section className="w-full h-auto min-h-[400px] sm:min-h-[500px] md:min-h-[653px] relative bg-[url(https://c.animaapp.com/DzXLCUcv/img/adobestock-554814221-1.png)] bg-cover bg-center bg-no-repeat">
          <div className="absolute w-full md:max-w-[646px] h-full top-0 right-0 bg-[#f5f0ffa8] px-6 py-8 sm:px-9">
            <h1 className="text-[32px] sm:text-[50px] font-bold text-[#3e1f7c] font-['Plus_Jakarta_Sans'] leading-snug mt-[180px]">
              Love, simplified.
            </h1>

            <p className="text-black text-lg sm:text-xl font-['Plus_Jakarta_Sans'] mt-6 max-w-[538px]">
              <span className="font-bold">Date smarter </span>
              <span className="font-semibold">with the help of a </span>
              <span className="font-bold">
                data-driven relationship strategist
              </span>
              <span className="font-semibold"> at your fingertips!</span>
            </p>

            <a href="https://ask.heylina.ai/" target="_blank">
              <Button className="mt-6 w-full sm:w-[273px] h-[60px] rounded-[18px] shadow font-bold text-white text-xl tracking-[-0.6px] bg-gradient-to-r from-[#5345ee] via-[#7a21dd] to-[#8516d8]  plausible-event-name=Sign+Up+Now">
                Ask HeyLina!
              </Button>
            </a>
          </div>

          <img
            className="absolute top-[29px] left-[26px] w-[200px] sm:w-[291px] h-[80px] sm:h-[113px] object-cover"
            alt="Heylina"
            src="https://c.animaapp.com/DzXLCUcv/img/heylina-02.png"
          />
        </section>

        {/* Main Content */}
        <div className="w-full bg-[#f5f0ff59] flex flex-col items-center px-4">
          {[IntroductionSection, HeroSection, InvestorSection].map((Section, i) => (
            <Card
              key={i}
              className="w-full max-w-[1285px] mt-[67px] bg-[#f5f0ffab] rounded-[28px] border border-solid border-[#c8c8c8]"
            >
              <Section />
            </Card>
          ))}

          {/* Contact Section */}
          <ContactSection />

        </div>
      </div>
    </div>
  );
};
