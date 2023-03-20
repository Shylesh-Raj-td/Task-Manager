const express = require('express');
const router = express.Router();
const {getAlltasks,createtask,gettask,updatetask,deletetask} = require('../controllers/tasks');

router.route('/').get(getAlltasks)
router.route('/').post(createtask)
router.route('/:id').get(gettask).patch(updatetask).delete(deletetask)

module.exports = router;