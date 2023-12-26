const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent);
router.put('/:studentId/assign-mentor', studentController.assignMentor);

// Add other student routes

module.exports = router;
