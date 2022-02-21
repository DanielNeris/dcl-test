export function renderNFTs() {
  const entity = new Entity();
  const shapeComponent = new NFTShape(
    "ethereum://0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0",
    {
      color: Color3.Purple(),
      style: PictureFrameStyle.Minimal_Grey,
    }
  );

  entity.addComponent(shapeComponent);

  entity.addComponent(
    new Transform({
      position: new Vector3(4, 2, 15.7),
      scale: new Vector3(2, 2, 1),
    })
  );

  entity.addComponent(
    new OnPointerDown((e) => {
      openNFTDialog(
        "ethereum://0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb/0",
        "skydan team"
      );
    })
  );

  engine.addEntity(entity);
}
