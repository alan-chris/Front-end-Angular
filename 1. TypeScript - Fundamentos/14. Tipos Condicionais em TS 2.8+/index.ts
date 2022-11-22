declare function addOrConcat<T extends number | string>(x: T): T extends number ? number : string;

// Exclude: excluir de T qualquer coisa que seja atribuível a U
// Extract: extrair de T qualquer coisa que seja atribuível a U
// NonNullable: excluir null e undefined
// ReturnType: obter o tipo de retorno de uma função
// InstanceType: obter o tipo de instância de uma função construtora
type ExcludeExample = Exclude<string | number | Point, string | Point>; // number
type ExtractExample = Extract<string | number | Point, string | Point>; // string | Point
type NonNullableExample = NonNullable<string | number | null | undefined | void>; // string | number
type ReturnTypeExample = ReturnType<() => boolean>; // boolean
 
class Renderer {}
type InstanceOfExample = InstanceType<typeof Renderer>; // Renderer
