// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import Driveable from '../interfaces/Driveable.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle implements Driveable {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  override started: boolean = false;
  override currentSpeed: number = 0;
  // TODO: Declare properties of the Motorbike class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  // TODO: Create a constructor that accepts the properties of the Motorbike class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Motorbike class
    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
  override start(): void {
    this.started = true;
    console.log(`${this.make} ${this.model} started.`);
  }
  
  override accelerate(change: number): void {
    this.currentSpeed += change;
    console.log(`${this.make} ${this.model} accelerated to ${this.currentSpeed} MPH.`);
  }
  
  override decelerate(change: number): void {
    this.currentSpeed -= change;
    console.log(`${this.make} ${this.model} decelerated to ${this.currentSpeed} MPH.`);
  }
  
  override stop(): void {
    this.currentSpeed = 0;
    this.started = false;
    console.log(`${this.make} ${this.model} stopped.`);
  }
  
  override turn(direction: string): void {
    console.log(`${this.make} ${this.model} turned ${direction}.`);
  }
  
  override reverse(): void {
    console.log(`${this.make} ${this.model} is reversing.`);
  }
  

  popWheelie(): void {
    console.log(`${this.make} ${this.model} is Popping a wheelie!`);
  } 
  // TODO: Implement the wheelie method
  // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"

  override printDetails(): void {
  super.printDetails();
  console.log(`Front Wheel: ${this.wheels[0].brand} ${this.wheels[0].diameter}"`);
  console.log(`Rear Wheel: ${this.wheels[1].brand} ${this.wheels[1].diameter}"`);
}
  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
}

// Export the Motorbike class as the default export
export default Motorbike;
