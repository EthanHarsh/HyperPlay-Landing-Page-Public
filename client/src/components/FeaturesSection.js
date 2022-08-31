import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";

const useStyles = makeStyles((theme) => ({
  itemsContainer: {
    marginTop: 60,
  },
  row: {
    // Reverse every other row
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },

    // Spacing between rows
    "&:not(:last-child)": {
      marginBottom: `${theme.spacing(3)}px`,
    },
  },
  figure: {
    maxWidth: 300,
    margin: "30px auto",
  },
  image: {
    height: "auto",
    maxWidth: "100%",
    borderRadius: "10%",
  },
}));

function FeaturesSection(props) {
  const classes = useStyles();

  const items = [
    {
      title: "Build and host dynamic NFTs without coding.",
      description:
        "Building a game on blockchain is hard—unless you use HyperPlay. With HyperPlay, you can build and host your dynamic NFTs without coding. Just upload your files, set the rules, and deploy. You don't need to be an expert in Solidity!",
      image:
        "https://storage.googleapis.com/hyperplay-front-assets/solution/access.svg",
    },
    {
      title: "Build the community of your dreams.",
      description:
        "You’ve spent countless hours on your favorite games, now show them off to the world with your profile. Display in-game assets from all of your games with our unified API for aggregating, displaying, and verifying NFT assets spread across many different blockchains",
      image:
        "https://storage.googleapis.com/hyperplay-front-assets/solution/show-off.svg",
    },
    {
      title: "Trade tokens and NFTs with a single API call.",
      description:
        "Trade tokens and collectibles with one API call. We make it easy to swap from token to token or buy directly with USD. Start your investment today!",
      image:
        "https://storage.googleapis.com/hyperplay-front-assets/solution/purchase.svg",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={4}
          textAlign="center"
        />
        <Container
          maxWidth="md"
          disableGutters={true}
          className={classes.itemsContainer}
        >
          {items.map((item, index) => (
            <Grid
              className={classes.row}
              container={true}
              item={true}
              alignItems="center"
              spacing={4}
              key={index}
            >
              <Grid item={true} xs={12} md={6}>
                <Box
                  textAlign={{
                    xs: "center",
                    md: "left",
                  }}
                >
                  <Typography variant="h5" gutterBottom={true}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
              <Grid item={true} xs={12} md={6}>
                <figure className={classes.figure}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={classes.image}
                  />
                </figure>
              </Grid>
            </Grid>
          ))}
        </Container>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
