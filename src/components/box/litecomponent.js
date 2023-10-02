class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = "<p>Hello, World!</p>";
  }
}

customElements.define("my-component", MyComponent);
