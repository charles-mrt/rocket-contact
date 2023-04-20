import { ContactInfo } from "./components/ContactInfo.js";


/**
Renders the ContactInfo component by appending it to the ".contacts .wrapper" element.
*/
const renderContacts = document.querySelector(".contacts .wrapper");
renderContacts.insertAdjacentHTML("beforeend", ContactInfo());



const inputSearch = document.querySelector("#search");
const contacts = document.querySelectorAll(".contactInfo");
const groups = document.querySelectorAll(".group");

inputSearch.addEventListener("input", filterContacts);


/**
Filters the contact list based on the value of the search input element
@function
@name filterContacts
@returns {void}
*/

function filterContacts() {

    if (inputSearch.value !== "") {

        groups.forEach(group => {

            if (group.getAttribute("data-letter").toLowerCase() !== inputSearch.value.charAt(0).toLowerCase()) {
                group.style.display = "none";
            } else {
                group.style.display = "flex";
            }

        });

        contacts.forEach(contact => {
            let name = contact.querySelector(".name");
            name = name.textContent.toLowerCase();
            const inputValue = inputSearch.value.toLowerCase();

            if (!name.includes(inputValue)) {
                contact.style.display = "none";
            } else {
                contact.style.display = "block";

            }
        });
    } else {
        contacts.forEach(contact => {
            contact.style.display = "block";
        });
        groups.forEach(group => {
            group.style.display = "flex";
        });
    }
}





