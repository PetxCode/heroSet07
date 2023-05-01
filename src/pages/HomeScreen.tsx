import React from "react";
import Hero from "../components/components/Hero";
import Logo from "../components/components/Logo";
import InfoDesk from "../components/components/InfoDesk";
import ice from "../assets/gg.gif"


const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Logo />
      <InfoDesk
        rr=""
        src={ice} title="The best free stock photos, royalty free images & videos shared by creators." />
      <InfoDesk
        rr="er"
        src="https://global-uploads.webflow.com/5e3ce2ec7f6e53c045fe7cfa/5f24548c658e7c85467a9bc9_Rocket.gif" title="The best free stock photos, royalty free images & videos shared by creators." />
      <InfoDesk
        rr=""
        src={ice} title="The best free stock photos, royalty free images & videos shared by creators." />
    </div>
  );
};

export default HomeScreen;
