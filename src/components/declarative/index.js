const range = (min, max) => (min - max) * Math.random() + max;

class Particle {
  constructor(x, y, canvas) {
    this.setPhysics();
    this.setDimensions();
    this.setGraphics();
    this.x = x;
    this.y = y;
    this.canvas = canvas;
  }

  applyForces() {
    this.velocity.x -= this.velocity.x * (this.DRAG * this.velocity.y * 0.2);
    this.velocity.x +=
      (Math.random() > 0.5 ? Math.random() : -Math.random()) / 4;
    this.velocity.y = Math.min(
      this.velocity.y + this.GRAVITY,
      this.TERMINAL_VELOCITY
    );
  }

  applyFade() {
    this.opacity -= 0.01;
    context.fillStyle = `rgba(${this.color.join(",")}, ${this.opacity})`;
  }

  setPhysics() {
    this.COLORS = [
      [85, 71, 106],
      [174, 61, 99],
      [219, 56, 83],
      [244, 92, 68],
      [248, 182, 70],
    ];
    this.DRAG = range(0.01, 0.05);
    this.GRAVITY = 0.3;
    this.TERMINAL_VELOCITY = range(1, 3);
    this.velocity = {
      x: 0,
      y: -5,
    };
  }

  setDimensions() {
    this.dimensions = {
      w: range(7, 10),
      h: range(7, 10),
    };
    this.scale = {
      x: 1,
      y: 1,
    };
    this.rotation = Math.random() * Math.PI;
  }

  setPosition() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  setGraphics() {
    this.color = this.COLORS[~~range(1, 5)];
    this.opacity = 1;
  }

  loop() {
    if (this.x > this.canvas.width) {
      this.x = 0;
    } else if (this.x < 0) {
      this.x = this.canvas.width;
    }
  }

  spin() {
    this.scale.y = Math.cos(this.y * 0.1);
  }

  draw(context) {
    const width = this.dimensions.w * this.scale.x;
    const height = this.dimensions.h * this.scale.y;
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    this.applyForces();
    this.setPosition();
    this.loop();
    this.spin();
    this.opacity -= 0.01;
    context.fillStyle = `rgba(${this.color.join(",")}, ${this.opacity})`;
    context.fillRect(width / 2, height / 2, width, height);
    context.setTransform(1, 0, 0, 1, 0, 0);
  }
}

class ConfettiButton extends HTMLElement {
  constructor() {
    super();
    this.MIN_COUNT = 10;
    this.MAX_COUNT = this.MIN_COUNT + range(-10, 5);
    this.attachListeners();
    this.isRunning = false;
    this.initializeParticles();
    this.prepareAnimation();
    this.startX = 0;
    this.startY = 0;
    this.isDisabled = this.hasAttribute("disabled");
  }

  connectedCallback() {
    this.canvas = this.shadowRoot.querySelector("canvas");
    this.context = this.canvas.getContext("2d");
    this.canvas.height = 500;
  }

  attachListeners() {
    this.addEventListener("click", (e) => {
      const rect = e.target.getBoundingClientRect();
      const buttonCenter = [rect.width / 2, rect.height / 2];
      const canvasCenter = [this.canvas.width / 2, this.canvas.height / 2];
      this.startX = e.clientX - rect.left - buttonCenter[0] + canvasCenter[0]; //x position within the element.
      this.startY = e.clientY - rect.top - buttonCenter[1] + canvasCenter[1]; //y position within the element.
      if (e.clientX - rect.left < 0) {
        // if is a click other than mouseclick
        this.startX = canvasCenter[0];
        this.startY = canvasCenter[1] - buttonCenter[1];
      }
      if (!this.isRunning && !this.isDisabled) {
        this.dropConfetti();
        this.isRunning = true;
      } else {
        this.MAX_COUNT += this.MIN_COUNT + range(-9, 5);
      }
    });
  }

  initializeParticles() {
    this.particles = [];
  }

  prepareAnimation() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.count = 0;
    this.rafId = null;
  }

  draw(self) {
    self.context.clearRect(0, 0, self.canvas.width, self.canvas.height);
    if (self.count < self.MAX_COUNT) {
      self.particles.push(new Particle(self.startX, self.startY, self.canvas));
      self.count += 1;
    }
    self.particles.forEach((particle) => {
      particle.draw(self.context);
      if (particle.y > self.canvas.height) {
        self.particles.splice(self.particles.indexOf(particle), 1);
        if (self.particles.length === 0) {
          cancelAnimationFrame(self.rafId);
          self.isRunning = false;
        }
      }
    });
    if (self.isRunning) {
      self.rafId = requestAnimationFrame(() => self.draw(self));
    }
  }

  dropConfetti() {
    this.rafId = requestAnimationFrame(() => {
      this.draw(this);
    });
  }
}

if (customElements.get("confetti-button") === undefined)
  customElements.define("confetti-button", ConfettiButton);
