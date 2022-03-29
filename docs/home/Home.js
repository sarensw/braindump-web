import React from "../_snowpack/pkg/react.js";
import {BuyMeCoffee} from "../components/BuyMeCoffee.js";
import {Discord} from "../components/Discord.js";
import {DownloadButton} from "../components/DownloadButton.js";
const Home = () => {
  const version = "0.7.0";
  const build = "117";
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative overflow-hidden pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row flex-grow items-center px-8 gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-6 mr-1",
    src: "logo_128x128.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "font-mono"
  }, "braindump"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Discord, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(BuyMeCoffee, {
    width: "9rem"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 max-w-7xl mx-auto text-center text-5xl font-bold font-mono px-8"
  }, "Write down thoughts. Fast."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 max-w-xl mx-auto text-center text-lg px-8"
  }, "Braindump is a plain-text Markdown based notepad that works completely offline. Write down your thoughts without thinking about structure first. For developers, makers, tech enthusiasts, and keyboard lovers."), /* @__PURE__ */ React.createElement("div", {
    className: "text-center mt-8 mb-1 text-gray-500 px-8"
  }, "v", version), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto flex flex-row gap-4 justify-center flex-wrap px-8"
  }, /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "win",
    version,
    build
  }), /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "darwin",
    version,
    build
  }), /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "linux",
    version,
    build
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 mb-4 max-w-3xl mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "v0.6.0_main.gif"
  })))));
};
export {Home};
