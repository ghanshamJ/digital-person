import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"],
})
export class HomeComponent implements OnInit {
  @ViewChild("myCanvas")
  myCanvas: ElementRef<HTMLCanvasElement>;
  width: number;
  height: number;
  ctx: CanvasRenderingContext2D;
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.ctx = this.setupCanvas(this.myCanvas.nativeElement);
    this.height = this.myCanvas.nativeElement.height;
    this.width = this.myCanvas.nativeElement.width;
    const balls = [];
    for (let i = 0; i < 1500; i++) {
      balls.push(
        new Ball(
          getRandomNum(0, this.width),
          getRandomNum(0, this.width),
          getRandomNum(2, 15),
          getColor().hoverColor,
          this.ctx,
          this.width,
          this.height
        )
      );
    }
    const anim = setInterval(() => {
      this.animation(balls);
    }, 100);
  }
  animation(balls: any[]) {
    this.ctx.clearRect(0, 0, this.width, this.height);
    balls.forEach((ball) => {
      ball.drawBall();
    });
  }
  setupCanvas(canvas) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    const ctx = canvas.getContext("2d");
    ctx.scale(dpr, dpr);
    return ctx;
  }
}
function getRandomNum(min, max) {
  return Math.random() * (max - min) + min;
}
function getColor() {
  let r = getRandomNum(0, 255);
  let g = getRandomNum(0, 255);
  let b = getRandomNum(0, 255);
  return {
    backColor: `rgba(${r},${g},${b},1.5)`,
    hoverColor: `rgba(${r},${g},${b},3)`,
  };
}
function Ball(x, y, radius, color, context, width, height) {
  this.x = x;
  this.y = y;
  this.dx = getRandomNum(1, 10);
  this.dy = -1 * getRandomNum(1, 20);
  this.radius = radius;
  this.color = color;
  this.context = context;
  this.width = width;
  this.height = height;
  this.drawBall = function () {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.context.fill();
    this.context.closePath();
    if (
      this.x + this.dx > this.width - this.radius ||
      this.x + this.dx < this.radius
    ) {
      this.dx = -this.dx;
    }
    if (this.y + this.dy < this.radius) {
      this.dy = -this.dy;
    } else if (this.y + this.dy > this.height - this.radius) {
      if (this.x > 0 && this.x < 0 + this.width) {
        this.dy = -this.dy;
      }
    }
    this.x += this.dx;
    this.y += this.dy;
  };
}
