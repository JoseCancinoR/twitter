const UserService = require('./../../app/services/UserService')

describe("Tests for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1, "JoseCancinoR", "Jose")
        expect(user.username).toBe("JoseCancinoR")
        expect(user.name).toBe("Jose")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })
    test("2. Get all user data in a list", () => {
        const user = UserService.create(1, "JoseCancinoR", "Jose")
        const userInfoInList = UserService.getInfo(user)
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("JoseCancinoR")
        expect(userInfoInList[2]).toBe("Jose")
        expect(userInfoInList[3]).toBe("Sin bio")
    })
    test("3. Update username", () => {
        const user = UserService.create(1, "JoseCancinoR", "Jose")
        UserService.updateUserUsername(user, "JoseR")
        expect(user.username).toBe("JoseR")
    })
    test("4. Given a list of users given me the list of usernames", () => {
        const user1 = UserService.create(1, "JoseCancinoR1", "Jose")
        const user2 = UserService.create(1, "JoseCancinoR2", "Jose")
        const user3 = UserService.create(1, "JoseCancinoR3", "Jose")
        const usernames = UserService.getAllUsernames([user1, user2, user3])
        expect(usernames).toContain("JoseCancinoR1")
        expect(usernames).toContain("JoseCancinoR2")
        expect(usernames).toContain("JoseCancinoR3")
    })
})