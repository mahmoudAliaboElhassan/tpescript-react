import React from "react";

// instead of writing
// myStyle: {
// padding: string[];
// fontSize: string;
// }
// we make use of cssProperties
type Props = {
  myStyle: React.CSSProperties;
};

function Heading({ myStyle }: Props) {
  return <h1 style={myStyle}>Heading</h1>;
}

export default Heading;
