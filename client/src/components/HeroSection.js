import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Section from "./Section";
import SectionHeader from "./SectionHeader";
import { Link } from "./../util/router";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // Increase <Container> padding so it's
  // at least half of <Grid> spacing to
  // avoid horizontal scroll on mobile.
  // See https://material-ui.com/components/grid/#negative-margin
  container: {
    padding: `0 ${theme.spacing(3)}px`,
  },
  image: {
    margin: "0 auto",
    maxWidth: 570,
    display: "block",
    height: "auto",
    width: "100%",
    borderRadius: "10%",
  },
}));

function HeroSection(props) {
  const classes = useStyles();

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className={classes.container}>
        <Grid container={true} alignItems="center" spacing={6}>
          <Grid container={true} item={true} direction="column" xs={12} md={6}>
            <Box textAlign={{ xs: "center", md: "left" }}>
              <SectionHeader
                title={props.title}
                size={4}
              />
              <Typography variant="body1">{props.subtitle}</Typography>
              <Button
                component={Link}
                variant="contained"
                size="large"
                color={props.buttonColor}
                style={{display: 'none'}}
              >
                {props.buttonText}
              </Button>
            </Box>
          </Grid>
          <Grid item={true} xs={12} md={true}>
            <figure>
              <img
                src={props.image}
                alt="illustration"
                className={classes.image}
              />
            </figure>
          </Grid>
        </Grid>
      </Container>
    </Section>
  );
}

export default HeroSection;
