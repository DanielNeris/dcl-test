import * as ui from "@dcl/ui-scene-utils";

import { fetchProducts } from "./fetchProducts";

export async function renderProducts() {
  const products = await fetchProducts();

  products.map((product: any) => {
    log(product);

    const entity = new Entity();
    entity.addComponent(new BoxShape());

    const transform = new Transform({
      position: new Vector3(
        product.position.x,
        product.position.y,
        product.position.z
      ),
      scale: new Vector3(product.scale.x, product.scale.y, product.scale.z),
    });

    entity.addComponent(transform);

    const image = new ui.CenterImage(
      product.images.edges[0].node.url,
      -1,
      true
    );
    image.hide();

    log(image);

    const prompt = new ui.OptionPrompt(
      product.title,
      "",
      () => {
        prompt.hide();
        image.show();
      },
      () => {
        prompt.hide();
        image.hide();
      },
      "",
      "",
      true
    );
    prompt.hide();

    entity.addComponent(
      new OnPointerDown(() => {
        openExternalURL(product.onlineStoreUrl);
        // prompt.show();
      })
    );

    engine.addEntity(entity);
  });
}
