//parent class
abstract class Employee {
    protected name: string = "";
    protected id: number = 0;
    protected age: number = 0;
    protected image: string = "";
    //   abstract protected employeeType: string;

    constructor(name: string, id: number, age: number, image: string) {
        this.name = name;
        this.id = id;
        this.age = age;
        this.image = image;
    }
    
    displayInfo(): void {
        console.log(`Name: ${this.name}, ID: ${this.id}, Age: ${this.age}`, `Image: ${this.image}`);
    }

    abstract calculateSalary(): void;

}

class FulltimeEmployee extends Employee {
    salary: number = 0;
    // employeeType: string = "Fulltime";

    constructor(name: string, id: number, age: number, image: string, salary: number) {
        super(name, id, age, image);
        this.salary = salary;
    }

    displayInfo(): void {
        super.displayInfo();
        console.log(`Salary: ${this.salary}`);
    }

    calculateSalary(): void {
        console.log(`Salary: ${this.salary}`);
    }
}


class FreelancerEmployee extends Employee {
    hourlyRate: number = 0;
    hoursWorked: number = 0;

    constructor(name: string, id: number, age: number, image: string, hourlyRate: number = 0, hoursWorked: number = 0) {
        super(name, id, age, image);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    displayInfo(): void {
        super.displayInfo();
        console.log(`Hourly Rate: ${this.hourlyRate}, Hours Worked: ${this.hoursWorked}`);
    }
    calculateSalary(): void {
        let salary = this.hourlyRate * this.hoursWorked;
        console.log(`Salary: ${salary}`);
    }
}

let fulltimeEmployee = new FulltimeEmployee("John Doe", 1, 30, "image1.jpg", 20000);
fulltimeEmployee.displayInfo();

let freelancerEmployee = new FreelancerEmployee("Jane Smith", 2, 25, "image2.jpg", 50, 100);
freelancerEmployee.displayInfo();


//let emp = new Employee("Alice Johnson", 3, 28, "image3.jpg"); // This line will cause an error because Employee is abstract and cannot be instantiated


freelancerEmployee.calculateSalary();
fulltimeEmployee.calculateSalary();