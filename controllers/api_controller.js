const studentModel =  require("../models/student_model");

const createStudent = async (request,response) =>{
   try{
    let record = await studentModel.create(request.body);
    return record ? response.status(200).json({"message":"student added successfully.",record}) : response.status(400);
   }catch(errors){
        return response.status(400).send(errors.message);
   }
};

const getAllStudents = async (request,response) =>{
let query = request.query.name;
let id = request.params.id;
let fetchRecords;
   try{
        if(!query){
            fetchRecords = id ? await studentModel.findById(id) : await studentModel.find()
        }else{
            fetchRecords = await studentModel.find({"firstName":query})
        }
    return fetchRecords ? response.status(200).json(fetchRecords) : response.status(200).send("message:record not found.");
   }catch(errors){
        return response.status(400).json({"message":"invalid object id"});
   }
};

const updateStudent = async (request,response) =>{
    let id = request.params.id;
    let dataForUpdate = request.body;
    if(id && Object.keys(dataForUpdate).length>0){
        try{
            //new:true se update record return hoga
            let updatedRecords = await studentModel.findByIdAndUpdate(id,dataForUpdate,{new:true});
            return updatedRecords ? response.status(200).json({"message":"record updated successfully",updatedRecords}) : response.status(500).send("message:server error occurred.");
           }catch(errors){
                return response.status(400).json({"message":"invalid object id or body empty"});
           }
    }else{
        return response.status(400).json({"message":"provide body to update"});
    }
 
};

const deleteStudent = async (request,response) =>{
    let id = request.params.id;
    if(id){
        try{
            let deletedRecords = await studentModel.findByIdAndDelete(id);
            deletedRecords ? response.status(200).json({"message":"record deleted successfully",deletedRecords}) : response.status(500).send("message:server error occurred.");
           }catch(errors){
                return response.status(400).json({"message":"invalid object id."});
           }
    }else{
        return response.status(400).json({"message":"provide id to delete"});
    }
};

const getByName = async (request,response) =>{
    response.send("query")
};

module.exports = {createStudent,getAllStudents,updateStudent,deleteStudent,getByName};