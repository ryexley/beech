module.exports = {
    name: "Person",
    attributes: {
        firstName: { type: "string", required: true, minLength: 2, maxLength: 50 },
        lastName: { type: "string", required: true, minLength: 2, maxLength: 50 },
        created: { type: "datetime" },
        active: { type: "boolean", required: true, defaultValue: true }
    }
};
