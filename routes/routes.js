import { Router } from "express";
import {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
} from "../handler/handler.js";

const appRouter = Router(); // Creates Router instance

// Routes requests to different functions
appRouter.get("/", getAllContacts);
appRouter.get("/:id", getContact);
appRouter.post("/create", createContact);
appRouter.put("/update/:id", updateContact);
appRouter.delete("/delete/:id", deleteContact);

export default appRouter;
