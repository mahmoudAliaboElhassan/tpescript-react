import React from "react";

type Props = {
  name: string;
  age: number;
};
function Friends({ name, age }: Props) {
  return (
    <div>
      <div>
        hello {name} your age is {age}
      </div>
    </div>
  );
}

export default Friends;
