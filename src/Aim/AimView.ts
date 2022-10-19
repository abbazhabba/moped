export class AimView {
    private block:HTMLElement
    constructor(){
        this.block=<HTMLElement>document.getElementById('aim')
    }
    moveTo(x: number, y: number) {
        this.block.style.left = x + 'px'
        this.block.style.top = y + 'px'
    }
}
