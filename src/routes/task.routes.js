const express = require('express');
const router = express.Router();
const { createTask, getTasks, updateStatus } = require('../controllers/task.controller');

router.post('/', createTask);
router.get('/', getTasks);
router.patch('/:id', updateStatus);

module.exports = router;