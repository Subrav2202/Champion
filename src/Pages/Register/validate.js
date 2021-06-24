export default function validate(val,isregistered) {
    let errors = {}
    
    if (!isregistered) {
        //Register Validation
        if(val.email === ''){
            errors.email = "Please Enter Email "
        }
        else if(!/^(([^<>!@#$%&^*()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val.email)) {
            errors.email = "Please Enter Correct Email Address"
        }
        if (val.firstName && val.lastName === '') {
            errors.fullname = "Please Enter Fullname"
        }
        else if (!/^[a-zA-Z\s]*$/.test(val.firstName)) {
            errors.fullname = "Name should only be Alphabets"
        }
        else if (!/^[a-zA-Z\s]*$/.test(val.lastName)) {
            errors.fullname = "Name should only be Alphabets"
        }
        if(val.password === ''){
            errors.password = "Please Enter Password "
        }
        else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val.password)){
            errors.password = "Minimum eight characters, at least one letter and one number"
        }
        else if (val.password !== val.confirmpass) {
            errors.password = "Password doesn't Match"
        }
        // if (val.phone === '') {
        //     errors.phone = "Please Enter Phone number"
        // }
        // else if (!/^[0-9]{10,10}$/.test(val.phone)) {
        //     errors.phone = "Phone number should be of length 10"
        // }
    }
    else {
        //Login Validation
        if(val.loginemail === ''){
            errors.loginemail = "Please Enter Email "
        }
        else if(!/^(([^<>!@#$%&^*()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val.loginemail)) {
            errors.loginemail = "Please Enter Correct Email Address"
        }
        //Password Validation
        if(val.password === ''){
            errors.password = "Please Enter Password"
        }
        else if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(val.password)){
            errors.password = "Minimum eight characters, at least one letter and one number"
        }
    }
    return errors;
}