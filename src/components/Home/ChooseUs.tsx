import React from "react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";

const ChooseUs = () => {
  const chooseUsDetails = [
    {
      icon: <RiVerifiedBadgeFill />,
      title: "Proven Expertise",
      content:
        "Our team consists of seasoned professionals with years of experience in cybersecurity. We have successfully delivered secure solutions for various industries, ensuring your business is protected from potential threats",
    },
    {
      icon: <FaShieldAlt />,
      title: "Advanced Security Solutions",
      content:
        "We leverage the latest technologies and methodologies in cybersecurity to provide robust and effective solutions. Our commitment to innovation ensures that we stay ahead of emerging threats, keeping your systems safe.",
    },
    {
      icon: <BiSupport />,
      title: "24/7 Support",
      content:
        "Security is an ongoing process. We provide continuous monitoring and support to quickly address any vulnerabilities and threats, ensuring your business operates securely at all times.",
    },
  ];

  return (
    <div className="mt-12 lg:mt-20 my-20">
      <div className="text-center mb-12">
        <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold md:font-bold">
          What Sets Us Apart
        </h3>
        <p className="max-w-[650px] mx-auto mt-6 text-lg">
          Partner with us for customized security solutions, expert guidance,
          and advanced technology to safeguard your business’s digital assets.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chooseUsDetails.map((c, idx) => (
          <CardSpotlight key={idx} className=" max-w-96 mx-auto">
            <span className="text-4xl">{c.icon}</span>
            <h4 className="text-2xl font-bold relative z-20 mt-4 text-white">
              {c.title}
            </h4>
            <p className="text-neutral-200 mt-2 relative z-20">
              {c.content}
            </p>
          </CardSpotlight>
        ))}
      </div>
      <div className="flex justify-end mt-6">
        <Link href={"/contact"} className="border-b-2 border-white pb-1 mr-1 hover:text-teal-400 hover:border-b-teal-400 transition-all duration-300 ease-in-out">Learn More</Link>
      </div>
    </div>
  );
};

export default ChooseUs;
