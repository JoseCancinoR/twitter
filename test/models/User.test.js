const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test('Add getters', () => {
        const user = new User(1, "JoseCancinoR", "Jose", "Bio")
        expect(user.getUsername).toBe("JoseCancinoR")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreation).not.toBeUndefined()
        expect(user.getLastUpdate).not.toBeUndefined()
    });
})