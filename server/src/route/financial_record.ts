import express, {Request,Response} from "express";
import FinancialRecordModel from "../schema/financial_record";

const router=express.Router();

router.get("/getAllByUserId/:userId",async (req : Request,res : Response) => {
    
    try{
    const userID=req.params.userId;
    const records=await FinancialRecordModel.find({userID : userID});

    if(records.length===0){
        return res.status(404).send("No Records Found");
    }
    res.status(200).send(records);
    }catch(err){
        res.status(500).send(err);
    }
})

router.post("/",async (req : Request,res : Response) => {
    
    try{
    const newRecordBody=req.body;
    const newRecord=new FinancialRecordModel(newRecordBody);
    const saveRecord=await newRecord.save();

    res.status(200).send(saveRecord);
    }catch(err){
        res.status(500).send(err);
    }
})

router.put("/:id",async (req : Request,res : Response) => {
    
    try{
      const newRecordBody=req.body;
      const id=req.params.id;
      const record=await FinancialRecordModel.findByIdAndUpdate(id,newRecordBody,{new : true});

      if(!record){
        return res.status(404).send("Record cannot be Updated Because it is Not PRESENT");
      }

      res.status(200).send(record);
     
    }catch(err){
        res.status(500).send(err);
    }
})

router.delete("/:id",async (req : Request,res : Response) => {
    
    try{
      const id=req.params.id;
      const record=await FinancialRecordModel.findByIdAndDelete(id);

      if(!record){
        return res.status(404).send("Record cannot be Deleted Because it is Not PRESENT");
      }

      res.status(200).send(record);
     
    }catch(err){
        res.status(500).send(err);
    }
})



export default router;