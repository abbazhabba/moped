export interface I_MopedConstructorParams {
    position: I_position_moving;
}

/**
 * Angle in degrees 0-North, 90-East, 180-South, 270-West
 */
type T_Direction=number
/**
 * Speed in m/s
 */
type T_Speed=number
/**
 * time of animation in seconds from the start
 */
export type I_Time=number
export interface I_position_moving {
    x: number
    y: number
    z: number
    direction: T_Direction
    speed: T_Speed
}
