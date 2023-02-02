const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("constructor", () => {
        it("should return an Intern object with a new key of school", () => {
            const objValue = "school"
            const int = new Intern("Name", 1, "email", objValue)
            expect(int.school).toBe(objValue)
        })
    })

    describe("getSchool", () => {
        it("should get the intern's school", () => {
            const objValue = "school"
            const int = new Intern("Name", 1, "email", objValue)
            expect(int.getSchool()).toBe(objValue)
        })
    })

    describe("getRole", () => {
        it("should return Intern for their role", () => {
            const objValue = "Intern"
            const int = new Intern("Name", 1, "email", "school")
            expect(int.getRole()).toBe(objValue)
        })
    })
})