import { Equal, Expect } from "@type-challenges/utils";
type MyPick<T, U extends keyof T> = {
  [k in U]: T[k];
};

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, "title">>>,
  Expect<Equal<Expected2, MyPick<Todo, "title" | "completed">>>,
  // @ts-expect-error
  MyPick<Todo, "title" | "completed" | "invalid">
];

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

interface Expected1 {
  title: string;
}

interface Expected2 {
  title: string;
  completed: boolean;
}

type MyReadonly<T> = {
  readonly [k in keyof T]: T[k];
};

type casesReadonly = [
  Expect<Equal<MyReadonly<TodoReadonly>, MyReadonly<TodoReadonly>>>
];

interface TodoReadonly {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}

type TupleToObject<T extends readonly string[]> = {
  [k in T[number]]: k;
};

type FirstOfArray<T extends any[]> = T extends [] ? never : T[0];

type LengthOfTuple<T extends readonly any[]> = T["length"];

type MyExclude<T, U> = T extends U ? never : T;

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
  ? U extends Promise<any>
    ? Awaited<U>
    : U
  : never;
type MyIf<C extends boolean, T, F> = C extends true ? T : F;

type MyConcat<T extends any[], U extends any[]> = [...T, ...U];

type MyIncludes<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? Equal<First, U> extends true
    ? true
    : MyIncludes<Rest, U>
  : false;

type MyPush<T extends any[], U> = [...T, U];

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer U
) => any
  ? U
  : never;
const fooMyParameters = (arg1: string, arg2: number): void => {};
const barMyParameters = (arg1: boolean, arg2: { a: "A" }): void => {};
const bazMyParameters = (): void => {};

type casesMyParameters = [
  Expect<Equal<MyParameters<typeof fooMyParameters>, [string, number]>>,
  Expect<Equal<MyParameters<typeof barMyParameters>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof bazMyParameters>, []>>
];
  
