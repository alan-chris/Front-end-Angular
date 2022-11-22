function toNumber(numberString: string): number {
  const num: number = parseFloat(numberString);
  return num;
}


function numberStringSwap(value: any, radix: number = 10): any {
  if (typeof value === 'string') {
      return parseInt(value, radix);
  }
  else if (typeof value === 'number') {
      return String(value);
  }
}

const num = <number> numberStringSwap('1234');
const str = numberStringSwap(1234) as string;
