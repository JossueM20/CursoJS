import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Habilidades");
    }
}

let sound = new Audio('./static/js/views/images/iroman.mp3');

playBtn.addEventListener('click', ()=>{
    sound.play();
});

pauseBtn.addEventListener('click', () =>{
    sound.pause();
});


