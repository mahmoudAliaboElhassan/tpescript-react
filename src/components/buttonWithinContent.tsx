import React, { ComponentProps } from "react";

// type &{}
// interface x extends y {}

// ComponentProps<typeof Button>
// assume this Button is from mui

type TButtonProps = ComponentProps<"button"> & {
  children: React.ReactNode;
  // children: JSX.Element;
  // diffrence between React.ReactNode and JSX.Element
  // is that JSX.Element require elements only not text
  // React.ReactNode can be any valid React child,
  // including elements, strings, numbers, etc.
  // but JSX.Element is for elements only
  setCount: React.Dispatch<React.SetStateAction<number>>;
  variant?: "primary" | "secondary";
};
// type name should starts with T
// interface name should starts with I
// use type to on element
// interface for object is more good

function ButtonWithinContent({ children, setCount, ...rest }: TButtonProps) {
  return (
    <button onClick={() => setCount(15)} {...rest}>
      {children}
    </button>
  );
}

export default ButtonWithinContent;

// interface Person {
//   name: string;
//   age: number;
// }

// interface Employee extends Person {
//   salary: number;
// }
