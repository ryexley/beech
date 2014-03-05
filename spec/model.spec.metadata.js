module.exports = {
    name: "Person",
    attributes: {
        firstName: { type: "string", required: true, minLength: 2, maxLength: 50 },
        lastName: { type: "string", required: true, minLength: 2, maxLength: 50 }
    }
};
