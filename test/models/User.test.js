const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test('Create an User object', () => {
        const user = new User(1, "JoseCancinoR", "Jose", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("JoseCancinoR")
        expect(user.name).toBe("Jose")
        expect(user.bio).toBe("Bio")
        expect(user.dataCreation).not.toBeUndefined()
        expect(user.lastUpdate).not.toBeUndefined()
    })
})