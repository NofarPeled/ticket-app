export default {
    save, 
    load,
    removeOne, 
    removeAll
}

function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function load(key) {
    return JSON.parse(localStorage.getItem(key));
}

function removeOne(key, id) {
    // it will happend in the backend in real application, 
    // for example in mongodb: 
    // await collection.deleteOne({ _id: ObjectId(ticket.id) });

    const list = load(key);
    const updatedList = list.filter(value => {
        return value._id !== id;
    });
    save(key, updatedList);
}

function removeAll(key) {
    localStorage.removeItem(key)
}