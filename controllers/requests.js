const Request = require("../models/request");
const { Types } = require('mongoose');
exports.getAllRequests = async(req, res)=>{
    try {
        const requests = await Request.find({}).select('name phone service prefferedDate prefferedTime status');
        return res.json({"data":requests});
    } catch (error) {
        console.log("err", error)
        res.status(500).json({"error":"An error has occured"})
    }
}

exports.getRequest = async(req, res) =>{
   // const {name, phone, service, prefferedDate, prefferedTime} = req.body;
    try {
        //return res.json(req.body);
        const saloonModel  = new Request(req.body); 
        const response = await saloonModel.save()
        return res.status(200).json({
            success:"True",
            data:response
        });
    } catch (error) {
        console.log("errrr", error)
        return res.status(500).json({sucess:"False", msg:"An error has occured"})
    }

}

exports.getSingleRequest = async(req, res) =>{
     try {
         //return res.json(req.body);
         const id = req.params.id;
         const findRequest = await Request.findById(id);
         if (findRequest)  return res.status(200).json(findRequest);
         return res.status(400).json({"msg":"Request not found"})
     } catch (error) {
        if(error == error.CastError)
        console.log("error====", error)
        return res.status(404).json({"data":"Data not Found"})
         }
        }

exports.updateSingleRequest = async (req, res) => {
    const id = req.params.id;
    try {
        const findRequest = await Request.findById(id);
        if (findRequest) {
            const updated = await Request.findByIdAndUpdate(findRequest, req.body)
            return res.status(200).json({ "data": updated });
        } else {
            return res.status(404).json({ "data": "Not Found" });
        }
    } catch (error) {
        console.log("error", error);
        if (error instanceof Types.ObjectId) {
            return res.status(404).json({ "msg": "Invalid ID format" });
        } else {
            return res.status(500).json({ "msg": "Internal Server Error" });
        }
    }
};