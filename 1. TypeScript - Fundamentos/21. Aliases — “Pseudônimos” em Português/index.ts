import * as foo from './foo';
type Foo = foo.Foo;
type Bar = () => string;
type StringOrNumber = string | number;
type PromiseOrValue<T> = T | Promise<T>;
 
function convert(value: StringOrNumber): string {
  return String(value);
}
 
function when<T>(value: PromiseOrValue<T>): Promise<T> {
  if (value instanceof Promise) {
    return value;
  }
  return Promise.resolve(value);
}
