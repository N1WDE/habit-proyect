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
  console.error(error);
  res.status(500).json({ error: error.message });
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

router.put("/habits/:id/done", async (req, res) => {
  try {
    const habit = await Habit.findById(req.params.id);

    const today = new Date();
    const last = habit.lastCompleted;

    if (last) {
      const diff = Math.floor(
        (today - new Date(last)) / (1000 * 60 * 60 * 24)
      );

      if (diff === 1) {
        habit.streak += 1;
      } 
      else if (diff > 1) {
        habit.streak = 1;
      }
    } 
    else {
      habit.streak = 1;
    }

    habit.lastCompleted = today;

    await habit.save();

    res.json(habit);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
