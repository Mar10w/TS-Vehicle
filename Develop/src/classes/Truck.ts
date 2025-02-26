// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import Driveable from '../interfaces/Driveable.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements Driveable, AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  override started: boolean = false;
  override currentSpeed: number = 0;
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  constructor(
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
  towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    this.towingCapacity = towingCapacity;
  }

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
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
  
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicle.make} ${vehicle.model}`);
    } else {
      console.log(`Vehicle is too heavy to be towed`);
    }
  }
  
  popWheelie(): void {
    console.log(`${this.make} ${this.model} cannot safely pop a wheelie.`);
  }

    // TODO: Get the make an model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    override printDetails(): void {
      super.printDetails();
      console.log(`VIN: ${this.vin}`);
      console.log(`Color: ${this.color}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight} lbs`);
      console.log(`Top Speed: ${this.topSpeed} mph`);
      console.log(`Towing Capacity: ${this.towingCapacity}`);
    // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter()} inch with a ${this.wheels[0].getTireBrand()} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter()} inch with a ${this.wheels[1].getTireBrand()} tire`
      );
      console.log(
        `Wheel 3: ${this.wheels[2].getDiameter()} inch with a ${this.wheels[2].getTireBrand()} tire`
      );
      console.log(
        `Wheel 4: ${this.wheels[3].getDiameter()} inch with a ${this.wheels[3].getTireBrand()} tire`
      );
    }
}
  

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels


// Export the Truck class as the default export
export default Truck;
