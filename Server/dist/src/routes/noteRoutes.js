"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
var express_1 = __importDefault(require("express"));
var noteController_1 = require("../controllers/noteController");
var noteRouter = express_1.default.Router();
exports.default = noteRouter;
noteRouter.get('/', noteController_1.getNotes).post('/', noteController_1.addNewNote);
noteRouter
    .get('/:id', noteController_1.getNoteById)
    .delete('/:id', noteController_1.deleteNote)
    .put('/:id', noteController_1.updateNote);
// noteRouter.post("/", addNewNote);z
// noteRouter.delete("/:id", deleteNote);
// noteRouter.put("/:id", updateNote);
noteRouter.get('/note/:title', noteController_1.searchNote);
