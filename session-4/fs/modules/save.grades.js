import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "../data/grades.json");

export default function saveGrades(grades) {
    fs.writeFileSync(dataPath, JSON.stringify(grades, null, 2), "utf8");
}
