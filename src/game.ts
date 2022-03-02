import * as utils from "@dcl/ecs-scene-utils";

// import * as EthereumController from "@decentraland/EthereumController";

// let eth = EthereumController;

// const myWallet = "0x8eBef732368E052EceF4c471cB4EED00609235dF";
// const enterPrice = 0.0001;

// function payment() {
//   executeTask(async () => {
//     try {
//       await eth.requirePayment(myWallet, enterPrice, "ETH");
//     } catch {
//       log("failed process payment");
//     }
//   });
// }

// const button = new Entity();
// button.addComponent(new BoxShape());
// button.addComponent(
//   new OnClick((e) => {
//     payment();
//   })
// );
// engine.addEntity(button);

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

// const canvas = new UICanvas();

// const textInput = new UIInputText(canvas);
// textInput.width = "80%";
// textInput.height = "100px";
// textInput.vAlign = "bottom";
// textInput.hAlign = "center";
// textInput.fontSize = 10;
// textInput.placeholder = "Write message here";
// // textInput.placeholderColor = Color4.Gray();
// textInput.positionY = "200px";
// textInput.isPointerBlocker = true;

// textInput.onTextSubmit = new OnTextSubmit((x) => {
//   const text = new UIText(textInput);
//   text.value = "<USER-ID> " + x.text;
//   text.width = "100%";
//   text.height = "20px";
//   text.vAlign = "top";
//   text.hAlign = "left";
// });
