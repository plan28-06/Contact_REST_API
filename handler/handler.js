import {
    find,
    findById,
    create,
    update,
    delete_record,
} from "../database/queries.js";

const getAllContacts = async (req, res) => {
    try {
        const contacts = await find();
        return res.json({ contacts });
    } catch (error) {
        console.log(error);
        res.json({ message: "Error Occured" });
    }
};
const getContact = async (req, res) => {
    const id = req.params.id;
    try {
        const contacts = await findById(id);
        return res.json({ contacts });
    } catch (error) {
        console.log(error);
        res.json({ message: "Error Occured" });
    }
};

const createContact = async (req, res) => {
    const { id, name, number } = req.body;
    if (!id || !name || !number) {
        console.log("All input parameters were not provided");
    }
    try {
        const contact = await create(id, name, number);
        return res.json({ contact });
    } catch (error) {
        res.json({ message: "Error Occured" });
    }
};

const updateContact = async (req, res) => {
    const id_to_update = req.params.id;
    const { id, name, number } = req.body;

    if (!id || !name || !number) {
        console.log("All input parameters were not provided");
    }
    try {
        const contact = await update(id, name, number, id_to_update);
        return res.json({ contact });
    } catch (error) {
        res.json({ message: "Error Occured" });
    }
};
const deleteContact = async (req, res) => {
    const id = req.params.id;

    if (!id) {
        console.log("id not provided");
    }
    try {
        const contact = await delete_record(id);
        return res.json({ contact });
    } catch (error) {
        res.json({ message: "Error Occured" });
    }
};

export {
    getAllContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};
