const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "JoseCancinoR", "Jose")
        expect(user.username).toBe("JoseCancinoR")
        expect(user.name).toBe("Jose")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
})