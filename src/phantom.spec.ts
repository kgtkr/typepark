import { PhantomType, PhantomTypeUnwrap } from "./phantom";
import { TypeEq, assertType } from "./test";

assertType<TypeEq<PhantomTypeUnwrap<PhantomType<1>>, 1>>();
assertType<TypeEq<PhantomTypeUnwrap<PhantomType<{}>>, {}>>();
assertType<TypeEq<PhantomTypeUnwrap<PhantomType<never>>, never>>();
