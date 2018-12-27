const express = require('express');
const router = express.Router();
const punch_controller = require('../controllers/punch.controller');

// test
router.get('/test', punch_controller.test);

// get
router.get('/:id', punch_controller.punch_details);

// post
router.post('/create', punch_controller.punch_create);

// put
router.put('/:id/update', punch_controller.punch_update);

// delete
router.delete('/:id/delete', punch_controller.punch_delete);

module.exports = router;