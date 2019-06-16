class UserStore {

    constructor() {
        this.users = []
    }

    addUser(user) {
        this.users.push(user)
    }

    getUsersByName(name) {
        return this.users.filter((user) => user.getName() === name)
    }

    getUserById(id) {
        const usersById = this.users.filter((user) => user.getId() === id)
        if (usersById.length == 1) {
            return usersById[0]
        }
        return null
    }

    getUsers() {
        return this.users
    }

    removeAll() {
        return this.users = []
    }
}

module.exports = new UserStore()
