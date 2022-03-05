import React from "./_snowpack/pkg/react.js";
import {DownloadButton} from "./DownloadButton.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative overflow-hidden px-8 pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "max-w-7xl mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row flex-grow items-center"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-6 mr-1",
    src: "logo_128x128.png",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "font-mono"
  }, "braindump"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow"
  }), /* @__PURE__ */ React.createElement("div", null)), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10 max-w-7xl mx-auto text-center text-5xl font-bold font-mono"
  }, "Write down thoughts. Fast."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 max-w-xl mx-auto text-center text-lg"
  }, "Offline notepad to quickly note down thoughts, meeting minutes, tasks and more. For developers. For techies. For keyboard lovers. Uses the Visual Studio Code editor underneath for a user experience that you are already used to."), /* @__PURE__ */ React.createElement("div", {
    className: "text-center mt-8 mb-1 text-gray-500"
  }, "v0.6.2"), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto flex flex-row gap-4 justify-center flex-wrap"
  }, /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "win",
    href: "https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.2_109/Braindump+Setup+0.6.2.exe"
  }), /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "darwin",
    href: "https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.2_109/Braindump-0.6.2.dmg"
  }), /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "linux",
    href: "https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.2_109/braindump-0.6.2.tar.gz",
    href2: "https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.2_109/braindump_0.6.2_amd64.deb",
    href3: "https://braindump-releases.s3.eu-central-1.amazonaws.com/Braindump_0.6.2_109/braindump-0.6.2.x86_64.rpm"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 mb-10 max-w-3xl mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "v0.6.0_main.gif"
  })))));
};
export default App;
