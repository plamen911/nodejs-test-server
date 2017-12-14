const usersData = require('../data/users')

module.exports = {
  getUsers: (req, res) => {
    if (!usersData.isAdmin(req.user)) {

      console.log(req.user)

      return res.status(400).json({
        success: false,
        message: 'Access denied!',
        errors: null
      })
    }
    res.status(200).json(usersData.getAllById())
  },
  deleteUser: (req, res) => {
    if (!usersData.isAdmin(req.user)) {
      return res.status(400).json({
        success: false,
        message: 'Access denied!',
        errors: null
      })
    }
    const id = req.params.id
    if (!usersData.deleteUser(id)) {
      return res.status(400).json({
        success: false,
        message: 'User ID not found: ' + id,
        errors: {id: 'User ID not found: ' + id}
      })
    }
    console.log('User deleted.')
    res.status(200).json({
      success: true,
      message: 'User deleted successfully.',
      errors: null
    })
  },
}
