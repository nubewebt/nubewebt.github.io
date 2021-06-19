class MiProgeso
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<progress max="100">
        Espere un momento…
      </progress>`;
  }
}

customElements.define(
  "mi-progreso", MiProgeso);
