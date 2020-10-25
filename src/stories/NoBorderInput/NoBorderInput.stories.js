import React from "react";

import { NoBorderInput } from ".";

export default {
  title: "Example/NoBorderInput",
  component: NoBorderInput,
};

const Template = (args) => {
  const [val, setVal] = React.useState(args.value);
  const handleChange = (arg) => {
    setVal(arg);
  };
  return (
    <div style={{ height: "250px", width: "100%" }}>
      <NoBorderInput
        value={val}
        onChange={handleChange}
        validate={args.validate}
      />
    </div>
  );
};

export const AnyValue = Template.bind({});
AnyValue.args = {
  value: "anyValue",
};

export const EmptyValue = Template.bind({});
EmptyValue.args = {};

export const Validated = Template.bind({});
Validated.args = {
  validate: (value) => !isNaN(+value) && +value >= 0,
};
