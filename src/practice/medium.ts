import { Equal, Expect } from "@type-challenges/utils"

type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer U
  ? U
  : never

type casesMyReturnType = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => "foo", MyReturnType<() => () => "foo">>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fnMyReturnType>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1MyReturnType>>>
]

type ComplexObject = {
  a: [12, "foo"]
  bar: "hello"
  prev(): number
}

const fnMyReturnType = (v: boolean) => (v ? 1 : 2)
const fn1MyReturnType = (v: boolean, w: any) => (v ? 1 : 2)

type MyOmit<T, K extends keyof T> = {
  [k in Exclude<keyof T, K>]: T[k]
}
type casesMyOmit = [
  Expect<Equal<Expected1MyOmit, MyOmit<TodoMyOmit, "description">>>,
  Expect<
    Equal<Expected2MyOmit, MyOmit<TodoMyOmit, "description" | "completed">>
  >
]

// @ts-expect-error
type error = MyOmit<Todo, "description" | "invalid">

interface TodoMyOmit {
  title: string
  description: string
  completed: boolean
}

interface Expected1MyOmit {
  title: string
  completed: boolean
}

interface Expected2MyOmit {
  title: string
}
