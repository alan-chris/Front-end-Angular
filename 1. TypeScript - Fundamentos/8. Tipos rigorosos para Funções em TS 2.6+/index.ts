class Animal { breath() { } }
class Dog extends Animal { bark() {} }
class Cat extends Animal { meow() {} }
 
let f1: (x: Animal) => void = (x: Animal) => x.breath();
let f2: (x: Dog) => void = (x: Dog) => x.bark();
let f3: (x: Cat) => void = (x: Cat) => x.meow();
 
f1 = f2;
const c = new Cat();
f1(c); // Erro no Runtime
