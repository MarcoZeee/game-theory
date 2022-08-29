"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Home_module_css_1 = __importDefault(require("../styles/Home.module.css"));
const react_1 = __importDefault(require("react"));
const Footer = () => {
    return (react_1.default.createElement("div", { className: Home_module_css_1.default.footer },
        react_1.default.createElement("p", null, "MarcoZeee 2022")));
};
exports.default = Footer;
