import "@develsopher/react-components-layout/style.css";
import { Box as _Box } from "@develsopher/react-components-layout";

export default {
  title: "React Components/Layout/Box",
  component: _Box,
  parameters: {
    layout: "centered",
  },
  tags: ["authors"],
};

export const BoxStory = {
  args: {
    as: "button",
    padding: 5,
    background: "pink",
    boxShadow: "xl",
    borderRadius: "mx",
  },
};
