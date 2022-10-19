import {I_MopedConstructorParams, I_position_moving, I_Time} from "../@types/types";
import {MopedView} from "./MopedView";
import {MopedHelper} from "./MopedCalculate";

export class Moped {
    position: I_position_moving
    view:MopedView

    constructor(params?: I_MopedConstructorParams) {
        this.position = MopedHelper.getNewPosition()
        this.view=new MopedView()
        this.startFlying()
    }

   private startFlying() {
        this.view.render(this.position)
    }

    flyNextStep(time: I_Time) {
       const nextPosition= MopedHelper.calculateNextPosition(this.position,time)
        this.position=nextPosition
        this.view.move(this.position)
    }

    stopFlying(explosion: boolean) {
        this.view.destroy(explosion)
    }


}
