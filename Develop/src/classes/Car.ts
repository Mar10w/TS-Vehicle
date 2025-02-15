// Importing Vehicle and Wheel classes
import Driveable from '../interfaces/Driveable.js';
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class
class Car extends Vehicle implements Driveable {
  // Declare properties of the Car class
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

  // Constructor for the Car class
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
    // Call the constructor of the parent class, Vehicle
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

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
    console.log(`${this.make} ${this.model} cannot safely pop a wheelie.`);
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class, Vehicle
    super.printDetails();

    // Print details of the Car class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
    console.log(
      `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
    );
    console.log(
      `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
    );
  }
}

// Export the Car class as the default export
export default Car;
