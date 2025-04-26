import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";

export const InvestorSection = (): JSX.Element => {
  const faqItems = [
    {
      id: "item-1",
      question: "What is HeyLina, and how does it work?",
      answer:
        "HeyLina is the first AI-powered decision system for relationships. Instead of guessing, you'll get structured tracking, insights, and accountability tools to make smarter dating choices.",
      iconSrc: "https://c.animaapp.com/DzXLCUcv/img/icon-2.svg",
    },
    {
      id: "item-2",
      question: "Is HeyLina free to use?",
      answer:
        "Yes! HeyLina is free during early access. We may introduce premium features later, but the core experience will always remain accessible.",
      iconSrc: "https://c.animaapp.com/DzXLCUcv/img/icon-7.svg",
    },
    {
      id: "item-3",
      question: "Is my personal information safe with HeyLina?",
      answer:
        "Absolutely. Your data is encrypted and never sold. We value privacy and only use your information to improve your dating experience.",
      iconSrc: "https://c.animaapp.com/DzXLCUcv/img/icon-6.svg",
    },
    {
      id: "item-4",
      question: "How can HeyLina help me?",
      answer:
        "Whether you're unsure about someone, repeating old patterns, or just want clarity — HeyLina helps you reflect, get advice, and make better choices in real time.",
      iconSrc: "https://c.animaapp.com/DzXLCUcv/img/icon-7.svg",
    },
    {
      id: "item-5",
      question: "Is HeyLina only for online dating?",
      answer:
        "Nope! HeyLina supports all kinds of dating — online or in-person. It's here to help you navigate your real-life situations, not just dating apps.",
      iconSrc: "https://c.animaapp.com/DzXLCUcv/img/icon-6.svg",
    },
    {
      id: "item-6",
      question: "How do I get started with HeyLina?",
      answer:
        "Just text 'Hey' to 928-662-5814. That’s it. Lina will walk you through the rest.",
      iconSrc: "https://c.animaapp.com/DzXLCUcv/img/icon-7.svg",
    },
  ];

  return (
    <section className="w-full max-w-[1240px] mx-auto py-16 px-4">
      {/* Header */}
      <div className="flex flex-col items-center mb-12 text-center">
        <div className="relative mb-4">
          <Badge className="px-6 py-2 bg-white text-[#3e1f7c] rounded-[6.28px] shadow font-bold text-base sm:text-[18.4px]">
            FAQ&apos;s
          </Badge>
        </div>
        <h2 className="font-bold text-[#423f62] text-xl sm:text-2xl md:text-[23.2px]">
          Frequently Asked Questions
        </h2>
      </div>

      {/* FAQ Accordion */}
      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="w-full"
      >
        {faqItems.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className={`mb-4 rounded-[15px] border border-solid transition-all duration-300 ${
              item.id === "item-1"
                ? "bg-[#5124c5] border-none shadow-[0px_4px_4px_#00000040]"
                : "bg-white border-[#8081874f]"
            }`}
          >
            <AccordionTrigger className="px-4 sm:px-6 py-5 sm:py-6 hover:no-underline">
              <div className="flex items-center w-full">
                <div
                  className={`w-10 h-10 sm:w-[42px] sm:h-[42px] rounded-xl flex items-center justify-center ${
                    item.id === "item-1" ? "bg-white" : "bg-[#1c24361f]"
                  }`}
                >
                  <img
                    className="w-[18px] h-[18px]"
                    alt="Icon"
                    src={item.iconSrc}
                  />
                </div>
                <span
                  className={`ml-4 sm:ml-5 font-semibold text-sm sm:text-lg tracking-tight ${
                    item.id === "item-1" ? "text-white" : "text-[#5124c5]"
                  }`}
                >
                  {item.question}
                </span>
              </div>
            </AccordionTrigger>
            {item.answer && (
              <AccordionContent className="px-6 sm:px-10 pb-6">
                <p
                  className={`font-normal text-sm sm:text-base leading-6 ${
                    item.id === "item-1" ? "text-white" : "text-[#5124c5]"
                  }`}
                >
                  {item.answer}
                </p>
              </AccordionContent>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
