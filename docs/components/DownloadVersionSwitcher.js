import React from "../_snowpack/pkg/react.js";
import {validReleases} from "../releases.js";
const DownloadVersionSwitcher = (props) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto flex flex-row justify-center mt-8 mb-1"
  }, /* @__PURE__ */ React.createElement("select", {
    className: "bg-transparent border border-gray-500 my-2 text-sm text-center",
    onChange: (e) => props.onChange(e.target.value)
  }, validReleases.map((release, index) => {
    return /* @__PURE__ */ React.createElement("option", {
      key: index,
      selected: release.def,
      value: release.build
    }, release.version, release.pre ? "-beta" : "");
  })));
};
export {DownloadVersionSwitcher};
