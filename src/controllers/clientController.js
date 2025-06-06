const clientService = require("../services/clientService");

function create(req, res) {
  try {
    const client = clientService.create(req.body);
    return res.status(201).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao criar Cliente" });
  }
}

function findAll(req, res) {
  try {
    const clients = clientService.findAll();
    return res.status(200).json(clients);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Clientes" });
  }
}

function findById(req, res) {
  try {
    const { id } = req.params;
    const client = clientService.findById(id);
    return res.status(200).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Cliente" });
  }
}

function findByName(req, res) {
  try {
    const { name } = req.params;
    const client = clientService.findByName(name);
    return res.status(200).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar Cliente" });
  }
}

function update(req, res) {
  try {
    const { id } = req.params;
    const client = clientService.update(id, req.body);
    return res.status(200).json(client);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao atualizar Cliente" });
  }
}

function destroy(req, res) {
  try {
    const { id } = req.params;
    clientService.destroy(id);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao deletar Cliente" });
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
