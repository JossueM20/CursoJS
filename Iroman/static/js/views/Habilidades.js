import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Habilidades");
    }

    async getHtml() {
        return `
            <h1 class="tt">Todos los poderes de Iroman</h1>
            <p class="tt">Tony Stark es un genio inventivo cuya experiencia en los campos de las matemáticas, la física, la química y la informática compite con la de Reed Richards, Hank Pym y Bruce Banner, y su experiencia en ingeniería eléctrica e ingeniería mecánica supera a la de ellos. Es considerado como uno de los personajes más inteligentes del Universo Marvel. Se graduó con títulos avanzados en física e ingeniería a la edad de 17 años en el Instituto de Tecnología de Massachusetts (MIT)101​ y desarrolló más sus conocimientos que van desde la Inteligencia artificial a la mecánica cuántica a medida que avanzaba el tiempo. Su experiencia se extiende a su ingenio para enfrentar situaciones difíciles, como enemigos difíciles y trampas mortales, en las que es capaz de usar las herramientas disponibles, incluido su traje, de manera poco ortodoxa pero efectiva. Es muy respetado en el mundo de los negocios, capaz de captar la atención de la gente cuando habla sobre asuntos económicos, y con el paso de los años ha creado varias empresas multimillonarias prácticamente sin nada. Se destaca por la lealtad que manda y devuelve a quienes trabajan para él, así como por su ética empresarial. Así, inmediatamente despidió a un empleado que hizo ventas rentables, pero ilegales, al Doctor Doom.23​ Se esfuerza por ser ambientalmente responsable en sus negocios.

            En un momento en que Stark fue incapaz de usar su armadura por un período, recibió algo de entrenamiento de combate del Capitán América y se ha vuelto formidable físicamente por su cuenta cuando la situación lo exige.102​ Además, Stark posee una gran visión para los negocios y la política. En múltiples ocasiones, retomó el control de sus compañías después de perderlas en medio de adquisiciones corporativas.103​
            
            Debido a su membresía en los Illuminati, Iron Man recibió la Gema del Infinito del Espacio para protegerla.104​ Permite al usuario existir en cualquier ubicación (o en todas las ubicaciones), mover cualquier objeto en cualquier lugar del universo y deformar o reorganizar el espacio.</p>
            <br>
            <div align="center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FCaXvW-lhP0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        `;
    }
}