import express from "express";
import {getRecaidas, getAllRecaidas, addRecaidas, updateRecaidas, deleteRecaidas} from "../controllers/recaidas.js";

const router = express.Router();

router.get("/all/:id_vicio_user", getAllRecaidas);

router.get("/:id_vicio_user", getRecaidas);

router.post("/:id_vicio_user", addRecaidas);

router.put("/", updateRecaidas);

router.delete("/", deleteRecaidas);

export default router