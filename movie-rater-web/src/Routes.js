import React from "react";
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import { Home } from "./pages/";
import { Navbar } from "./components/";

const { Content, Header } = Layout;

const Routes = () => {
  return (
    <Layout className="layout">
      <Header className="app-header">
        <Navbar />
      </Header>
      <Content className="app-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Content>
    </Layout>
  );
};

export default Routes;
