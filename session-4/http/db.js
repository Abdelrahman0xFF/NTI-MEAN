import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, "books.json");

async function initDB() {
    try {
        await fs.access(dataPath);
    } catch {
        await fs.writeFile(dataPath, "[]", "utf8");
    }
}

export async function getBooks() {
    await initDB();
    try {
        const data = await fs.readFile(dataPath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        throw new Error("Failed to read database");
    }
}

export async function saveBooks(books) {
    try {
        await fs.writeFile(dataPath, JSON.stringify(books, null, 2), "utf8");
    } catch (error) {
        throw new Error("Failed to save database");
    }
}
