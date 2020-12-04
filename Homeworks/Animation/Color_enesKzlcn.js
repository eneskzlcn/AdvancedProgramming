class Color_enesKzlcn extends Animator  {
    constructor() {
        super();
        this.author = 'M A Eyler'
        this.desc = 'Smooth color change'
        let b = ["red", "magenta", "yellow", "blue"]
        this.anim = { background: b }
        this.elt = document.createElement('div')    
        this.elt.style = "width: 100px; height:100px;"
        this.time = 3000
    }
    update() { }  //no code is needed here
}