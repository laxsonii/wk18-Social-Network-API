// routes/api/userRoutes.js
const router = require('express').Router();
const User = require('../../models/User');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/userController');

router.route('/')
  .get(getAllUsers)
  .post(createUser);

router.route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
