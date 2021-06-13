import App, { Container } from "next/app";
import React from "react";
import MainLayOut from "../components/layouts/MainLayout";
import "../styles/main.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <MainLayOut>
          <Component {...pageProps} />
        </MainLayOut>
      </Container>
    );
  }
}

export default MyApp;
