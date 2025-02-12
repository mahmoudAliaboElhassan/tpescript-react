import { useEffect, useState, useRef } from "react";
import Button from "../../components/button";
import ButtonWithinContent from "../../components/buttonWithinContent";
import Friends from "../../components/friends";
import Heading from "../../components/heading";
import Record from "../../components/record";
import Generic from "../../components/gen";

function HomePage() {
  // TypeScript itself does not directly affect website performance,
  // loading speed, or runtime optimization. Instead,
  // its impact is mainly on development experience,
  // maintainability, and reducing bugs. Here’s a breakdown

  type User = {
    name: string | null;
    age: number | null;
  };

  const [user, setUser] = useState<User>({
    age: null,
    name: null,
  });
  // user.age
  // user.name
  // will be auto completed well
  const [count, setCount] = useState(0);
  // if i gave it initial value it is typed this
  // setCount("mee"); this line will gives error

  type Person = {
    email: string;
    job: string;
  };

  const [person, setPerson] = useState<Person | null>(null);
  // it possibly null so
  console.log(person?.email);
  console.log(person?.job);

  const clickHandler = () => {
    console.log("hellow");
    return 5;
  };
  useEffect(() => {}, [count]);
  const ref = useRef<HTMLButtonElement | null>(null);
  // as i gave it to button it took HTMLButtonElement

  type Student = {
    id: number;
    name: string;
    email: string;
    password: string;
  };

  // Omit password from User
  type PublicUser = Omit<Student, "password">;

  const student: PublicUser = {
    id: 1,
    name: "Hoda",
    email: "hoda@example.com",
    // password: "123456" // ❌ Error: Property 'password' does not exist
  };

  const convertToArray = <T,>(val: T): T[] => {
    return [val];
  };
  console.log(convertToArray(5));
  console.log(convertToArray("Mahmoud"));
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <button>just button to check ref type</button>

        {user.age}
        {user.name}
        {person?.job}
        {person?.email}
        <div>{count}</div>
        <div>home page</div>
        <Friends name="mahmoud" age={21} />
        <Button
          backgroundColor="red"
          fontSize="16px"
          billShape={true}
          padding={["3px", "4px"]}
          margin={["3px", "4px", "5px", "6px"]}
          click={clickHandler}
        />
        {/* 
          Source has 5 element(s) but target allows only 4
        <Button
          backgroundColor="red"
          fontSize="16px"
          billShape={true}
          padding={["3px", "4px"]}
          margin={["3px", "4px", "5px", "6px", "6px"]}
        /> 
        */}
        <Button
          backgroundColor="green"
          fontSize="23px"
          padding={["3px", "4px"]}
          margin={["3px", "4px", "5px", "6px"]}
          click={clickHandler}
        />

        {/* will give error
        <Button backgroundColor="yellow" fontSize="23px" />
        // know only red green blue
         */}

        <Heading myStyle={{ fontSize: "19px", color: "red" }} />
        {/* 
        will give error as textColor is not recongisable in cssProperties
        <Heading
          myStyle={{ fontSize: "19px", color: "red", textColor: "green" }}
        />
        */}

        <Record
          borderRadius={{
            bottomLeft: "5px",
            bottomRight: "8px",
            topLeft: "6px",
            topRight: "10px",
          }}
        />
      </div>
      <ButtonWithinContent type="submit" autoFocus={true} setCount={setCount}>
        hello
      </ButtonWithinContent>
      <ButtonWithinContent type="reset" autoFocus={true} setCount={setCount}>
        56
      </ButtonWithinContent>
      {/* if JSX.Element above code will give error */}
      <ButtonWithinContent type="button" autoFocus={false} setCount={setCount}>
        <div>hellow</div>
      </ButtonWithinContent>
      <ButtonWithinContent
        type="button"
        autoFocus={false}
        setCount={setCount}
        defaultValue="test"
      >
        <div>
          <h1>hellow</h1>
        </div>
      </ButtonWithinContent>

      {/* 
      will give error as btnSize is not defined explicity or in ComponentPros of button
        <ButtonWithinContent
        type="button"
        autoFocus={false}
        setCount={setCount}
        btnSize="large"
      >
        <div>
          <h1>hellow</h1>
        </div>
      </ButtonWithinContent>
      */}

      <div
        onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
          console.log("hellow")
        }
      >
        button clicking
      </div>
      <button
        onSubmit={(e: React.FormEvent<HTMLButtonElement>) =>
          console.log("submitted")
        }
      >
        submit
      </button>
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          console.log("changed")
        }
      />
      {/* 
      will give error 
      <Generic countValue={"5"} countHistory={[1, 2, 3]} /> 
      */}
      <Generic countValue={5} countHistory={[1, 2, 3]} />
    </>
  );
}

export default HomePage;
