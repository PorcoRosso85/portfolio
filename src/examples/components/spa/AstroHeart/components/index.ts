export class AstroHeartComponent extends HTMLElement {
  constructor() {
    super();
    let count = 0;

    const heartButton = this.querySelector("button");
    const countSpan = this.querySelector("span");

    // Each time the button is clicked, update the count.
    heartButton.addEventListener("click", () => {
      count++;
      countSpan.textContent = count.toString();
    });
  }
}
