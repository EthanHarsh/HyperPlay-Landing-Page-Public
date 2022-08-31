import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router";
import NotFoundPage from "./404";
import Footer from "./../components/Footer";
import { ThemeProvider } from "./../util/theme";

function App(props) {
  return (
    <ThemeProvider>
      <Router>
        <>
          <Navbar
            color="default"
            logo="#"
            logoInverted="#"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bgColor="default"
            size="medium"
            bgImage=""
            bgImageOpacity={1}
            copyright={`© ${new Date().getFullYear()} HyperPlay`}
            logo="#"
            logoInverted="#"
            sticky={true}
          />
        </>
      </Router>
    </ThemeProvider>
  );
}

export default App;
