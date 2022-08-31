import React from "react";
import Meta from "./../components/Meta";
import HeroSection from "./../components/HeroSection";
import FeaturesSection from "./../components/FeaturesSection";
import ExplainerSection from "../components/ExplainerSection";
import NewsletterSection from "./../components/NewsletterSection";

function IndexPage(props) {
  return (
    <>
      <Meta />
      <HeroSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Unleash Your Creativity."
        subtitle="Unleash your creativity and start building games with HyperPlay. We take care of the technical side of things so you can focus on designing, building, and getting feedback from players."
        image="https://storage.googleapis.com/hyperplay-front-assets/hero-metaverse.svg"
        buttonText="Get Started"
        buttonColor="primary"
      />
      <FeaturesSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Web3 Gaming Done Right"
        subtitle=""
      />
      <ExplainerSection
        bgColor="light"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="You've never experienced gaming like this before."
      />
      <NewsletterSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="HyperPlay is a game changer."
        subtitle="Receive our latest news and feature updates"
        buttonText="Join Waitlist"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You have joined the list!"
      />
    </>
  );
}

export default IndexPage;
