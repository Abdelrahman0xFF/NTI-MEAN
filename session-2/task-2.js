function pingServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isOnline = Math.random() > 0.5;
            if (isOnline) {
                resolve("Server is online");
            } else {
                reject("Server is offline");
            }
        }, 500);
    });
}

async function pingWithRetries(maxRetries) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            const message = await pingServer();
            console.log(message);
            return;
        } catch (error) {
            console.error(`Attempt ${attempt}: ${error}`);
            if (attempt === maxRetries) {
                console.error("Max retries reached \t Stopping attempts");
            }
        }
    }
}

pingWithRetries(5);
