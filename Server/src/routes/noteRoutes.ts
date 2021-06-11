import express from 'express';
import {
  getNotes,
  addNewNote,
  deleteNote,
  updateNote,
  getNoteById,
  searchNote,
} from '../controllers/noteController';

const noteRouter = express.Router();

noteRouter.get('/', getNotes).post('/', addNewNote);
noteRouter
  .get('/:id', getNoteById)
  .delete('/:id', deleteNote)
  .put('/:id', updateNote);
// noteRouter.post("/", addNewNote);z
// noteRouter.delete("/:id", deleteNote);
// noteRouter.put("/:id", updateNote);
noteRouter.get('/note/:title', searchNote);

export { noteRouter as default };
