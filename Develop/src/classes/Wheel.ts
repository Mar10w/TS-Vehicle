// Wheel class that defines the properties of a wheel
class Wheel {
  // Declare properties of the Wheel class using private access modifier
  private diameter: number;
  private Brand: string;

  // Constructor for the Wheel class
  constructor(diameter: number = 18, tireBrand: string = "GoodYear") {
    this.diameter = diameter;
    this.Brand = tireBrand;
  }

  // Getter methods for the properties of the Wheel class
  get getDiameter(): number {
    return this.diameter;
  }

  // Setter method for the diameter property
  get getTireBrand(): string {
    return this.Brand;
  }
}

// Export the Wheel class
export default Wheel;
