import express from "express";
import {getViciosUser, getAllViciosUser, deleteViciosUser, addViciosUser, updateViciosUser} from "../controllers/vicios_do_user.js";

const router = express.Router();

router.get("/", getAllViciosUser);

router.get("/:id", getViciosUser);

router.post("/", addViciosUser);

router.put("/", updateViciosUser);

router.delete("/", deleteViciosUser);

export default router