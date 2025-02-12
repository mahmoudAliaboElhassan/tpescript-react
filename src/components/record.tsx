import React from "react";

// instead of writing it as follows
// type Props = {
//   borderRadius: {
//     topLeft: string;
//     topRight: string;
//     bottomLeft: string;
//     bottomRight: string;
//   };
// };
type Props = {
  borderRadius: Record<string, string>;
  // key and value
};
function Record({ borderRadius }: Props) {
  console.log("borderRadius", borderRadius);
  return <div>Record</div>;
}

export default Record;
