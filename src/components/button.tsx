import React from "react";

type Props = {
  backgroundColor: "red" | "green" | "blue";
  fontSize: string;
  billShape?: boolean;
  padding: string[];
  margin: [string, string, string, string];
  // fixed size four
  click: () => number;
};

// function Button({ backgroundColor, fontSize, billShape }: Props): JSX.Element
// return type of it function is JSX.Element
// but it is not mandatory

function Button({
  backgroundColor,
  fontSize,
  billShape,
  padding,
  margin,
  click,
}: Props) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        fontSize: fontSize,
        margin: margin.join(" "),
      }}
      onClick={click}
    >
      Button
    </button>
  );
}

export default Button;
