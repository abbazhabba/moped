export class AimView {
    private block:HTMLElement
    constructor(private correctionX:number=0, private correctionY:number=0){
        this.block=<HTMLElement>document.getElementById('aim')
    }
    moveTo(x: number, y: number) {
        this.block.style.left = (this.correctionX+x) + 'px'
        this.block.style.top = (this.correctionY+y) + 'px'
    }
}
