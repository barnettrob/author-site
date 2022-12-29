import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/LexendDeca-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="lexenddeca"
    />,
    <link
      rel="preload"
      href="/fonts/DancingScript-Regular.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="dancing"
  />,
  ])
}