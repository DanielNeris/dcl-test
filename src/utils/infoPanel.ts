export class InfoPanel {
  //add constructor
  private container: UIScrollRect;
  private dropShadow: UIImage;
  private mainPanel: UIImage;
  // private nftImage: UIImage;
  // private openButton: UIImage;
  // private nftTitle: UIText;
  // private nftDirectLink: UIText;

  constructor(canvas: UICanvas) {
    this.container = new UIScrollRect(canvas);
    this.container.width = "50%";
    this.container.height = "100%";
    this.container.positionY = 25;
    this.container.visible = false;
    this.container.isVertical = true;
    this.container.valueY = -1000;

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
    this.mainPanel.height = 900;

    const closeButton = new UIImage(
      this.container,
      new Texture("images/closeButton.png")
    );
    closeButton.sourceWidth = 50;
    closeButton.sourceHeight = 50;
    closeButton.width = 37.5;
    closeButton.height = 37.5;
    closeButton.positionX = 206;
    closeButton.positionY = 365;
    closeButton.isPointerBlocker = true;
    closeButton.onClick = new OnPointerDown((): void => {
      this.closeInfoPanel();
    });
  }

  public openInfoPanel(products: any): void {
    products.forEach((product: any, i: number) => {
      const nftImage = new UIImage(
        this.container,
        new Texture("images/mainPanel.png")
      );
      nftImage.sourceWidth = 512;
      nftImage.sourceHeight = 512;
      nftImage.width = 150;
      nftImage.height = 150;
      nftImage.isPointerBlocker = true;
      // nftImage.source = new Texture("images/1.png");
      nftImage.source = new Texture(product.images.edges[0].node.url);
      nftImage.onClick = new OnPointerDown(() => {
        openExternalURL(product.onlineStoreUrl);
      });

      const nftTitle = new UIText(this.container);
      nftTitle.adaptWidth = true;
      nftTitle.hAlign = "center";
      nftTitle.vAlign = "center";
      nftTitle.color = Color4.Black();
      nftTitle.value = "Not Found";
      nftTitle.value = product.title;
      nftTitle.fontSize = 18;

      const nftDirectLink = new UIText(this.container);
      nftDirectLink.adaptWidth = true;
      nftDirectLink.hAlign = "center";
      nftDirectLink.vAlign = "center";
      nftDirectLink.color = Color4.Black();
      nftDirectLink.value = "Not Found";
      nftDirectLink.value = product.onlineStoreUrl;
      nftDirectLink.fontSize = 10;

      const openButton = new UIImage(
        this.container,
        new Texture("images/openButton.png")
      );
      openButton.sourceWidth = 50;
      openButton.sourceHeight = 50;
      openButton.width = 37.5;
      openButton.height = 37.5;
      openButton.isPointerBlocker = true;
      openButton.onClick = new OnPointerDown(() => {
        openExternalURL(product.onlineStoreUrl);
      });

      const fixPositionY = i * 280;

      nftTitle.positionY = 350 - fixPositionY;
      // nftTitle.positionX = -200;

      nftImage.positionY = 250 - fixPositionY;
      // nftImage.positionX = 100;

      nftDirectLink.positionY = 180 - fixPositionY;
      // nftDirectLink.positionX = -80;

      openButton.positionY = 130 - fixPositionY;
      // openButton.positionX = -200;
    });

    this.container.visible = true;
    // this.nftType.visible = true;
    // this.nftTitle.visible = true;
    // nftImage.visible = true;
    // nftTitle.visible = true;
    // nftDirectLink.visible = true;
    // openButton.visible = true;
  }

  private closeInfoPanel(): void {
    this.container.visible = false;
    // this.nftTitle.visible = false;
    // this.nftType.visible = false;
    // this.nftImage.visible = false;
    // this.nftTitle.visible = false;
    // this.nftDirectLink.visible = false;
    // this.openButton.visible = false;
  }
}
