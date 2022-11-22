interface Foo {
  name: string;
  count: number;
}

interface Bar {
  name: string;
  age: number;
}

export type FooBar = Foo & Bar;

// tipos inutilizáveis:
/*
interface Foo {
    count: string;
}
interface Bar {
    count: number;
}
export type FooBar = Foo & Bar;
*/
// FooBar.count é do tipo `string & number`
