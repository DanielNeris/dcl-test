import { IStoreINFTs } from "./dtos/IStoreINFTs";

const storeNFTsArray: IStoreINFTs[] = [
  {
    id: 1,
    contract:
      "0x495f947276749ce646f68ac8c248420045cb7b5e/45531194919388041031753359399164931860157477241469538726128249060365986430977",
    description: "test do test",
    position: { x: 4, y: 2, z: 15.7 },
    scale: { x: 2, y: 2, z: 1 },
    rotation: { x: 0, y: 0, z: 0, w: 0 },
  },
  {
    id: 2,
    contract:
      "0x495f947276749ce646f68ac8c248420045cb7b5e/45531194919388041031753359399164931860157477241469538726128249059266474803201",
    description: "test do test",
    position: { x: 0.15, y: 2, z: 14 },
    scale: { x: 2, y: 3, z: 1 },
    rotation: { x: 1, y: 0, z: -1, w: 0 },
  },
  {
    id: 3,
    contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/8520",
    description: "test do test",
    position: { x: 2, y: 2, z: 15.7 },
    scale: { x: 2, y: 2, z: 1 },
    rotation: { x: 0, y: 0, z: 0, w: 0 },
  },
  {
    id: 4,
    contract: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/12",
    description: "test do test",
    position: { x: 5.6, y: 2, z: 14 },
    scale: { x: 2, y: 2, z: 1 },
    rotation: { x: -1, y: 0, z: -1, w: 0 },
  },
];
export default storeNFTsArray;
