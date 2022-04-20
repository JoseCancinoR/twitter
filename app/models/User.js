class User {
    constructor(id, username, name, bio) {
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        this.dateCreation = new Date()
        this.lastUpdate = new Date()
    }

    get getUsername() {
        return this.username
    }

    get getBio() {
        return this.bio
    }

    get getDateCreation() {
        return this.dateCreation
    }

    get getLastUpdate() {
        return this.lastUpdate
    }

    set setUsername(newUsername) {
        this.username = newUsername
    }

    set setBio(newBio) {
        this.bio = newBio
    }
}

module.exports = User