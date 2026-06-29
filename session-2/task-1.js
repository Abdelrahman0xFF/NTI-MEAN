function bookSlot(slot) {
    const bookedSlots = ["b3", "a1"];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (bookedSlots.includes(slot)) {
                reject(`Slot ${slot} is already booked`);
            } else {
                resolve(`Slot ${slot} is successfully booked`);
            }
        }, 500);
    });
}

bookSlot("a3")
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
