export async function fetchProducts() {
  const response = await fetch(
    "https://hudson-webdeveloper.myshopify.com/api/2022-01/graphql.json",
    {
      method: "POST",
      headers: {
        "X-Shopify-Storefront-Access-Token": "dea2dafbc9b6202a0163b96b1441e60a",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query:
          "{products(first: 3){edges{node{id, title, handle, onlineStoreUrl, description, createdAt, images(first: 10){edges{node{id, url}}} }}}}",
      }),
    }
  );

  const products = await response.json();

  return products.data.products.edges.map((product: any, i: number) => {
    const positonX = 2.3 + i;

    return {
      ...product.node,
      position: { x: positonX, y: 1.7, z: 0.3 },
      scale: { x: 0.3, y: 0.3, z: 0.3 },
    };
  });
}
