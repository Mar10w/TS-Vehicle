// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private brand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, brand: string = "GoodYear") {
    this.diameter = diameter;
    this.brand = brand;
  }

  // Getter methods for the properties of the Wheel class
  getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
  getTireBrand(): string {
    return this.brand;
  }
}

// Export the Wheel class
export default Wheel;
