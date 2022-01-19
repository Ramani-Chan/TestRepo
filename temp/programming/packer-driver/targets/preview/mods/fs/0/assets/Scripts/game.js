System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Prefab, systemEvent, SystemEvent, Collider2D, Contact2DType, instantiate, Vec3, tween, Label, director, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, game;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      systemEvent = _cc.systemEvent;
      SystemEvent = _cc.SystemEvent;
      Collider2D = _cc.Collider2D;
      Contact2DType = _cc.Contact2DType;
      instantiate = _cc.instantiate;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Label = _cc.Label;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a989ezm8ntEUKYKj6eK1C6c", "game", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      /**
       * Predefined variables
       * Name = game
       * DateTime = Tue Jan 18 2022 21:19:45 GMT+0530 (India Standard Time)
       * Author = Vengayam
       * FileBasename = game.ts
       * FileBasenameNoExtension = game
       * URL = db://assets/Scripts/game.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */
      _export("game", game = (_dec = ccclass('game'), _dec2 = property(Prefab), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = (_temp = class game extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bullet", _descriptor, this);

          _initializerDefineProperty(this, "score", _descriptor2, this);

          _initializerDefineProperty(this, "lifec", _descriptor3, this);

          _defineProperty(this, "curScore", 0);

          _defineProperty(this, "lifeCount", 3);

          _defineProperty(this, "empt", new Vec3(0, 0, 0));
        }

        addScore() {
          this.curScore += 100;
          this.score.string = 'Score: ' + this.curScore.toString();
        }

        minusLife() {
          this.lifeCount = this.lifeCount - 1;
          this.lifec.string = 'Lives Remaining: ' + this.lifeCount.toString();
        }

        shoot(event) {
          if (event.keyCode == 32) {
            this.schedule(function () {
              var newShot2 = instantiate(this.bullet);
              newShot2.setPosition(this.node.getChildByName('player').position.x, this.node.getChildByName('player').position.y, 0);
              this.node.addChild(newShot2);
              tween(newShot2).to(5, {
                position: new Vec3(newShot2.position.x, 400, 0)
              }).start(); //if (newShot.position.y > 250) {
              //    newShot.destroy();
              //}

              var collision = newShot2.getComponent(Collider2D);

              if (collision) {
                collision.on(Contact2DType.BEGIN_CONTACT, function (selfCollider, otherCollider, colType) {
                  if (otherCollider.tag == 2) {
                    try {
                      newShot2.destroy();
                    } catch (e) {}
                  }
                }, this);
              }
            }, 0.5, 0);
            var newShot = instantiate(this.bullet);
            newShot.setPosition(this.node.getChildByName('player').position.x, this.node.getChildByName('player').position.y, 0);
            this.node.addChild(newShot);
            tween(newShot).to(5, {
              position: new Vec3(newShot.position.x, 400, 0)
            }).start(); //if (newShot.position.y > 250) {
            //    newShot.destroy();
            //}

            var collision = newShot.getComponent(Collider2D);

            if (collision) {
              collision.on(Contact2DType.BEGIN_CONTACT, function (selfCollider, otherCollider, colType) {
                if (otherCollider.tag == 2) {
                  try {
                    newShot.destroy();
                  } catch (e) {}
                }
              }, this);
            }
          }
        }

        onTouch(selfCollider, otherCollider, colType) {}

        onLoad() {
          systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.shoot, this);
          this.lifec.string = 'Lives Remaining: ' + this.lifeCount.toString(); //if (this.lifeCount == 0) {
          //    director.loadScene('GameOver');
          //}
        }

        start() {}

        update(deltaTime) {
          if (this.curScore == 1200) {
            director.loadScene('YouWin');
          }

          if (this.lifeCount <= 0) {
            director.loadScene('GameOver');
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullet", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "score", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lifec", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
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
//# sourceMappingURL=game.js.map