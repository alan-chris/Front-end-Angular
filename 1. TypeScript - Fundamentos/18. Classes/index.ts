class Proxy {
  constructor(kwArgs: {}) {
    for (let key in kwArgs) {
      this[key] = kwArgs[key];
    }
  }

  get(key: string): any {
    return this[key];
  }

  set(key: {}): void;
  set(key: string, value: any): void;
  set(key: any, value?: any): void {
    // ...
  }
}

class Stateful extends Proxy {
  constructor(kwArgs: {}) {
    super(kwArgs);
  }

  get(key: string): any {
    let getter: string = '_' + key + 'Getter';
    return this[getter] ? this[getter]() : super.get(key);
  }
}

// - -

class Animal extends Stateful {
  protected _happy: boolean;

  pet(): void {
    this._happy = true;
  }
}

class Dog extends Animal {
  static isDogLike(object: any): boolean {
    return object.bark && object.pet;
  }

  private _loudBark: boolean;

  bark(): string {
    let noise = this._happy ? 'woof' : 'grr';
    if (this._loudBark) {
      noise = noise.toUpperCase();
    }

    return noise;
  }
}

// - -
/*
class DomesticatedDog extends Dog {
  age: number = Math.random() * 20;
  collarType: string = 'leather';
  toys: Toy[] = [];
}
*/
// - -

class DomesticatedDog extends Dog {
  age: number;
  collarType: string;
  toys: Toy[];
 
  constructor(kwArgs: {}) {
    super(kwArgs);
    this.age = Math.random() * 20;
    this.collarType = 'leather';
    this.toys = [];
  }
}