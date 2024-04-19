const { getRequest, getSingleRequest, updateSingleRequest, getAllRequests } = require("../controllers/requests");
const Router = require("express").Router();
Router.post("/", getRequest);
Router.get("/", getAllRequests);
Router.get("/:id", getSingleRequest);
Router.put("/:id", updateSingleRequest);



module.exports = Router;
