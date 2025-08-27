// todo: i need to call express framwork
// todo: i need to create instance for router
// todo: and then i need to define my routers

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json('Get all workouts');
});

router.get('/:id', (req, res) => {
    res.json('Get a single workout');
});

router.post('/', (req, res) => {
    res.json('Create a new workout');
});

router.delete('/:id', (req, res) => {
    res.json('Delete a workout');
});

router.patch('/:id', (req, res) => {
    res.json('Update a workout');
});

module.exports = router;