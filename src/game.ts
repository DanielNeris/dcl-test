import * as utils from "@dcl/ecs-scene-utils";
import storeItemsArray from "./config/storeItems";
import storeNFTsArray from "./config/storeNFTs";
import storeShelvesArray from "./config/storeShelves";

import { renderBanner } from "./utils/renderBanner";
import { renderStoreName } from "./utils/renderBanner copy";
import { renderNFTs } from "./utils/renderNFTs";
import { renderItems, renderShelf, renderStore } from "./utils/store/index";
import { renderProducts } from "./utils/products/renderProducts";

renderStore({ isPlayingMusic: false });
// renderItems(storeItemsArray);
renderShelf(storeShelvesArray);

renderBanner();
renderStoreName("SkyStore");
renderNFTs(storeNFTsArray);

renderProducts();
