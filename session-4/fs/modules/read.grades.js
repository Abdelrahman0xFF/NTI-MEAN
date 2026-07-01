import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "../data/grades.json");

export default function readGrades() {
    try {
        if (!fs.existsSync(dataPath)) {
            return [];
        }
        const data = fs.readFileSync(dataPath, "utf8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading grades data:", error.message);
        return [];
    }
}
