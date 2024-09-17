const { Pilot } = require('../models');

// Crear un piloto
const createPilot = async (req, res) => {
  try {
    const pilot = await Pilot.create(req.body);
    res.status(201).json(pilot);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los pilotos
const getAllPilots = async (req, res) => {
  try {
    const pilots = await Pilot.findAll();
    res.status(200).json(pilots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un piloto por ID
const getPilotById = async (req, res) => {
  try {
    const pilot = await Pilot.findByPk(req.params.id);
    if (pilot) {
      res.status(200).json(pilot);
    } else {
      res.status(404).json({ error: 'Pilot not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un piloto
const updatePilot = async (req, res) => {
  try {
    const [updated] = await Pilot.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPilot = await Pilot.findByPk(req.params.id);
      res.status(200).json(updatedPilot);
    } else {
      res.status(404).json({ error: 'Pilot not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un piloto
const deletePilot = async (req, res) => {
  try {
    const deleted = await Pilot.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Pilot not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPilot,
  getAllPilots,
  getPilotById,
  updatePilot,
  deletePilot
};
