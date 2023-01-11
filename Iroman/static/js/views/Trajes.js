import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Trajes");
    }

    async getHtml() {
        return `
            <br><br>
            <div class="card-group" >
  <div class="card">
    <img src="/static/js/views/images/iro.jpg" class="card-img-top" alt="..." height="400">
    <div class="card-body">
      <h5 class="card-title">Armadura Mark I</h5>
      <p class="card-text">La Armadura Mark I fue el primer traje de Iron Man de Anthony Stark, construido para escapar de su cautiverio encabezado por los Diez Anillos. Fue diseñado a partir de recursos limitados en una cueva, incluidas piezas de chatarra y piezas de maquinaria recuperadas.</p>
    </div>
  </div>

  <div class="card">
    <img src="/static/js/views/images/iro2.jpg" class="card-img-top" alt="..." height="400">
    <div class="card-body">
      <h5 class="card-title">Armadura modelo Mark III</h5>
      <p class="card-text">La Armadura Mark III fue el tercer traje de Iron Man de Anthony Stark, y una actualización de la Mark II, con unas mejoras a sus defectos anteriores. Fue el primer traje en integrarle un sistema de armas avanzadas, y el primero en adoptar los colores rojo y dorado.</p>
    </div>
  </div>

  <div class="card">
    <img src="/static/js/views/images/iro3.jpg" class="card-img-top" alt="..." height="400">
    <div class="card-body">
      <h5 class="card-title">Armadura Mark VI</h5>
      <p class="card-text">La Armadura Mark VI fue el sexto traje de Iron Man de Anthony Stark, y fue el reemplazo de la Mark IV luego de que Stark mejorara su nuevo Reactor Arc gracias a un nuevo elemento con una producción de energía más alta. También es la primera armadura con un triángulo invertido en el pecho.</p>
    </div>
  </div>

  <div class="card">
    <img src="/static/js/views/images/iro4.jpg" class="card-img-top" alt="..." height="400">
    <div class="card-body">
      <h5 class="card-title">Armadura Hulkbuster</h5>
      <p class="card-text">La armadura Hulkbuster no era en realidad una armadura, sino un complemento de la Mark VIII (o armadura modular), un exoesqueleto diseñado para resistir un hipotético mano a mano contra Hulk.</p>
    </div>
  </div>

  <div class="card">
    <img src="/static/js/views/images/iro5.jpg" class="card-img-top" alt="..." height="400">
    <div class="card-body">
      <h5 class="card-title">Armadura Modelo Mark 85</h5>
      <p class="card-text">La Armadura Mark LXXXV es el octogésimo-quinto traje de Iron Man de Anthony Stark. Fue construido después del Chasquido de Thanos como una actualización del Mark L y fue utilizado desde el Atraco al Tiempo hasta la Batalla de la Tierra.</p>
    </div>
  </div>
</div>
          
        `;
    }
}