class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Orta Domínguez Tristán Eduardo
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
