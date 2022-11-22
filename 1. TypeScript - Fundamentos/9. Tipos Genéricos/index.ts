interface Arrayish<T> {
  map<U>(callback: (value: T, index: number, array: Arrayish<T>) => U, thisArg?: any): Array<U>;
}

const arrayOfStrings: Arrayish<string> = ['a', 'b', 'c'];

const arrayOfCharCodes: Arrayish<number> = arrayOfStrings.map(function (value: string): number {
  return value.charCodeAt(0);
});

function createArrayish<T = string>(...args: T[]): Arrayish<T> {
  return args;
}
// function createArrayish(): Arrayish<string>;
// function createArrayish<T>(...args: T[]): Arrayish<T>;
// function createArrayish(...args: any[]): Arrayish<any> {
//     return args;
// }
