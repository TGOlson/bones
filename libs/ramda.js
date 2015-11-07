declare module ramda {
  declare function join(_:string, _:Array<string>): string;
  declare function id<T>(_:T): T;
  declare function compose<A, B, C>(_:(_:A) => B, _:(_:B) => C): C;
  declare function reverse(_:string): string;
}
