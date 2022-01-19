System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Collider2D, Contact2DType, game, _dec, _class, _crd, ccclass, property, enemy;

  function _reportPossibleCrUseOfgame(extras) {
    _reporterNs.report("game", "./game", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      game = _unresolved_2.game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32e978mlpBMcrpl0LZBgdkZ", "enemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = enemy
       * DateTime = Tue Jan 18 2022 20:44:58 GMT+0530 (India Standard Time)
       * Author = Vengayam
       * FileBasename = enemy.ts
       * FileBasenameNoExtension = enemy
       * URL = db://assets/Scripts/enemy.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("enemy", enemy = (_dec = ccclass('enemy'), _dec(_class = class enemy extends Component {
        onTouch(selfCollider, otherCollider, colType) {
          if (otherCollider.tag == 1) {
            try {
              if (otherCollider.name == this.node.parent.getChildByName('player').getComponent(Collider2D).name) {
                this.node.parent.getComponent(_crd && game === void 0 ? (_reportPossibleCrUseOfgame({
                  error: Error()
                }), game) : game).minusLife();
                this.node.destroy();
              } else if (otherCollider.name == this.node.parent.getChildByName('bullet').getComponent(Collider2D).name) {
                this.node.parent.getComponent(_crd && game === void 0 ? (_reportPossibleCrUseOfgame({
                  error: Error()
                }), game) : game).addScore();
                this.node.destroy();
              }
            } catch (e) {}
          }
        } //if (otherCollider.tag == 3) {
        //    try {
        //        this.node.destroy();
        //    }
        //    catch (e) { }
        //}


        stepDown() {
          this.schedule(function () {
            this.node.setPosition(this.node.position.x, this.node.position.y - 10, 0);
          }, 1); //tween(this.node).to(19, { position: new Vec3(this.node.position.x, - 250, 0) }).start();
        }

        onLoad() {
          this.stepDown();
        }

        start() {}

        update(deltaTime) {
          var collision = this.getComponent(Collider2D);

          if (collision) {
            collision.on(Contact2DType.BEGIN_CONTACT, this.onTouch, this);
          }
        }

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
//# sourceMappingURL=enemy.js.map