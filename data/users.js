const randomstring = require('randomstring')

const userId = 'jel3guSHzF72HUDIpPb4wv4dKT6cvIlf'
const adminEmail = 'admin@abv.bg'
const adminUserObj = {id: userId, email: adminEmail, password: 'admin', name: 'Admin', isAdmin: true}
const usersById = {[userId]: adminUserObj}
const usersByEmail = {[adminEmail]: adminUserObj}

module.exports = {
  save: (user) => {
    const id = randomstring.generate()
    user.id = id
    user.isAdmin = false

    usersById[id] = user
    usersByEmail[user.email] = user
    console.log('User registered: ' + user.name)
  },
  findByEmail: (email) => {
    return usersByEmail[email]
  },
  findById: (id) => {
    return usersById[id]
  },
  isAdmin: (user) => {
    return user.isAdmin;
  },
  getAllById: () => {
    return usersById
  },
  getAllByEmail: () => {
    return usersByEmail
  },
  deleteUser: (id) => {
    const user = usersById[id]
    if (!user) {
      return false;
    }
    delete usersById[user.id]
    delete usersByEmail[user.email]
    return true
  }
}
