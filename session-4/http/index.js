import http from "http";
import { getBooks, saveBooks } from "./db.js";

const PORT = 3000;

const sendResponse = (res, statusCode, data) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
};

const parseBody = (req) => {
    return new Promise((resolve, reject) => {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });
        req.on("end", () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (error) {
                reject(new Error("Invalid JSON"));
            }
        });
    });
};

const server = http.createServer(async (req, res) => {
    const { method, url } = req;

    try {
        if (method === "GET" && url === "/books") {
            const books = await getBooks();
            return sendResponse(res, 200, books);
        }

        const idMatch = url.match(/^\/books\/([0-9]+)$/);

        if (method === "GET" && idMatch) {
            const id = parseInt(idMatch[1]);
            const books = await getBooks();
            const book = books.find((b) => b.id === id);

            if (book) return sendResponse(res, 200, book);
            return sendResponse(res, 404, { error: "Book not found" });
        }

        if (method === "POST" && url === "/books") {
            const body = await parseBody(req);

            if (!body.title || !body.author || body.price === undefined) {
                return sendResponse(res, 400, {
                    error: "Missing required fields (title, author, price)",
                });
            }

            const books = await getBooks();

            const newId =
                books.length > 0 ? Math.max(...books.map((b) => b.id)) + 1 : 1;

            const newBook = {
                id: newId,
                title: body.title,
                author: body.author,
                price: body.price,
                available: body.available !== undefined ? body.available : true,
            };

            books.push(newBook);
            await saveBooks(books);
            return sendResponse(res, 201, newBook);
        }

        if (method === "PUT" && idMatch) {
            const id = parseInt(idMatch[1]);
            const body = await parseBody(req);
            const books = await getBooks();
            const index = books.findIndex((b) => b.id === id);

            if (index === -1) {
                return sendResponse(res, 404, { error: "Book not found" });
            }

            books[index] = { ...books[index], ...body, id };
            await saveBooks(books);
            return sendResponse(res, 200, books[index]);
        }

        if (method === "DELETE" && idMatch) {
            const id = parseInt(idMatch[1]);
            const books = await getBooks();
            const filteredBooks = books.filter((b) => b.id !== id);

            if (books.length === filteredBooks.length) {
                return sendResponse(res, 404, { error: "Book not found" });
            }

            await saveBooks(filteredBooks);
            return sendResponse(res, 200, {
                message: `Book ID ${id} deleted successfully.`,
            });
        }
        sendResponse(res, 404, { error: "Invalid route" });
    } catch (error) {
        if (error.message === "Invalid JSON") {
            sendResponse(res, 400, { error: "Invalid JSON in request body" });
        } else {
            console.error("Server error:", error);
            sendResponse(res, 500, { error: "Internal Server Error" });
        }
    }
});

server.listen(PORT, () => {
    console.log(`Library API running on http://localhost:${PORT}`);
});
