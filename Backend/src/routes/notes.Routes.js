import express from "express";
import { getNoteById, getAllNotes, createNote, updateNote, deleteNote } from "../controllers/notesController.js";
import { get } from "mongoose";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;