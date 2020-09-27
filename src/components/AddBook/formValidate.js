
const isEmpty = val => /^$|\s+/.test(val);
const isNumeric = val => /^(0|[1-9][0-9]*)$/.test(val);
const isAlphabetic = val => /^[A-Za-z]+$/.test(val);

const validate = (formData) => {

    let errors = {}
   
if (!formData.title){
    errors.title = "empty Title"
} else {
    if(!isAlphabetic(formData.title)) {
        errors.title =  " inValid pages";
    } 
}

if (!formData.author){
    errors.author = "empty author"
} else {
 
    if(!isAlphabetic(formData.author)) {
        errors.author =  " inValid pages";
    } 
}

if (!formData.pages){
    errors.pages = "empty pages";
} else {
    if(!isNumeric(parseInt(formData.pages))) {
        errors.pages =  " inValid pages";
    } 
}

if (!formData.available){
    errors.available = "empty available"
} else {
    if(!isNumeric(formData.available)) {
        errors.available =  " inValid pages";
    } 
}

if (!formData.publisherName){
    errors.publisherName = "empty publisherName"
} else {
    if(!isAlphabetic(formData.publisherName)) {
        errors.publisherName =  " inValid pages";
    } 
}


 return errors;
}

export default validate