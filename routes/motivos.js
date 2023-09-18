import express from "express";
import {getMotivos, getAllMotivos, addMotivos, updateMotivos, deleteMotivos} from "../controllers/motivos.js";

const router = express.Router();

router.get("/all/:id_vicio_user", getAllMotivos);

router.get("/:id_vicio_user", getMotivos);

router.post("/:id_vicio_user", addMotivos);

router.put("/", updateMotivos);

router.delete("/", deleteMotivos);

export default router