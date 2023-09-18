import express from "express";
import {getVicios, getAllVicios, addVicios, updateVicios, deleteVicios} from "../controllers/vicios.js";

const router = express.Router();

router.get("/", getAllVicios);

router.get("/:id", getVicios);

router.post("/", addVicios);

router.put("/:id", updateVicios);

router.delete("/:id", deleteVicios);

export default router