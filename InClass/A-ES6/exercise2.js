class Polygon {
  constructor(name, height, width) {
    this.name = name;
    this.height = height;
    this.width = width;
    }
  get area() {return this.width * this.height;}
  
  sayName() {
    console.log('Hi, I am a ' + this.name);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log(`The area of this polygon is ${p.area}`);


class Rectangle extends Polygon {
  constructor(height, width) {
    super("Rectangle",height, width);
    this.sides = 4;
    //this.area = this.height * this.width;
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log(`Hi I am a polygon and my name is ${this.name}.`);
  }
}

let r = new Rectangle(50, 60);
r.sayName();
//r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas


class Triangle extends Polygon {
  constructor(l3,l2,l1) {
    super("Triangle",undefined, undefined);
    this.l1=l1;
    this.l2=l2;
    this.l3=l3;
  }
  get area() {return this.l1 * this.l2 * this.l3;}
  sayName() {
    console.log(`Hi I am a polygon and my name is ${this.name}.`);
  }
}

let t = new Triangle(50, 60, 20);
t.sayName();

console.log('The area of this polygon is ' + t.area);
class Circle extends Polygon {
  constructor(radius){
  super("Circle",undefined, undefined) 
    this.radius = radius;
    this.pi = 3.14;
    //this.area = this.height * this.width;
  }
  get area() {return this.pi * this.radius * this.radius}
  sayName() {
    console.log(`Hi I am a polygon and my name is ${this.name}.`);
  }
}

let c = new Circle(10);
c.sayName();
console.log('The area of this polygon is ' + c.area);