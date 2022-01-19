
import { _decorator, Component, Node, Prefab, systemEvent, SystemEvent, EventKeyboard, Collider2D, Contact2DType, IPhysics2DContact, instantiate, Vec3, tween, Label, director } from 'cc';
const { ccclass, property } = _decorator;
import { enemy } from './enemy';
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
 
@ccclass('game')
export class game extends Component {
    @property(Prefab)
    bullet: Prefab = null;

    @property(Label)
    score: Label = null;

    @property(Label)
    lifec: Label = null;

    curScore: number = 0;
    lifeCount: number = 3;
    empt: Vec3 = new Vec3(0, 0, 0);

    addScore() {
        this.curScore += 100;
        this.score.string = 'Score: ' + this.curScore.toString();
    }

    minusLife() {
        this.lifeCount = this.lifeCount- 1;
        this.lifec.string = 'Lives Remaining: ' + this.lifeCount.toString();
    }

    shoot(event: EventKeyboard) {
        if (event.keyCode == 32) {
            this.schedule(function () {
                var newShot2 = instantiate(this.bullet);
                newShot2.setPosition(this.node.getChildByName('player').position.x, this.node.getChildByName('player').position.y, 0);
                this.node.addChild(newShot2);

                tween(newShot2)
                    .to(5, { position: new Vec3(newShot2.position.x, 400, 0) })
                    .start();
                //if (newShot.position.y > 250) {
                //    newShot.destroy();
                //}
                var collision = newShot2.getComponent(Collider2D);
                if (collision) {
                    collision.on(Contact2DType.BEGIN_CONTACT, function (selfCollider: Collider2D, otherCollider: Collider2D, colType: IPhysics2DContact) {
                        if (otherCollider.tag == 2) {
                            try {
                                newShot2.destroy();
                            }
                            catch (e) { }
                        }
                    }
                        , this);
                }
            }, 0.5, 0);
            var newShot = instantiate(this.bullet);
            newShot.setPosition(this.node.getChildByName('player').position.x, this.node.getChildByName('player').position.y, 0);
            this.node.addChild(newShot);

            tween(newShot)
                .to(5, { position: new Vec3(newShot.position.x, 400, 0) })
                .start();
                
            //if (newShot.position.y > 250) {
            //    newShot.destroy();
            //}
            var collision = newShot.getComponent(Collider2D);
            if (collision) {
                collision.on(Contact2DType.BEGIN_CONTACT, function (selfCollider: Collider2D, otherCollider: Collider2D, colType: IPhysics2DContact) {
                    if (otherCollider.tag == 2) {
                        try {
                            newShot.destroy();
                        }
                        catch (e) { }
                    }
                }
                , this);
            }
            
        }
    }

    onTouch(selfCollider: Collider2D, otherCollider: Collider2D, colType: IPhysics2DContact) {
        
    }

    onLoad() {
        systemEvent.on(SystemEvent.EventType.KEY_DOWN, this.shoot, this);
        this.lifec.string = 'Lives Remaining: ' + this.lifeCount.toString();
        //if (this.lifeCount == 0) {
        //    director.loadScene('GameOver');
        //}
        
    }

    start () {
        
    }

    update(deltaTime: number) {
        if (this.curScore == 1200) {
            director.loadScene('YouWin');
        }
        if (this.lifeCount <= 0) {
            director.loadScene('GameOver');
        }
        
    }
}

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
