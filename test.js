const userDao = require('./UserDao')
const assert = require('assert')
describe("should test userDao properly", () => {
    beforeEach((done) => {
        userDao.addUser("An1", 22)
        userDao.addUser("Bn2", 23)
        userDao.addUser("Bn3", 24)
        userDao.addUser("Cn1", 25)
        userDao.addUser("Cn3", 26)
        done()
    })

    it("size of users in store should be 5", (done) => {
        assert.equal(userDao.getUsers().length, 5)
        done()
    })

    it("first User Name should be An1", (done) => {
        assert.notEqual(userDao.getUsers(), 0)
        assert.equal(userDao.getUsers()[0].name, "An1")
        done()
    })

    afterEach((done) => {
        userDao.removeAllUsers()
        done()
    })
})
