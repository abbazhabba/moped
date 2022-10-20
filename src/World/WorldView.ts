
const DEFAULT_BG='images/Country_Fields_and_Blue_Sky_Background-196.jpeg'
export class WorldView {
  private  block :HTMLElement
    constructor({bg_picture=DEFAULT_BG}:{bg_picture?:string}) {
        this.block=<HTMLElement>document.getElementById('world')
        this.block.style.backgroundImage=`url('${bg_picture}')`
    }
}
