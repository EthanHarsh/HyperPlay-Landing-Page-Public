import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "../util/router";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 160,
  },
}));

function TheProblemCardsSection(props) {
  const classes = useStyles();

  const items = [
    {
      image:
        "https://storage.googleapis.com/hyperplay-front-assets/problem/choose-game.svg",
      title: "Find A Game",
      body: "There are no centralized hubs for finding Web3 games. You have to visit various websites and search for them. Once you find a game, you have to go to the website to see if it is still active. Many games have shut down, so you have to find another to play.",
      url: "#",
    },
    {
      image:
        "https://storage.googleapis.com/hyperplay-front-assets/problem/find-chain.svg",
      title: "Find The Chain",
      body: "Some chains are based on Proof of Stake (PoS), some on Proof of work (PoW). There are chains that offer zero-fee transactions and some that charge a percentage. Some chains are private and some are very transparent. Bottom line: deciphering the jargon and knowing if you are safe is very hard.",
      url: "#",
    },
    {
      image:
        "https://storage.googleapis.com/hyperplay-front-assets/problem/wallet.png",
      title: "Create a wallet",
      body: "It can take several hours to set up a blockchain wallet, and if you make a mistake, you could lose everything. There is a risk of losing your private key, or it being stolen. There is no recourse if this happens, and you will lose all your money. There is also a risk of your wallet being hacked and your assets stolen if you do not use secure passwords.",
      url: "#",
    },
    {
      image:
        "https://storage.googleapis.com/hyperplay-front-assets/problem/exchange.svg",
      title: "Bridge & Buy Tokens",
      body: "It is hard to bridge and purchase tokens across different blockchains. Many game tokens can only be bought on decentralized exchanges. Using a decentralized exchange can be very tricky, and you might lose everything.",
      url: "#",
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
        <Grid container={true} justifyContent="center" spacing={4}>
          {items.map((item, index) => (
            <Grid item={true} xs={12} md={6} lg={3} key={index}>
              <Card>
                <CardActionArea component={Link} to={item.url}>
                  <CardMedia
                    image={item.image}
                    title={item.name}
                    className={classes.media}
                  />
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom={true}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.body}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

export default TheProblemCardsSection;
