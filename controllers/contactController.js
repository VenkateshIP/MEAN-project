//@desc Get all contacts
//@route GET /api/contacts

const { error } = require("console");

//@access public
const getContacts = (req, res) => {
    res.status(200).json({message: "Get all contacts"});
};

//@desc Create new contacts
//@route POST /api/contacts
//@access public
const createContacts = (req, res) => {
    console.log("Request body is ",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message: "Create contacts"})
};

//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: `Get contact for ${req.params.id}`})
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({message: `Update contact for ${req.params.id}`})
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({message: `Delete contact for ${req.params.id}`})
};

module.exports = {getContact, getContacts, createContacts, updateContact, deleteContact};