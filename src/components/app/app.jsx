import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import Main from "../main/main";
import {AppRoute} from "../../const";

const App = () => {
  return (
    <React.Fragment>
      {/*<Header />*/}
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route>
          <h1>Page not Found</h1>
        </Route>
      </Switch>
      {/*<Footer />*/}
    </React.Fragment>
  );
};

export default App;
