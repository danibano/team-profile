const Employee = require("../lib/Employee");


describe("Employee", () => {
    it(" instantiate Employee instance", () => {
        const employee = new Employee();
        expect(typeof(employee)).toBe("object");

    });


    it("should set name", () => {
        const name = "Dani";
        const employee= new Employee(name);
        expect(employee.name).toBe(name);
    });

    it("should set id", () => {
        const objValue = 1;
        const employee = new Employee("Dani", objValue);
        expect(employee.id).toBe(objValue);
    });


    it("should set email", () => {
        const objValue = "dani@gmail.com";
        const employee = new Employee("Dani", 1, objValue);
        expect(employee.email).toBe(objValue);
    });


    describe("getName", () => {
        it("should get the employee name", () => {
            const objValue = "Dani";
            const employee = new Employee(objValue);
            expect(employee.getName()).toBe(objValue);
        });
    });

    describe("getId", () => {
        it("should get employee id", () => {
            const objValue = 1;
            const employee = new Employee("Dani", objValue);
            expect(employee.getId()).toBe(objValue);
        });
    });
    
    
    describe("getEmail", () => {
        it("should get the employee email", () => {
            const objValue = "dani@gmail.com";
            const employee = new Employee("Dani", 1, objValue);
            expect(employee.getEmail()).toBe(objValue);
        });
    });
    

    describe("getRole", () => {
        it("should return the employee role", () => {
            const objValue = "Employee";
            const employee = new Employee("Dani", 1, "dani@gmail.com");
            expect(employee.getRole()).toBe(objValue);
        });
    })
});