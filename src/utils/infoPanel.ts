export class InfoPanel {
  //add constructor
  private container: UIContainerRect;
  private dropShadow: UIImage;
  private mainPanel: UIImage;
  private nftImage: UIImage;
  private openButton: UIImage;

  // private nftType: UIText;
  // private nftTitle: UIText;
  private nftTitle: UIText;
  private nftDirectLink: UIText;

  private sound: Entity = new Entity();

  constructor(canvas: UICanvas) {
    this.container = new UIContainerRect(canvas);
    this.container.width = "100%";
    this.container.height = "100%";
    this.container.positionY = 25;
    this.container.visible = false;

    this.dropShadow = new UIImage(
      this.container,
      new Texture("images/shadow.png")
    );
    this.dropShadow.sourceWidth = 960;
    this.dropShadow.sourceHeight = 1200;
    this.dropShadow.width = 485;
    this.dropShadow.height = 606;
    this.dropShadow.opacity = 0.2;

    this.mainPanel = new UIImage(
      this.container,
      new Texture("images/mainPanel.png")
    );
    this.mainPanel.sourceWidth = 960;
    this.mainPanel.sourceHeight = 1200;
    this.mainPanel.width = 480;
    this.mainPanel.height = 600;

    // this.nftType = new UIText(this.container);
    // this.nftType.hAlign = "center";
    // this.nftType.vAlign = "center";
    // this.nftType.positionX = -143;
    // this.nftType.positionY = 265;
    // this.nftType.fontSize = 16;
    // this.nftType.color = new Color4(1, 0.1, 0.4);
    // this.nftType.value = "Not Found";
    // this.nftType.visible = false;

    // this.nftTitle = new UIText(this.container);
    // this.nftTitle.hAlign = "center";
    // this.nftTitle.vAlign = "center";
    // this.nftTitle.positionX = -143;
    // this.nftTitle.positionY = -233;
    // this.nftTitle.fontSize = 25;
    // this.nftTitle.color = Color4.Black();
    // this.nftTitle.value = "Not Found";
    // this.nftTitle.visible = false;

    this.nftImage = new UIImage(
      this.container,
      new Texture("images/mainPanel.png")
    );

    this.nftImage.sourceWidth = 512;
    this.nftImage.sourceHeight = 512;
    this.nftImage.width = 384;
    this.nftImage.height = 384;
    this.nftImage.visible = false;
    this.nftImage.isPointerBlocker = true;

    const closeButton = new UIImage(
      this.container,
      new Texture("images/closeButton.png")
    );
    closeButton.sourceWidth = 50;
    closeButton.sourceHeight = 50;
    closeButton.width = 37.5;
    closeButton.height = 37.5;
    closeButton.positionX = 206;
    closeButton.positionY = 265;
    closeButton.isPointerBlocker = true;
    closeButton.onClick = new OnPointerDown((): void => {
      this.closeInfoPanel();
    });

    this.openButton = new UIImage(
      this.container,
      new Texture("images/openButton.png")
    );

    this.nftTitle = new UIText(this.container);
    this.nftTitle.adaptWidth = true;
    this.nftTitle.hAlign = "center";
    this.nftTitle.vAlign = "center";
    this.nftTitle.positionY = 250;
    this.nftTitle.fontSize = 18;
    this.nftTitle.color = Color4.Black();
    this.nftTitle.value = "Not Found";
    this.nftTitle.visible = false;

    this.nftDirectLink = new UIText(this.container);
    this.nftDirectLink.adaptWidth = true;
    this.nftDirectLink.hAlign = "center";
    this.nftDirectLink.vAlign = "center";
    this.nftDirectLink.positionY = -213;
    this.nftDirectLink.fontSize = 10;
    this.nftDirectLink.color = Color4.Black();
    this.nftDirectLink.value = "Not Found";
    this.nftDirectLink.visible = false;

    this.sound.addComponent(
      new Transform({
        position: new Vector3(8, 0, 8),
      })
    );
    this.sound.addComponent(
      new AudioSource(new AudioClip("sounds/Shootingstars.mp3"))
    );
    engine.addEntity(this.sound);
  }

  public openInfoPanel(product: any): void {
    // log(product);
    // for (let i = 0; i < data.length; i++) {
    //   if (id == data[i].id) {
    //     log(data[i].images);
    //     this.nftType.value = data[i].type;
    // this.nftTitle.value = product.title;
    this.nftImage.source = new Texture(product.images.edges[0].node.url);
    // this.nftImage.source = new Texture("images/1.png");

    this.nftTitle.value = product.title;
    //     this.nftTitle.fontSize = data[i].details.fontSize;
    this.nftDirectLink.value = product.onlineStoreUrl;
    //     this.nftDirectLink.fontSize = data[i].directLink.fontSize;
    //   }
    // }

    this.nftImage.onClick = new OnPointerDown(() => {
      openExternalURL(product.onlineStoreUrl);
    });

    this.openButton.sourceWidth = 50;
    this.openButton.sourceHeight = 50;
    this.openButton.width = 37.5;
    this.openButton.height = 37.5;
    this.openButton.positionX = -180;
    this.openButton.positionY = -265;
    this.openButton.isPointerBlocker = true;
    this.openButton.visible = false;
    this.openButton.onClick = new OnPointerDown(() => {
      openExternalURL(product.onlineStoreUrl);
    });

    this.container.visible = true;
    // this.nftType.visible = true;
    // this.nftTitle.visible = true;
    this.nftImage.visible = true;
    this.nftTitle.visible = true;
    this.nftDirectLink.visible = true;
    this.openButton.visible = true;
  }

  private closeInfoPanel(): void {
    this.container.visible = false;
    // this.nftTitle.visible = false;
    // this.nftType.visible = false;
    this.nftImage.visible = false;
    this.nftTitle.visible = false;
    this.nftDirectLink.visible = false;
    this.openButton.visible = false;
    this.sound.getComponent(AudioSource).playOnce();
  }
}
