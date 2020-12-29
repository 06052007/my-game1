class Form{
    constructor(){
        this.title = createElement('h3')
        this.input = createInput('name')
        this.button = createButton('play')
    }
    display(){
        this.title.html("car racing game")
        this.title.position(displayWidth/2-60, 50)
        this.input.position(displayWidth/2-20, displayHeight/2-50)
        this.button.position(displayWidth/2, displayHeight/2)
    }
}