const { getRequest } = require("../controllers/requests");
const Router = require("express").Router();
Router.post("/", getRequest);

module.exports = Router;
