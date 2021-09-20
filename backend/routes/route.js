import express from "express";
import { getUsers,addUsers, getUserById, updateUser, deleteUser } from "../controller/UserController.js";


const route = express.Router();
route.get("/",getUsers );
route.post('/add',addUsers);
route.get('/:id',getUserById);
route.put('/:id',updateUser);
route.delete('/:id',deleteUser);




export default route;