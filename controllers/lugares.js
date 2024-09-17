const { Place } = require('../models');

// Crear un lugar
const createPlace = async (req, res) => {
  try {
    const place = await Place.create(req.body);
    res.status(201).json(place);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todos los lugares
const getAllPlaces = async (req, res) => {
  try {
    const places = await Place.findAll();
    res.status(200).json(places);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un lugar por ID
const getPlaceById = async (req, res) => {
  try {
    const place = await Place.findByPk(req.params.id);
    if (place) {
      res.status(200).json(place);
    } else {
      res.status(404).json({ error: 'Place not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar un lugar
const updatePlace = async (req, res) => {
  try {
    const [updated] = await Place.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPlace = await Place.findByPk(req.params.id);
      res.status(200).json(updatedPlace);
    } else {
      res.status(404).json({ error: 'Place not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un lugar
const deletePlace = async (req, res) => {
  try {
    const deleted = await Place.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Place not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPlace,
  getAllPlaces,
  getPlaceById,
  updatePlace,
  deletePlace
};
