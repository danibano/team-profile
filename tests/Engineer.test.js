const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("constructor", () => {
        it("should return an Engineer object with a new key of github", () => {
            const objValue = "github"
            const engine = new Engineer("Name", 1, "email", objValue)
            expect(engine.gitHub).toBe(objValue)
        })
    })

    describe("getGitHub", () => {
        it("should get the engineer's github username", () => {
            const objValue = "github username"
            const engine = new Engineer("Name", 1, "email", objValue)
            expect(engine.getGitHub()).toBe(objValue)
        })
    })

    describe("getRole", () => {
        it("should return Engineer for their role", () => {
            const objValue = "Engineer"
            const engine = new Engineer("Name", 1, "email", "github")
            expect(engine.getRole()).toBe(objValue)
        })
    })
})