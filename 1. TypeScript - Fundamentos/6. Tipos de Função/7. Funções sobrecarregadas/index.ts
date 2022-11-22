function numberStringSwap(value: number, radix?: number): string;
function numberStringSwap(value: string): number;
function numberStringSwap(value: any, radix: number = 10): any {
    if (typeof value === 'string') {
        return parseInt(value, radix);
    }
    else if (typeof value === 'number') {
        return String(value);
    }
}
/*
function numberStringSwap(value: any): any;
function numberStringSwap(value: number): string;
 
numberStringSwap('1234');

let numberStringSwap: {
  (value: number, radix?: number): string;
  (value: string): number;
};
*/
/*
createElement(tagName: 'a'): HTMLAnchorElement;
createElement(tagName: 'abbr'): HTMLElement;
createElement(tagName: 'address'): HTMLElement;
createElement(tagName: 'area'): HTMLAreaElement;
// ... etc.
createElement(tagName: string): HTMLElement;
*/
