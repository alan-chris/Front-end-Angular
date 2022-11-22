setState(this: StoreMixin, newState: Partial<State>): void {
  const { properties: { store, id } } = this;

  if (id || newState['id']) {
      store.patch(assign( { id }, newState))
          .then(() => id ? store.get(id) : store.fetch())
          .then((state: State) => {
              replaceState(this, state);
          });
  }
  else {
      throw new Error('Unable to set state without a specified `id`');
  }
}

// - -

type ToPomise<T> = { [K in typeof T]: Promise<T[K]> };

type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] };
type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] };
 
interface Point { readonly x: number; y: number; }
 
const pointA: ReadonlyPartial<Point> = { x: 4 };
pointA.y = 3; // Erro: readonly
 
const pointB: MutableRequired<Point> = { x: 4, y: 3 };
pointB.x = 2; // Válido

// - -

type ToPromise<T> = { [K in typeof T]: Promise<T[K]> };
type Point = [ number, number ];
type PromisePoint = ToPromise<Point>;
 
const point: PromisePoint = [ Promise.resolve(2), Promise.resolve(3) ]; // Válido
