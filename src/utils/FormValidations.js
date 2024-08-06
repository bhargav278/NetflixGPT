
export function checkValidate(email, password,name) {
    
    let emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let passCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if (name != null) {
        let nameCheck = /([a-zA-Z0-9_\s]+)/.test(name.value);
        if(!nameCheck) return "Invalid Name"
    }

    if (!emailCheck) return "Email is not valid."
    if (!passCheck) return "Password is not valid."
    
    return null;


}