import { IStoreShelves } from "../../config/dtos/IStoreShelves";

export function renderShelf(items: IStoreShelves[]) {
  items.map((item) => {
    const entity = new Entity();

    entity.addComponent(new GLTFShape("models/shelf.gltf"));
    entity.addComponent(
      new Transform({
        position: new Vector3(
          item.position.x,
          item.position.y,
          item.position.z
        ),
        scale: new Vector3(item.scale.x, item.scale.y, item.scale.z),
      })
    );
    engine.addEntity(entity);
  });
}
