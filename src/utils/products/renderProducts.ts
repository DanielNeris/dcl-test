import * as ui from "@dcl/ui-scene-utils";
import { InfoPanel } from "../infoPanel";

import { fetchProducts } from "./fetchProducts";

export async function renderProducts() {
  const products = await fetchProducts();

  // products.map((product: any) => {
  const entity = new Entity();
  entity.addComponent(new BoxShape());

  const transform = new Transform({
    position: new Vector3(2.3, 1.7, 0.3),
    scale: new Vector3(0.3, 0.3, 0.3),
  });

  entity.addComponent(transform);

  // const image = new ui.CenterImage(
  //   product.images.edges[0].node.url,
  //   -1,
  //   true
  // );
  // image.hide();

  // const prompt = new ui.OptionPrompt(
  //   product.title,
  //   "",
  //   () => {
  //     prompt.hide();
  //     image.show();
  //   },
  //   () => {
  //     prompt.hide();
  //     image.hide();
  //   },
  //   "",
  //   "",
  //   true
  // );
  // prompt.hide();

  entity.addComponent(
    new OnPointerDown(() => {
      // openExternalURL(product.onlineStoreUrl);
      // prompt.show();
      const canvas = new UICanvas();

      const infoPanel = new InfoPanel(canvas);

      infoPanel.openInfoPanel(products);
    })
  );

  engine.addEntity(entity);
  // });
}
