System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, systemEvent, SystemEvent, _dec, _class, _crd, ccclass, property, player;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8b67MOA59ARofswetmpBzg", "player", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = player
       * DateTime = Tue Jan 18 2022 20:18:19 GMT+0530 (India Standard Time)
       * Author = Vengayam
       * FileBasename = player.ts
       * FileBasenameNoExtension = player
       * URL = db://assets/Scripts/player.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("player", player = (_dec = ccclass('player'), _dec(_class = class player extends Component {
        start() {}

        onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.onKeyPress, this);
        }

        onKeyPress(event) {
          if (event.keyCode == 37) {
            if (this.node.position.x - 50 > -300) {
              this.node.setPosition(this.node.position.x - 50, this.node.position.y, 0);
            }
          } else if (event.keyCode == 39) {
            if (this.node.position.x + 50 < 300) {
              this.node.setPosition(this.node.position.x + 50, this.node.position.y, 0);
            }
          }
        }

        update(deltaTime) {}

      }) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=player.js.map