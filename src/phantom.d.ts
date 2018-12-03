import { Unvalue } from "./unvalue";
export declare type PhantomType<T> = (x: T, damy: Unvalue) => T[];
export declare function PhantomType<T>(): PhantomType<T>;
export declare type PhantomTypeUnwrap<T extends PhantomType<any>> = T extends PhantomType<infer P> ? P : never;
