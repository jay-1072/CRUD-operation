const idRegex = /^[0-9]{6}$/;
const nameRegex = /^[A-Za-z]+$/;
const emailRegex = /^[a-z_]{3,}@[a-z]{3,}[.]{1}[a-z.]{2,6}$/;

// document.querySelector("#newEmpModal").addEventListener("submit", (e)=> {
//     addEmployee(e);
// }) 

const orig_eid_ip = document.getElementById("empId");
const orig_fname_ip = document.getElementById("empFname");
const orig_mname_ip = document.getElementById("empMname");
const orig_lname_ip = document.getElementById("empLname");
const orig_email_ip = document.getElementById("empEmail");
const Egender = document.getElementsByName("eGender");

function addEmployee() {

    let flag = true;

    const eid = document.getElementById("empId").value.trim();
    const fname = document.getElementById("empFname").value.trim();
    const mname = document.getElementById("empMname").value.trim();
    const lname = document.getElementById("empLname").value.trim();
    const email = document.getElementById("empEmail").value.trim();

    // set default content and style 

    document.getElementById("empIdError").innerHTML = "";
    document.getElementById("empId").style = orig_eid_ip;

    document.getElementById("empFnameError").innerHTML = "";
    document.getElementById("empFname").style = orig_fname_ip;

    document.getElementById("empMnameError").innerHTML = "";
    document.getElementById("empMname").style = orig_mname_ip;

    document.getElementById("empLnameError").innerHTML = "";
    document.getElementById("empLname").style = orig_lname_ip;

    document.getElementById("empEmailError").innerHTML = "";
    document.getElementById("empEmail").style = orig_email_ip;

    document.getElementById("empGenderError").innerHTML = "";
    

    if(flag) {

        if(eid=='') {
            document.getElementById("empIdError").innerHTML = "Id is required";
            document.getElementById("empId").style.border = "1px solid red";
            flag = false;
        }

        if(fname=='') {
            document.getElementById("empFnameError").innerHTML = "First name is required";
            document.getElementById("empFname").style.border = "1px solid red";
            flag = false;
        }

        if(mname=='') {
            document.getElementById("empMnameError").innerHTML = "Middle name is required";
            document.getElementById("empMname").style.border = "1px solid red";
            flag = false;
        }

        if(lname=='') {
            document.getElementById("empLnameError").innerHTML = "Last name is required";
            document.getElementById("empLname").style.border = "1px solid red";
            flag = false;
        }

        if(email=='') {
            document.getElementById("empEmailError").innerHTML = "Email is required";
            document.getElementById("empEmail").style.border = "1px solid red";
            flag = false;
        }

        if(!Egender[0].checked && !Egender[1].checked) {
            document.getElementById("empGenderError").innerHTML = "gender is required";
            flag = false;
        }
    }

    if (!idRegex.test(eid) && eid != '') {
        document.getElementById("empIdError").innerHTML = "Id is invalid it must contain 6 digits only";
        document.getElementById("empId").style.border = "1px solid red";
        flag = false;
    }

    if (!nameRegex.test(fname) && fname != '') {
        document.getElementById("empFnameError").innerHTML = "First name is invalid";
        document.getElementById("empFname").style.border = "1px solid red";
        flag = false;
    }

    if (!nameRegex.test(mname) && mname != '') {
        document.getElementById("empMnameError").innerHTML = "middle name is invalid";
        document.getElementById("empMname").style.border = "1px solid red";
        flag = false;
    }

    if (!nameRegex.test(lname) && lname != '') {
        document.getElementById("empLnameError").innerHTML = "last name is invalid";
        document.getElementById("empLname").style.border = "1px solid red";
        flag = false;
    }

    if (!emailRegex.test(email) && email != '') {
        document.getElementById("empEmailError").innerHTML = "email is invalid";
        document.getElementById("empEmail").style.border = "1px solid red";
        flag = false;
    }

    if(flag) {
        const toastTrigger = document.getElementById('liveToastBtn');
        const toastLiveExample = document.getElementById('liveToast');
       
        if (toastTrigger) {
            const toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
            reset();
        }
    }



}




// function checkFname(ele) {
    
//     let fName = ele.value;
//     fName = fName.replace(/\s+/g, '').trim();

//     if(!nameRegex.test(fName) && fName!='') {
//         document.getElementById("empFnameError").innerHTML = "First Name is Invalid";
//         document.getElementById("empFname").style.border = "1px solid red";
//     }
//     else if(nameRegex.test(fName) && fName!='') {
//         document.getElementById("empFname").style = origFnameIp.value;
//         document.getElementById("empFnameError").innerHTML = "";
//     }
// }

// function checkMname(ele) {
    
//     let mName = ele.value;
//     mName = mName.replace(/\s+/g, '').trim();

//     if(!nameRegex.test(mName) && mName!='') {
//         document.getElementById("empMnameError").innerHTML = "Middle Name is Invalid";
//         document.getElementById("empMname").style.border = "1px solid red";
//     }
//     else if(nameRegex.test(mName) && mName!='') {
//         document.getElementById("empMname").style = origMnameIp.value;
//         document.getElementById("empMnameError").innerHTML = "";
//     }
// }

// function checkLname(ele) {
    
//     let lName = ele.value;
//     lName = lName.replace(/\s+/g, '').trim();

//     if(!nameRegex.test(lName) && lName!='') {
//         document.getElementById("empLnameError").innerHTML = "Last Name is Invalid";
//         document.getElementById("empLname").style.border = "1px solid red";
//     }
//     else if(nameRegex.test(lName) && lName!='') {
//         document.getElementById("empLname").style = origLnameIp.value;
//         document.getElementById("empLnameError").innerHTML = "";
//     }
// }

function resetModal() {

    document.getElementById("empIdError").innerHTML = "";
    document.getElementById("empId").style = orig_eid_ip;

    document.getElementById("empFnameError").innerHTML = "";
    document.getElementById("empFname").style = orig_fname_ip;

    document.getElementById("empMnameError").innerHTML = "";
    document.getElementById("empMname").style = orig_mname_ip;

    document.getElementById("empLnameError").innerHTML = "";
    document.getElementById("empLname").style = orig_lname_ip;

    document.getElementById("empEmailError").innerHTML = "";
    document.getElementById("empEmail").style = orig_email_ip;

    document.getElementById("empGenderError").innerHTML = "";

    reset();
}

function reset() {
    document.getElementById("empId").value = "";
    document.getElementById("empFname").value = "";
    document.getElementById("empMname").value = "";
    document.getElementById("empLname").value = "";
    document.getElementById("empEmail").value = "";

    Egender[0].checked = false;
    Egender[1].checked = false;
}