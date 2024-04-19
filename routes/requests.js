const { getRequest, getSingleRequest, updateSingleRequest } = require("../controllers/requests");
const Router = require("express").Router();
Router.post("/", getRequest);
Router.get("/:id", getSingleRequest);
Router.put("/:id", updateSingleRequest);



module.exports = Router;
