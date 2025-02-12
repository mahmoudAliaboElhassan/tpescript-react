import React from "react";
interface ButtonProps<T> {
  countValue: T;
  countHistory: T[];
}
function Generic<T>({ countValue, countHistory }: ButtonProps<T>) {
  return (
    <div>
      {/* The problem is that countValue and countHistory are of generic type T,
      which may not be compatible with ReactNode. To fix this, you can convert
      them to strings before rendering. */}
      <div>{String(countValue)}</div>
      <div>{countHistory.join(", ")}</div>
    </div>
  );
}

export default Generic;
