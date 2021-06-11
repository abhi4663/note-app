import Note from '../models/noteSchema';

export const getNotes = async (req: any, res: any) => {
  try {
    const Notes = await Note.find();
    res.status(200).json(Notes);
  } catch (err: any) {
    res.status(404).json({ err: err.message, success: false });
  }
};

export const getNoteById = async (req: any, res: any) => {
  try {
    const Notes = await Note.findById(req.params.id);
    res.status(200).json(Notes);
  } catch (err: any) {
    res.status(404).json({ err: err.message, success: false });
  }
};

export const addNewNote = async (req: any, res: any) => {
  const Notes = new Note(req.body);
  try {
    const a1 = await Notes.save();
    res
      .status(200)
      .json({ message: 'Note is Added Successfully...', success: true });
  } catch (err: any) {
    res.status(404).json({ err: err.message, success: false });
  }
};

export const deleteNote = async (req: any, res: any) => {
  try {
    const Notes: any | null = await Note.findById(req.params.id);
    const a1 = await Notes.remove();
    res
      .status(200)
      .json({ message: 'Note is Deleted Successfully...', success: true });
  } catch (err: any) {
    res.status(404).json({ err: err.message, success: false });
  }
};

export const updateNote = async (req: any, res: any) => {
  try {
    const note: any = await Note.findById(req.params.id);

    note.title = req.body.title;
    note.body = req.body.body;

    const a1 = await note.save();
    res
      .status(200)
      .json({ message: 'Note is Updated Successfully...', success: true });
  } catch (err: any) {
    res.status(304).json({ err: err.message, success: false });
  }
};

export const searchNote = async (req: any, res: any) => {
  try {
    const note: any = await Note.find({
      title: { $regex: new RegExp(req.params.title), $options: 'i' },
    });
    if (note.length > 0) {
      res.status(200).json(note);
    } else {
      res.status(404).json('title not found');
    }
  } catch (err: any) {
    res.status(404).json({ err: err.message, success: false });
  }
};
