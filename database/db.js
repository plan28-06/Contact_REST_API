import { createPool } from "mysql2/promise";
import * as dotenv from 'dotenv';

dotenv.config(); // Loads the contents of .env into process.env

/* Pool reuses connection instance while createConnection creates a new one everytime
   Thus it is more efficient
   Very similar to a car pool ,
   createConnection is what happens when everyone takes their own vehicle
 */


const pool = createPool({
    port: process.env.MYSQL_PORT,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DATABASE_NAME,
    user: process.env.MYSQL_USER,
});

const connecttoDatabase = async () => {
    try {
        await pool.getConnection();
        console.log("Connection successful");
    } catch (error) {
        console.log(`Database Connection Error : ${error}`);
        throw error;
    }
};

export { connecttoDatabase, pool };
