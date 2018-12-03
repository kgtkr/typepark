export declare type And<A extends boolean, B extends boolean> = A extends true ? (B extends true ? true : false) : false;
export declare type Or<A extends boolean, B extends boolean> = A extends true ? true : (B extends true ? true : false);
export declare type Xor<A extends boolean, B extends boolean> = A extends true ? (B extends true ? false : true) : (B extends true ? true : false);
export declare type Not<X extends boolean> = X extends true ? false : true;
