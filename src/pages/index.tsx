import Display from "./components/Display";
import Keypad from "./components/Keypad";
import { calculate, Operator } from "@/services/calculator";
import { useState } from "react";
export default function Home() {
  const [display, setDisplay] = useState("0");
  const [operation, setOperation] = useState("");
  const [first, setFirst] = useState<number | null>(null);
  const [operator, setOperator] = useState<Operator | null>(null);
  const [resetNext, setResetNext] = useState(false);

  const handlePress = (key: string) => {
    if (!isNaN(Number(key)) || key === ".") {
      if (resetNext) {
        setDisplay(key);
        setResetNext(false);
      } else {
        setDisplay(prev => (prev === "0" ? key : prev + key));
      }
    }
    else if (["+", "-", "*", "/"].includes(key)) {
      if (display) {
        if (first !== null && operator) {
          const result = calculate(first, Number(display), operator);
          setFirst(result);
          setDisplay(result.toString());
          setOperation(result + " " + key);
        } else {
          setFirst(Number(display));
          setOperation(display + " " + key);
        }
        setOperator(key as Operator);
        setResetNext(true);
      }
    }
    else if (key === "=") {
      if (first !== null && operator && display) {
        try {
          const result = calculate(first, Number(display), operator);
          setDisplay(result.toString());
          setOperation("");
          setFirst(null);
          setOperator(null);
          setResetNext(true);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setDisplay(err.message);
          } else {
            setDisplay("Error desconocido");
          }
        }
      }
    }
    else if (key === "C") {
      setDisplay("0");
      setOperation("");
      setFirst(null);
      setOperator(null);
      setResetNext(false);
    }
  };

  return (
    <>
      <div style={{ maxWidth: 280, margin: "40px auto", padding: 16, border: "1px solid #ccc", borderRadius: 12 }}>
        <Display operation={operation} value={display} />
        <Keypad onPress={handlePress} />
        <h1>no puede ser </h1>
        <h2></h2>
      </div>
      <h1>hola jefa como esta ¿?</h1>
    </>
  );
}
