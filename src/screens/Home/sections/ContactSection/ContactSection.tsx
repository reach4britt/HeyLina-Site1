import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

export const ContactSection = (): JSX.Element => {
  const socialLinks = [
    { icon: <FacebookIcon className="w-6 h-6" />, alt: "Facebook" },
    { icon: <TwitterIcon className="w-6 h-6" />, alt: "Twitter" },
    { icon: <InstagramIcon className="w-6 h-6" />, alt: "Instagram" },
    { icon: <LinkedinIcon className="w-6 h-6" />, alt: "LinkedIn" },
  ];

  const services = [
    "AI-Powered Decision Support",
    "Relationship Health Tracking",
    "Dating Wrapped™ Reports",
    "Real-Time AI Guidance",
    "Instant Dating Strategy Hotline",
  ];

  const supportLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Disclaimer",
    "Help & FAQ's",
    "Testimonials",
    "Contact",
  ];

  const contactInfo = [
    {
      label: "Get Closer",
      details: [
        "741 Piedmont Ave NE, Ste 200 #1458",
        "Atlanta, GA 30308",
      ],
    },
    {
      label: "Work With Us",
      details: ["team@heylina.ai"],
    },
    {
      label: "Legal Entity",
      details: ["HeyLina A.I LLC"],
    },
  ];

  return (
    <section className="w-full max-w-[1248px] mx-auto py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Company */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[#5124c5] text-lg mb-4">
            About Company
          </h3>
          <p className="text-[#808187] text-sm mb-6 max-w-sm">
            The first structured AI-powered relationship decision system—helping
            you track, analyze, and optimize your love life.
          </p>
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 flex items-center justify-center"
                aria-label={link.alt}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[#5124c5] text-lg mb-4">
            Our Services
          </h3>
          <ul className="space-y-4">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-[#808187] text-sm hover:text-[#5124c5] transition"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support Center */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[#5124c5] text-lg mb-4">
            Support Center
          </h3>
          <ul className="space-y-4">
            {supportLinks.map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-[#808187] text-sm hover:text-[#5124c5] transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col">
          <h3 className="font-semibold text-[#5124c5] text-lg mb-4">
            Contact Us
          </h3>
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index}>
                <p className="text-[#808187] text-xs font-medium mb-1">
                  {info.label}
                </p>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-[#5124c5] text-sm font-medium">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};
