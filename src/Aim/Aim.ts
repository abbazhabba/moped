import {AimView} from "./AimView";

export class Aim {
    x: number
    y: number
    view: AimView
    constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.view = new AimView()
    }
    moveTo(x: number, y: number) {
        this.view.moveTo(x,y)
    }
    shoot() {

    }
}
