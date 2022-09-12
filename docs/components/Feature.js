import React from "../_snowpack/pkg/react.js";
import {useAppSelector} from "../hooks.js";
function Feature(props) {
  const theme = useAppSelector((store) => store.app.theme);
  return /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-2 max-w-2xl mx-auto py-4 gap-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-lg font-bold font-mono"
  }, props.title), /* @__PURE__ */ React.createElement("div", {
    className: "font-light dark:text-gray-400 text-gray-500"
  }, props.description)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("img", {
    className: "border border-gray-200 dark:border-gray-700",
    src: theme === "dark" ? props.imageDark : props.imageLight
  }))));
}
export {Feature};
