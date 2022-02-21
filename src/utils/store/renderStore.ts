interface IStore {
  isPlayingMusic: boolean;
}

export function renderStore({ isPlayingMusic }: IStore) {
  const entity = new Entity();

  entity.addComponent(new GLTFShape("models/plaza.gltf"));

  entity.addComponent(
    new Transform({
      position: new Vector3(8, 0, 8),
      scale: new Vector3(0.5, 1, 0.5),
    })
  );

  if (isPlayingMusic) {
    // sound
    const clip = new AudioClip("sounds/Shootingstars.mp3");
    const source = new AudioSource(clip);
    entity.addComponent(source);
    source.playing = true;
  }

  engine.addEntity(entity);
}
