import {Moped} from "./Moped/Moped";
import {I_position_moving} from "./@types/types";
import {World} from "./World/World";
import {Aim} from "./Aim/Aim";

export class Game {
    moped: Moped
    world: World
    aim: Aim
    /** Complexity level of the game. 1-10 */
    constructor(private level: number = 0) {
        this.world=new World()
        this.moped = new Moped();
        this.aim = new Aim(150, 150)
        this.subscribeToMouseEvents()
        this.startGame()
    }
    subscribeToMouseEvents(){
        document.addEventListener("mousemove", (event) => {
            this.aim.moveTo(event.clientX, event.clientY)
        })
        document.addEventListener("click", (event) => {
            this.aim.shoot(event.clientX, event.clientY)
        })
    }

    startGame() {
        const time = {time: 0.1}
        setInterval(() => {
            const mopedPosition: I_position_moving = this.moped.position
        }, 100)
    }

}

