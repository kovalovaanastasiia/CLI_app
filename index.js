import contactsService from "./contacts.js";
import {program} from "commander";

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await contactsService.listContacts();
            console.table(allContacts);
            break;

        case "get":
            const oneContact = await contactsService.getContactById(id);
            console.table(oneContact);
            break;

        case "add":
            const addNewContact = await contactsService.addContact(name, email, phone);
            console.table(addNewContact);
            break;

        case "remove":
            const removeContact = await contactsService.removeContact(id);
            console.table(removeContact);
            break;

        default:
            console.warn('\x1B[31m Unknown action type!');
    }
};

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse();

const options = program.opts();

invokeAction(options);
