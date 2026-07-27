//parent class 
class Employee {
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

}
