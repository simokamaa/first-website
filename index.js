//bacaroons company website
//validating the form in index.html
//generating application programme interface for the website
//file upload with fetch



//password validation
function CheckPassword(inputtxt) {
    var passw = /^[A-Za-z]\w{7,14}$/;
    if (inputtxt.value.match(passw)) {
        alert('Correct, try another...')
        return true;
    } else {
        alert('Wrong...!')
        return false;
    }
}


async function getCanvasBlob(canvas) {
    return new Promise(resolve, reject) => {
        canvas.toBlob(resolve);
    }
}

async function uploadCanvasImage(canvas) {
    letjpg = await getCanvasBlob(canvas);
    let formdata = new FormData();
    formdata.set("canvasimage", jpgblob);
    let response = await fetch("/upload", {
        method: "POST"
        body: formdata
    });
    let body = await response.json();
}

document.getElemetById("form").innerHTML
    //form validation
const form = validateForm
validateForm("any;") {
    if (customerPhoneNumber = toString) {
        document.getElementById("number").innerText(text: "string")
    } else {
        alert("repeat")
    }
}