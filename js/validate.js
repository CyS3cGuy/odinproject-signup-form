const passwordField = document.querySelector('#pwd');
const confirmPwdField = document.querySelector("#confirm-pwd");
const passwordReq = Array.from(document.querySelectorAll(".password-req"));
const submitButton = document.querySelector('button[type="submit"');
const form = document.querySelector("form");

const passwordReqObj = {
    "satisfyLower": passwordReq[0],
    "satisfyUpper": passwordReq[1],
    "satisfyNumber": passwordReq[2],
    "satisfySymbol": passwordReq[3],
    "satisfyLength": passwordReq[4],
}

passwordField.addEventListener("input", () => {
    let pwd = passwordField.value;
    if (pwd.split("").filter(char => char >= "a" && char <= "z").length > 0) {
        changeValidityStyle(passwordReqObj.satisfyLower, true);
    } else {
        changeValidityStyle(passwordReqObj.satisfyLower, false);
    }

    if (pwd.split("").filter(char => char >= "A" && char <= "Z").length > 0) {
        changeValidityStyle(passwordReqObj.satisfyUpper, true);
    } else {
        changeValidityStyle(passwordReqObj.satisfyUpper, false);
    }

    if (pwd.split("").filter(char => char >= "0" && char <= "9").length > 0) {
        changeValidityStyle(passwordReqObj.satisfyNumber, true);
    } else {
        changeValidityStyle(passwordReqObj.satisfyNumber, false);
    }

    if (pwd.search(/^(?=.*[^\w\s])/) > -1) {
        changeValidityStyle(passwordReqObj.satisfySymbol, true);
    } else {
        changeValidityStyle(passwordReqObj.satisfySymbol, false);  
    }

    if (pwd.length >= 8 && pwd.length <= 32) {
        changeValidityStyle(passwordReqObj.satisfyLength, true);
    } else {
        changeValidityStyle(passwordReqObj.satisfyLength, false);  
    }
})

confirmPwdField.addEventListener("input", validateConfirmPwdField);

function validateConfirmPwdField() {
    let confirmPwd = confirmPwdField.value;
    let error = "";

    if (confirmPwd !== passwordField.value) {
        error = "Passwords must match!";
    }

    confirmPwdField.setCustomValidity(error);
}

function changeValidityStyle(whichRequirement, isValid) {
    if (isValid) {
        whichRequirement.style.backgroundColor = "var(--emerald-green-lighter)";
        whichRequirement.querySelector(".valid").style.visibility = "visible";
        whichRequirement.querySelector(".invalid").style.visibility = "hidden";
    } else {
        whichRequirement.style.backgroundColor = "var(--alert-red-lighter)";
        whichRequirement.querySelector(".valid").style.visibility = "hidden";
        whichRequirement.querySelector(".invalid").style.visibility = "visible";
    }  
}

