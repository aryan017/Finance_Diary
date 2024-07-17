import express,{Express} from "express";
import mongoose from "mongoose";
import FinancialRecordRouter from "./route/financial_record";
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config()

const app : Express=express();

const port=process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use("/financial-records",FinancialRecordRouter)

const mongoURL : string=`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}.3n2bnmt.mongodb.net/`;
mongoose.connect(mongoURL)
.then(() => {
    console.log("CONNECTED to MongoDB");
})
.catch((err) =>{
    console.error(err);
})

app.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});