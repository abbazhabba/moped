import {I_position_moving} from "../@types/types";

export class MopedView {
    rendered:boolean=false
    render(position: I_position_moving) {
        console.log(position)
    }
    move(position: I_position_moving) {
        console.log(position)
    }
    destroy(explosion:boolean=false){}
}
