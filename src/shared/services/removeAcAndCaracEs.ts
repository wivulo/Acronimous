export const removeAccentsAndSpecialCharacters = (value:string) => {
    return value.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
}