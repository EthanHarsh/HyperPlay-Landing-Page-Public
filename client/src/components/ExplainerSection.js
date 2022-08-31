import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

function ExplainerSection(props) {
  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
          />
          <Typography>
          HyperPlay is developing tools for the next generation of blockchain games. We want to make web3 development easy for all developers, big and small. Blockchains are the future of gaming, therefore we aim to make web3 development simple.
          From first-person shooters to tower defense, from role playing games to real-time strategy games. We want to make all types of gaming easy to integrate with blockchain.
          </Typography>
        </Box>
      </Container>
    </Section>
  );
}

export default ExplainerSection;
