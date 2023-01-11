import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Historia");
    }

    async getHtml() {
        return `
            
            <h1 class="tt">Sobre Iroman</h1>
            <br>
            <p class="tt" >
            Iron Man (conocido en español como el Hombre de Hierro) es un superhéroe que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue cocreado por el escritor y editor Stan Lee y el guionista Larry Lieber. Los artistas Don Heck y Jack Kirby fueron los encargados de su diseño.
            Este superhéroe hizo su primera aparición en Tales of Suspense 39 en Marzo de 1963 y recibió su propio título en Iron Man #1, en Mayo de 1968.
            Anthony Edward "Tony" Stark es un personaje ficticio que da vida a este personaje, un multimillonario magnate empresarial y filántropo estadounidense, playboy e ingenioso científico, que sufrió una grave lesión en el pecho durante un secuestro en el Medio Oriente. Cuando sus captores intentan forzarlo a construir un arma de destrucción masiva, elabora, en cambio, una armadura para salvar su vida y escapar del cautiverio. Más tarde, Stark desarrolla su traje, agregando armas y otros dispositivos tecnológicos que diseña a través de su compañía, Industrias Stark. Él usa el traje y las versiones sucesivas para proteger al mundo como Iron Man. Aunque al principio ocultó su verdadera identidad, Stark finalmente declaró quién era en un anuncio público.            
            </p>
            <div align="center">
            <img src="/static/js/views/images/perfil.jpg" alt="">
            </div>
        `;
    }
}