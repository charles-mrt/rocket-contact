
import { contactData } from "../data.js";

/**

getContactData retrieves contact details based on the requested properties and group from the contactData object
@param {Array} requestProperties - An array of strings representing the properties to retrieve for each contact
@param {string} requestGroup - A string representing the group of contacts to retrieve from the contactData object
@returns {Array} An array of objects containing the requested properties for each contact in the requested group
*/

const getContactData = (requestProperties, requestGroup) => {
    const groupData = contactData.groups[requestGroup];
    const contactDetails = groupData.map(contact => {
        const obj = {};
        requestProperties.forEach(property => {
            obj[property] = contact[property];
        });
        return obj;
    });
    return contactDetails;
};


/**
ContactInfo renders a list of contacts grouped by the first letter of their name.
@param {string} renderContactGroup - The HTML string to be rendered.
@returns {string} The HTML string containing the list of contacts grouped by the first letter of their name.
*/
export const ContactInfo = (renderContactGroup = "") => {

    for (const groupLetter in contactData.groups) {
        const contact = getContactData(["id", "image-url", "name", "phone-number"], groupLetter);

        let renderContactInfo = "";
        for (let i = 0; i < contact.length; i++) {

            renderContactInfo += `        
               
                <div class="contactInfo">
                    <img 
                      src="./src/assets/${contact[i]["image-url"] !== "" ? contact[i]["image-url"] : "user"}.png" 
                      alt="foto de ${contact[i]["name"]}"
                    >

                    <div class="contact">
                        <span class="name"> ${contact[i]["name"]}</span>
                        <span class="phoneNumber"> ${contact[i]["phone-number"]}</span>
                    </div>                    
                </div>`;
        }


        renderContactGroup += `
            <div class="group" data-letter="${groupLetter}">
                <span class="letter" data-letter="group-${groupLetter}">${groupLetter}</span>
                <div class="contactGroup">${renderContactInfo}</div>
            </div>`;
    }
    return renderContactGroup;
}


