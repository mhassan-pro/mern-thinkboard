
import Note from "../../models/Note.js";

 export  const getAllNotes =async (req,res)=>{
    try{
        const notes = await Note.find();
        res.status(200).json(notes);

    }
    catch(error){
        console.log("Error in getAllnotes controller:",error);
        res.status(500).json({message:"Internal server error"});
    }
}


export const createNote = async(req,res)=>{
    try{
        const{title,content} = req.body;
        console.log(title,content);
        const newNote = new Note({title,content});

       const savedNote = await newNote.save();

        res.status (201).json(savedNote);

    }
    catch(error){
        console.log ("Error in createNote controller:",error);
        res.status(500).json({message:"Internal server error"});
    }   
};


export const updateNote = (req,res)=>{
    res.send("You updated notes..")
}


export const deleteNote = (req,res)=>{
    res.send("You deleted notes..")
}