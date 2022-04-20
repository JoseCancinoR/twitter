const User = require('./../../app/models/User')

describe("Unit Tests for User class", () => {

    test('Add getters', () => {
        const user = new User(1, "JoseCancinoR", "Jose", "Bio")
        user.setUsername = "JoseCancinoR"
        expect(user.username).toBe("JoseCancinoR")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    });
})