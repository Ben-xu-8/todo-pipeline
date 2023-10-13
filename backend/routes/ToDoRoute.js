const { Router } = require('express');
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require('../controllers/ToDoController');

const router = Router();
router.get('/', getToDo);
router.post('/api/save', saveToDo);
router.post('/api/update', updateToDo);
router.post('/api/delete', deleteToDo);

module.exports = router;
