import express from "express";
import {getAnotacoes, getAllAnotacoes, addAnotacoes, updateAnotacoes, deleteAnotacoes} from "../controllers/anotacoes.js";

const router = express.Router();

router.get("/all/:id_vicio_user", getAllAnotacoes);

router.get("/:id_vicio_user", getAnotacoes);

router.post("/:id_vicio_user", addAnotacoes);

router.put("/", updateAnotacoes);

router.delete("/", deleteAnotacoes);

export default router