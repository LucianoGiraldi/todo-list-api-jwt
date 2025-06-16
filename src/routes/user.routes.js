const express = require('express');
const router = express.Router();
const { getAllUsers, deleteUser, updateOwnUser } = require('../controllers/user.controller');

router.get('/', getAllUsers);
router.delete('/:id', deleteUser);
router.put('/me', updateOwnUser);

module.exports = router;