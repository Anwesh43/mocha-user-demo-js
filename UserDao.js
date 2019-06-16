const User = require('./User')
const userStore = require('./UserStore')

class UserDao {

    addUser(name, age) {
        userStore.addUser(new User(name, age))
    }

    getUserById(id) {
        return userStore.getUserById(id)
    }

    getUsersByName(name) {
        return userStore.getUsersByName(name)
    }

    getUsers() {
        return userStore.getUsers()
    }

    removeAllUsers() {
        return userStore.removeAll()
    }
}

module.exports = new UserDao()
