import * as utils from "@dcl/ecs-scene-utils";
import * as EthereumController from "@decentraland/EthereumController";

let eth = EthereumController;

const myWallet = "0x8eBef732368E052EceF4c471cB4EED00609235dF";
const enterPrice = 0.0001;

function payment() {
  executeTask(async () => {
    try {
      await eth.requirePayment(myWallet, enterPrice, "ETH");
    } catch {
      log("failed process payment");
    }
  });
}

const button = new Entity();
button.addComponent(new BoxShape());
button.addComponent(
  new OnClick((e) => {
    payment();
  })
);
engine.addEntity(button);

import storeItemsArray from "./config/storeItems";
import storeNFTsArray from "./config/storeNFTs";
import storeShelvesArray from "./config/storeShelves";

import { renderBanner } from "./utils/renderBanner";
import { renderStoreName } from "./utils/renderBanner copy";
import { renderNFTs } from "./utils/renderNFTs";
import { renderItems, renderShelf, renderStore } from "./utils/store/index";

renderStore({ isPlayingMusic: true });
renderItems(storeItemsArray);
renderShelf(storeShelvesArray);

renderBanner();
renderStoreName("SkyStore");
renderNFTs(storeNFTsArray);

// executeTask(async () => {
//   try {
//     const response = await fetch("https://skydan-api.herokuapp.com/tokens");
//     const json = await response.json();
//     log(json);
//   } catch {
//     log("failed to reach URL");
//   }
// });
