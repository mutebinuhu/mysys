const Request = require("../models/request");

exports.getRequest = async(req, res) =>{
   // const {name, phone, service, prefferedDate, prefferedTime} = req.body;
    try {
        //return res.json(req.body);
        const saloonModel  = new Request(req.body); 
        const response = await saloonModel.save()
        return res.status(200).json(response);
    } catch (error) {
        console.log("errrr", error)
        res.status(500).json({"msg":"An error has occured"})
    }

    return res.status(200).json({
        "data":"request sente"
    })
}