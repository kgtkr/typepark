import { Unvalue } from "./unvalue";

export type PhantomType<T> = (x: T, damy: Unvalue) => T[];
const phantomType: PhantomType<any> = () => [];
export function PhantomType<T>(): PhantomType<T> {
  return phantomType;
}
export type PhantomTypeUnwrap<T extends PhantomType<any>> = T extends PhantomType<infer P> ? P : never;