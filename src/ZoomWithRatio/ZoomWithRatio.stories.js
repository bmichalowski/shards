import React from "react";

import { ZoomWithRatio } from ".";

export default {
  title: "Example/ZoomWithRatio",
  component: ZoomWithRatio,
  parameters: {
    actions: {
      handles: ["click p"],
    },
  },
};

const Template = (args) => (
  <div style={{ height: "250px", width: "100%" }}>
    <ZoomWithRatio {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div style={{ background: "green", width: "100px", height: "40px" }}>
      <p>Test</p>
    </div>
  ),
};
