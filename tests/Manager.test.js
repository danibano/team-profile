const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("constructor", () => {
        it("should return a Manager object with a new key of officeNum", () => {
            const objValue = "officeNum"
            const boss = new Manager("Name", 1, "email", objValue)
            expect(boss.officeNum).toBe(objValue)
        })
    })

    describe("getOfficeNum", () => {
        it("should get the manager's office number", () => {
            const objValue = "office number"
            const boss = new Manager("Name", 1, "email", objValue)
            expect(boss.getOfficeNum()).toBe(objValue)
        })
    })

    describe("getRole", () => {
        it("should return Manager for their role", () => {
            const objValue = "Manager"
            const boss = new Manager("Name", 1, "email", "officeNum")
            expect(boss.getRole()).toBe(objValue)
        })
    })
})