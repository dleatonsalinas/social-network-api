const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  deleteUser,
  addThought,
  deleteThought,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/user/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser);

// /api/user/:userId/thoughts
router.route('/:userId/thoughts').post(addThought);

// /api/suser/:userId/thoughts/:thoughtId
router.route('/:userId/thoughts/:thoughtId').delete(deleteThought);

module.exports = router;
