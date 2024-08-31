import { pool } from "./db.js";

// Function for get request
const find = async () => {
    const Query = "SELECT * FROM Contacts";
    try {
        const client = await pool.getConnection();
        const result = await client.query(Query);
        return result[0];
    } catch (error) {
        console.log("Error occured while finding all records", error);
        throw error;
    }
};

// Function for GET(by id) request
const findById = async (id) => {
    const Query = "SELECT * FROM Contacts WHERE id = ?";
    try {
        const client = await pool.getConnection();
        const result = await client.query(Query, [id]);
        return result[0];
    } catch (error) {
        console.log("Error occured while finding record via id", error);
        throw error;
    }
};

// Function for PUT request
const create = async (id, name, number) => {
    const Query = "Insert into Contacts (id,name,number) VALUES (?,?,?)";
    try {
        const client = await pool.getConnection();
        const result = await client.query(Query, [id, name, number]);
        return result[0];
    } catch (error) {
        console.log("Error occured while creating a new record", error);
        throw error;
    }
};

const update = async (id, name, number, idtoupdate) => {
    const Query = `UPDATE Contacts
                    SET id = ? , name = ?,number = ? WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(Query, [
            id,
            name,
            number,
            idtoupdate,
        ]);
        return result[0];
    } catch (error) {
        console.log("Error occured while updating a record", error);
        throw error;
    }
};

const delete_record = async (id) => {
    const Query = `DELETE FROM Contacts WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(Query, [id]);
        return result[0];
    } catch (error) {
        console.log("Error occured while deleting a  record", error);
        throw error;
    }
};

export { find, findById, create, update, delete_record };
