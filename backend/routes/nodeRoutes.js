import express from "express";
const router = express.Router();


// When someone visits "/api/notes", send them a message with the notes count
router.get("/",getAllNotes);

router.post("/",createNote);

router.put("/:id",updateNote);

router.delete("/:id",deleteNote);
