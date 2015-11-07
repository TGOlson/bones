declare module ramda {
  declare function join(_:string, _:Array<string>): string;
  declare function id<T>(_:T): T;
  declare function compose<A, B, C>(_:(_:A) => B, _:(_:B) => C): C;
  declare function reverse(_:string): string;
  declare function isEmpty(_:Array<any>): boolean;
  declare function append<T>(_:T, _:Array<T>): Array<T>;
  declare function chain<T>(_:T, _:Array<T>): Array<T>;
  declare function map<A, B>(_:(_:A) => B, _:Array<A>): Array<B>;
  declare function chain<A, B>(_:(_:A) => Array<B>, _:Array<A>): Array<B>;
}
