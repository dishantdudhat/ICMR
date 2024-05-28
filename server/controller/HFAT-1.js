import express, { response } from "express";
import mongoose from "mongoose";
import { HFAT1 } from "../Database/HFAT-1.js";
const app = express();

export const HFAT1Controller = async (req,res)=>{
      
      const { completeform, table1 }= req.body;
        // const x = {...adddata1[0] , ...adddata1[1]}

        const combinedData = {...completeform, table1};
        HFAT1.create(combinedData)
        .then(result => {res.status(200).json({success:"data saved",result})})
        .catch(err=> {res.status(400).json({error:"error for data save"})})

}