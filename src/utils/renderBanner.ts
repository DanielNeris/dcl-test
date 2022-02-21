export function renderBanner() {
  const entity = new Entity();

  entity.addComponent(new GLTFShape("models/Banner.gltf"));
  entity.addComponent(
    new Transform({
      position: new Vector3(1.3, 0, 5),
      scale: new Vector3(0.8, 0.8, 0.8),
      rotation: new Quaternion(0, 10, 0, 10),
    })
  );
  entity.addComponent(
    new OnPointerDown(() => {
      openExternalURL("https://maverickdash.com");
    })
  );
  engine.addEntity(entity);
}
