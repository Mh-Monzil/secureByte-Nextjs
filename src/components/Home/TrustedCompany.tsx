import React from "react";
import Marquee from "react-fast-marquee";
import { FaShieldAlt } from "react-icons/fa";

const TrustedCompany = () => {
  const companyDetails = [
    { id: 1, icon: <FaShieldAlt />, name: "SecureByte" },
    { id: 2, icon: <FaShieldAlt />, name: "SecureByte" },
    { id: 3, icon: <FaShieldAlt />, name: "SecureByte" },
    { id: 4, icon: <FaShieldAlt />, name: "SecureByte" },
  ];

  return (
    <div className="h-60 flex flex-col justify-center gap-5 mt-10 lg:mt-16">
      <h3 className="text-center font-semibold text-2xl">
        Trusted By 2M+ Companies Globally
      </h3>
      <Marquee>
        <div className="flex items-center gap-10 h-20">
          {companyDetails.map((c) => (
            <div key={c.id} className="flex items-center gap-2 text-4xl">
              {c.icon}
              {c.name}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedCompany;
