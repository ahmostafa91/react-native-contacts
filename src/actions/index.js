export const ContactSelect = (contact) => {
    //console.log(contact)
    return {
        type: 'SELECTED_ITEM',
        payload: contact
    }
}