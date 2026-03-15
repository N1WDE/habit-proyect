var express = require('express');
var router = express.Router();
const Habit = require('../models/Habit');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/habits', async (req, res) => {
  try {
  const habits = await Habit.find();
  res.json(habits);
  } catch (error) {
  console.error(error);
  res.status(500).json({ error: error.message });
}
});

router.post('/habits', async (req, res) => {
  try {
  const { title, description } = req.body;
  const newHabit = new Habit({ title, description });
  await newHabit.save();
  res.status(201).json(newHabit);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el hábito' });
  }
});

router.delete('/habits/:id', async (req, res) => {
  try {
  const { id } = req.params;
  await Habit.findByIdAndDelete(id);
  res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el hábito' });
  }
});
module.exports = router;
