// ./src/Document.js
import { AfterData, AfterRoot, AfterScripts } from "@jaredpalmer/after";
import { ServerStyleSheets } from "@material-ui/core/styles";
import React from "react";

export default class Document extends React.Component {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheets();
    const page = await renderPage((App) => (props) => sheet.collect(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    const { helmet, styleTags } = this.props;
    // get attributes from React Helmet
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="utf-8" />
          <title>Order-More</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {styleTags}
        </head>
        <body {...bodyAttrs}>
          <AfterRoot />
          <AfterData />
          <AfterScripts />
        </body>
      </html>
    );
  }
}
