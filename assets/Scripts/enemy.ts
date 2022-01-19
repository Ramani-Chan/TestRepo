
import { _decorator, Component, Node, tween, Tween, Vec3, ComponentModifier, CCClass, Collider2D, Contact2DType, ICollisionEvent, PolygonCollider2D, IPhysics2DContact, RigidBody2D, Label, CCLoader, Scene, director, ECollider2DType } from 'cc';
import { game } from './game';
const { ccclass, property } = _decorator;

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
 
@ccclass('enemy')
export class enemy extends Component {
    

    onTouch(selfCollider: Collider2D, otherCollider: Collider2D, colType: IPhysics2DContact) {
       
        if (otherCollider.tag == 1) {
            try {

                if (otherCollider.name == this.node.parent.getChildByName('player').getComponent(Collider2D).name) {
                    this.node.parent.getComponent(game).minusLife();
                    this.node.destroy();
                }

                else if (otherCollider.name == this.node.parent.getChildByName('bullet').getComponent(Collider2D).name){
                    this.node.parent.getComponent(game).addScore();
                    this.node.destroy();
                }
            }
            catch (e) { }
            }
        }

        //if (otherCollider.tag == 3) {

        //    try {
        //        this.node.destroy();

        //    }
        //    catch (e) { }
        //}
    
    stepDown() {

        this.schedule(function () {
            
                this.node.setPosition(this.node.position.x, this.node.position.y - 10, 0);
           
        }, 1);

            //tween(this.node).to(19, { position: new Vec3(this.node.position.x, - 250, 0) }).start();
        
    }

    onLoad() {
        
        this.stepDown();
        
    }

    start() {
        
    }

    update(deltaTime: number) {
        var collision = this.getComponent(Collider2D);
        if (collision) {
            collision.on(Contact2DType.BEGIN_CONTACT, this.onTouch, this);
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
