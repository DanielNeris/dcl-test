import { IStoreItems } from "../../config/dtos/IStoreItems";

export function renderItems(items: IStoreItems[]) {
  items.map((item) => {
    const entity = new Entity();
    entity.addComponent(new BoxShape());

    const transform = new Transform({
      position: new Vector3(item.position.x, item.position.y, item.position.z),
      scale: new Vector3(item.scale.x, item.scale.y, item.scale.z),
    });

    entity.addComponent(transform);

    entity.addComponent(
      new OnPointerDown(() => {
        openExternalURL(item.path);
      })
    );
    engine.addEntity(entity);
  });
}
