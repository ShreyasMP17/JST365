// import express from "express";
// import mongoose from "mongoose";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();

// app.use(express.json());
// app.use(cors());

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log("MongoDB Connected"))
//     .catch(err => console.error(err));

// // Bank Schema
// const bankSchema = new mongoose.Schema({
//     bankName: String,
//     accountNumber: String,
//     ifscCode: String,
//     accountHolder: String,
//     minAmount: Number,
//     maxAmount: Number
// });
// const Bank = mongoose.model("Bank", bankSchema);

// // Routes
// app.get("/api/bank", async (req, res) => {
//     const bankDetails = await Bank.findOne();
//     res.json(bankDetails);
// });

// // Admin - Update Bank Details
// app.post("/api/admin/bank", async (req, res) => {
//     const { bankName, accountNumber, ifscCode, accountHolder, minAmount, maxAmount } = req.body;
    
//     let bankDetails = await Bank.findOne();
//     if (!bankDetails) {
//         bankDetails = new Bank(req.body);
//     } else {
//         bankDetails.bankName = bankName;
//         bankDetails.accountNumber = accountNumber;
//         bankDetails.ifscCode = ifscCode;
//         bankDetails.accountHolder = accountHolder;
//         bankDetails.minAmount = minAmount;
//         bankDetails.maxAmount = maxAmount;
//     }

//     await bankDetails.save();
//     res.json({ message: "Bank details updated successfully!" });
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://mongo:iBVFpmRULLTxpYUepGReKuNDqarIXeNA@shuttle.proxy.rlwy.net:33331', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.error("MongoDB Connection Error:", err));

// Bank Schema
const bankSchema = new mongoose.Schema({
    bankName: String,
    accountNumber: String,
    ifscCode: String,
    accountHolder: String,
    minAmount: Number,
    maxAmount: Number
});
const Bank = mongoose.model("Bank", bankSchema);

// ✅ Get All Banks
app.get("/api/bank", async (req, res) => {
    try {
        const bankDetails = await Bank.find(); // Fetching all bank details
        res.json(bankDetails);
    } catch (error) {
        res.status(500).json({ error: "Error fetching bank details" });
    }
});

// ✅ Create a New Bank Entry
app.post("/api/bank", async (req, res) => {
    try {
        const newBank = new Bank(req.body);
        await newBank.save();
        res.status(201).json({ message: "New bank created successfully!", newBank });
    } catch (error) {
        res.status(500).json({ error: "Error creating new bank" });
    }
});

// // ✅ Update Specific Bank Entry
// app.put("/api/admin/bank/:id", async (req, res) => {
//   try {
//       const { id } = req.params; // Get the bank ID from the request params
//       const updateData = req.body; // Get updated bank details from request body

//       const updatedBank = await Bank.findByIdAndUpdate(id, updateData, { new: true });

//       if (!updatedBank) {
//           return res.status(404).json({ error: "Bank entry not found!" });
//       }

//       res.json({ message: "Bank details updated successfully!", updatedBank });

//   } catch (error) {
//       res.status(500).json({ error: "Error updating bank details." });
//   }
// });

app.put("/api/admin/bank/:id", async (req, res) => {
  try {
      const { id } = req.params; // Get the bank ID from URL params
      const updateData = req.body; // Get updated details from request body

      const updatedBank = await Bank.findByIdAndUpdate(id, updateData, { new: true });

      if (!updatedBank) {
          return res.status(404).json({ error: "Bank entry not found!" });
      }

      res.json({ message: "Bank details updated successfully!", updatedBank });

  } catch (error) {
      res.status(500).json({ error: "Error updating bank details." });
  }
});



// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
