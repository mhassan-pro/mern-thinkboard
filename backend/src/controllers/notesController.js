
import Note from "../../models/Note.js";

 export  const getAllNotes =async (req,res)=>{
    try{
        const notes = await Note.findx();
        res.status(200).json(notes);

    }
    catch(error){
        console.log("Error in getAllnotes controller:",error);
        res.status(500).json({message:"Internal server error"});
    }
}


export const createNote = (req,res)=>{
    res.send("You created notes..")
};


export const updateNote = (req,res)=>{
    res.send("You updated notes..")
}


export const deleteNote = (req,res)=>{
    res.send("You deleted notes..")
}