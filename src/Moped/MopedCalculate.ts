import {I_position_moving} from "../@types/types";
export  class MopedHelper {
   static calculateNextPosition(position: I_position_moving, time: number): I_position_moving {
        const distance = position.speed * time
        const x = position.x + distance * Math.cos(position.direction)
        const y = position.y + distance * Math.sin(position.direction)
        return {x, y, z: position.z, direction: position.direction, speed: position.speed}
    }

    static getNewPosition(): I_position_moving {
        const position: I_position_moving = {
            x: 0,//Todo random
            y: 1000,//Todo random
            z: 200, //Todo random
            direction: 180, //Todo random
            speed: MopedHelper.kmhToMs(150)
        }
        return position
    }
    static kmhToMs(kmh: number): number {
        return kmh / 3.6
    }

}
