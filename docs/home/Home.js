import React, {useEffect, useState} from "../_snowpack/pkg/react.js";
import {BuyMeCoffee} from "../components/BuyMeCoffee.js";
import {Discord} from "../components/Discord.js";
import {DownloadButton} from "../components/DownloadButton.js";
import {DownloadVersionSwitcher} from "../components/DownloadVersionSwitcher.js";
import {Feature} from "../components/Feature.js";
import {ThemeSwitcher} from "../components/ThemeSwitcher.js";
import {defaultReleaseIndex, validReleases} from "../releases.js";
const Home = () => {
  const [selectedRelease, setSelectedRelease] = useState(validReleases[defaultReleaseIndex]);
  const selectedBuildChanged = (build) => {
    const release = validReleases.find((r) => r.build === build);
    if (release != null) {
      setSelectedRelease(release);
    }
  };
  useEffect(() => {
    const release = validReleases.find((r) => r.def);
    if (release != null) {
      setSelectedRelease(release);
    }
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "relative overflow-hidden pt-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row flex-grow items-center px-8 gap-2"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-9 mr-1 hidden dark:inline",
    src: "logo_thin_dark.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("img", {
    className: "w-9 mr-1 dark:hidden",
    src: "logo_thin_light.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "text-xl font-mono"
  }, "Braindump"), /* @__PURE__ */ React.createElement("div", {
    className: "flex-grow"
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(ThemeSwitcher, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Discord, null)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(BuyMeCoffee, {
    width: "9rem"
  }))), /* @__PURE__ */ React.createElement("h1", {
    className: "mt-10 max-w-7xl mx-auto text-center text-5xl font-bold font-mono px-8 dark:text-white text-gray-800"
  }, "Write down thoughts. Fast."), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 max-w-xl mx-auto text-center text-lg px-8 font-light dark:text-gray-400 text-gray-500"
  }, "The digital notebook for developers, and makers. Ultra fast fuzzy search. Mouse or Keyboard only navigation. Pure markdown with auto formatting and indentation. Offline."), /* @__PURE__ */ React.createElement(DownloadVersionSwitcher, {
    onChange: selectedBuildChanged
  }), /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto flex flex-row gap-4 justify-center flex-wrap px-8"
  }, /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "win",
    version: selectedRelease.version,
    build: selectedRelease.build
  }), /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "darwin",
    version: selectedRelease.version,
    build: selectedRelease.build
  }), /* @__PURE__ */ React.createElement(DownloadButton, {
    platform: "linux",
    version: selectedRelease.version,
    build: selectedRelease.build
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mt-6 mb-4 max-w-3xl mx-auto"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "dark:block hidden",
    src: "v0.7.0_features_dark.png"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "dark:hidden",
    src: "v0.7.0_features_light.png"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "mb-48"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "my-10 max-w-7xl mx-auto text-center text-3xl font-bold font-mono px-8 dark:text-white text-gray-800"
  }, "Features"), /* @__PURE__ */ React.createElement(Feature, null)))));
};
export {Home};
