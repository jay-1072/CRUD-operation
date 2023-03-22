const nameRegex = /^[A-Za-z]+$/;
    
function checkFname(ele) {
    
    let fName = ele.value;
    fName = fName.replace(/\s+/g, '').trim();

    if(fName==='') {
        alert('Please enter the first name');
    }
    else if(!nameRegex.test(fName)) {
        alert('first name only contains alphabets');
    }
}

function checkMname(ele) {
    
    let mName = ele.value;
    mName = mName.replace(/\s+/g, '').trim();

    if(mName==='') {
        alert('Please enter the middle name');
    }
    else if(!nameRegex.test(mName)) {
        alert('middle name only contains alphabets');
    }
}

function checkLname(ele) {
    
    let lName = ele.value;
    lName = lName.replace(/\s+/g, '').trim();

    if(lName==='') {
        alert('Please enter the last name');
    }
    else if(!nameRegex.test(lName)) {
        alert('last name only contains alphabets');
        
    }
}