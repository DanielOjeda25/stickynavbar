import "./style.css";
import "./navigation.js";

document.querySelector("#app").innerHTML = `
   <!-- Hero -->
  <section class="et-hero-tabs">
    <h1>STICKY SLIDER NAV</h1>
    <h3>Navegación de contenido deslizante con tabs adhesivas</h3>
    <div class="et-hero-tabs-container">
      <a class="et-hero-tab" href="#tab-es6">ES6</a>
      <a class="et-hero-tab" href="#tab-flexbox">Flexbox</a>
      <a class="et-hero-tab" href="#tab-react">React</a>
      <a class="et-hero-tab" href="#tab-angular">Angular</a>
      <a class="et-hero-tab" href="#tab-other">Otros</a>
      <span class="et-hero-tab-slider"></span>
    </div>
  </section>

  <!-- Main -->
  <main class="et-main">
    <section class="et-slide" id="tab-es6">
      <h1>ES6</h1>
      <h3>Descubre las nuevas características de ES6, como let, const y las funciones de flecha.</h3>
    </section>
    <section class="et-slide" id="tab-flexbox">
      <h1>Flexbox</h1>
      <h3>Aprende cómo usar Flexbox para diseñar interfaces responsivas y flexibles.</h3>
    </section>
    <section class="et-slide" id="tab-react">
      <h1>React</h1>
      <h3>Explora React, una biblioteca para construir interfaces de usuario interactivas y dinámicas.</h3>
    </section>
    <section class="et-slide" id="tab-angular">
      <h1>Angular</h1>
      <h3>Conoce Angular, un framework para crear aplicaciones web de una sola página.</h3>
    </section>
    <section class="et-slide" id="tab-other">
      <h1>Otros</h1>
      <h3>Un vistazo a otras herramientas y tecnologías populares en el desarrollo web.</h3>
    </section>
  </main>
`;
