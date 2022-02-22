import { IStoreINFTs } from "src/config/dtos/IStoreINFTs";

export function renderNFTs(items: IStoreINFTs[]) {
  items.map((item) => {
    log(item);
    const entity = new Entity();
    const shapeComponent = new NFTShape(`ethereum://${item.contract}`, {
      color: Color3.Purple(),
      style: PictureFrameStyle.Minimal_Grey,
    });

    entity.addComponent(shapeComponent);

    entity.addComponent(
      new Transform({
        position: new Vector3(
          item.position.x,
          item.position.y,
          item.position.z
        ),
        scale: new Vector3(item.scale.x, item.scale.y, item.scale.z),
        rotation: new Quaternion(
          item.rotation.x,
          item.rotation.y,
          item.rotation.z,
          item.rotation.w
        ),
      })
    );

    entity.addComponent(
      new OnPointerDown((e) => {
        openNFTDialog(`ethereum://${item.contract}`, item.description);
      })
    );

    engine.addEntity(entity);
  });
}
