const { Product } = require("../models");

const createClient = async () => Product.create(req.body);