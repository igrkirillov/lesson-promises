import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

export default class GameSavingLoader {
  static load() {
    return new Promise(resolve =>
      read()
        .then(json)
        .then((text => {
          const { id, created, userInfo } = JSON.parse(text);
          resolve(new GameSaving(id, created, userInfo.id, userInfo.name, userInfo.level, userInfo.points));
        })));
  }
}