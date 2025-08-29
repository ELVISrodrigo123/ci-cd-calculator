// services/calculator.ts
export type Operator = "+" | "-" | "*" | "/";

export function calculate(a: number, b: number, op: Operator): number {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b === 0) throw new Error("No se puede dividir entre 0");
      return a / b;
    default:
      throw new Error("Operador inválido");
  }
}
