import { Cons } from "./list";

type NumberObject<T extends number> = { [P in T]: P };

export type StringToNumber<T extends string, R extends any[] = []> = {
  0: R["length"],
  1: StringToNumber<T, Cons<any, R>>
}[{ [P in T]: any } extends NumberObject<R["length"]> ? 0 : 1];
