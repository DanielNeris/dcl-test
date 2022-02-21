export function renderStoreName(name: string) {
  const entity = new Entity();
  const myText = new TextShape(name);
  entity.addComponent(myText);

  entity.addComponent(
    new Transform({
      position: new Vector3(3.4, 3.5, 4.5),
      scale: new Vector3(0.3, 0.5, 0.1),
      rotation: new Quaternion(0, 1, 0, 0),
    })
  );
  engine.addEntity(entity);
}
