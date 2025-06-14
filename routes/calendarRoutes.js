const express = require('express');
const router = express.Router();
const {
  getAllAsesorias,
  createAsesoria,
  getAsesoriaById,
  updateAsesoria,
  deleteAsesoria
} = require('../controllers/CalendarController');

router.get('/all', getAllAsesorias);
router.post('/create', createAsesoria);
router.get('/get/:id', getAsesoriaById);
router.put('/update/:id', updateAsesoria);
router.delete('/delete/:id', deleteAsesoria);

module.exports = router;
