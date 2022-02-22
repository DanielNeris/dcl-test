export interface IStoreINFTs {
  id: number;
  contract: string;
  description?: string;
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
  rotation: {
    x?: number;
    y?: number;
    z?: number;
    w?: number;
  };
}
