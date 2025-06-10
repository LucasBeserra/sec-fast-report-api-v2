const criterionService = require("../services/criterionService");

function create(req, res) {
  try {
    const criterion = criterionService.create(req.body);
    return res.status(201).json(criterion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar Criterio" });
  }
}

function findAll(req, res) {
  try {
    const criteria = criterionService.findAll();
    return res.status(200).json(criteria);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Criterios" });
  }
}

function findById(req, res) {
  try {
    const { id } = req.params;
    const criterion = criterionService.findById(id);
    return res.status(200).json(criterion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Criterio" });
  }
}

function findById(req, res) {
  try {
    const { id } = req.params;
    const criterion = criterionService.findById(id);
    return res.status(200).json(criterion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Criterio" });
  }
}

function findByName(req, res) {
  try {
    const { description } = req.params;
    const criterion = criterionService.findByName(description);
    return res.status(200).json(criterion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Criterio" });
  }
}

function update(req, res) {
  try {
    const { id } = req.params;
    const criterion = criterionService.update(id, req.body);
    return res.status(200).json(criterion);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar Criterio" });
  }
}

function destroy(req, res) {
  try {
    const { id } = req.params;
    criterionService.destroy(id);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar Criterio" });
  }
}

module.exports = { 
    create,
    findAll,
    findById,
    findByName,
    update,
    destroy,
};
