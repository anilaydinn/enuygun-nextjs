import App from "next/app";
import { Provider } from "react-redux";
import React from "react";
import store from "../redux/store";
import Header from "../components/header/Header";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <Header />
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;
