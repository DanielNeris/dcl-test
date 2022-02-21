export interface IStoreItems {
  id: number;
  image: string;
  path: string;
  position: {
    x?: number;
    y?: number;
    z?: number;
  };
  scale: {
    x?: number;
    y?: number;
    z?: number;
  };
}
