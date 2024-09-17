const { DataCard } = require('../models');

// Crear un dataCard
const createDataCard = async (req, res) => {
  try {
    const dataCard = await DataCard.create(req.body);
    res.status(201).json(dataCard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las tarjetas
const getAllDataCards = async (req, res) => {
  try {
    const dataCards = await DataCard.findAll();
    res.status(200).json(dataCards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una tarjeta por ID
const getDataCardById = async (req, res) => {
  try {
    const dataCard = await DataCard.findByPk(req.params.id);
    if (dataCard) {
      res.status(200).json(dataCard);
    } else {
      res.status(404).json({ error: 'DataCard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una tarjeta
const updateDataCard = async (req, res) => {
  try {
    const [updated] = await DataCard.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedDataCard = await DataCard.findByPk(req.params.id);
      res.status(200).json(updatedDataCard);
    } else {
      res.status(404).json({ error: 'DataCard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una tarjeta
const deleteDataCard = async (req, res) => {
  try {
    const deleted = await DataCard.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'DataCard not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createDataCard,
  getAllDataCards,
  getDataCardById,
  updateDataCard,
  deleteDataCard
};
