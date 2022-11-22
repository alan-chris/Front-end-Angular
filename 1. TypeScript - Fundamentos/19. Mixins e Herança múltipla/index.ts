interface Chimera extends Dog, Lion, Monsterish {}
 
class MyChimera implements Chimera {
  bark: () => string;
  roar: () => string;
  terrorize(): void {
    // ...
  }
 
  // ...
}
MyChimera.prototype.bark = Dog.prototype.bark;
MyChimera.prototype.roar = Lion.prototype.roar;
