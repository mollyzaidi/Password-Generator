const password_1 = document.querySelector('#password');
const length_1 = document.querySelector('#Length');
const uppercase_1 = document.querySelector('#Uppercase');
const lowercase_1 = document.querySelector('#LowerCase');
const numbers_1 = document.querySelector('#Numbers');
const symbol_1 = document.querySelector('#Symbols');


const generate_btn = document.querySelector("#generate");
generate_btn.addEventListener('click',genepass);

const copy_btn = document.querySelector("#copy");
copy_btn.addEventListener('click',CopyPaste);


const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const NUMBERS = "0123456789";
const SYMBOL = "!@#$%^&*()"; 

function genepass(){
    let password = "";
    let length = length_1.value;
    let chars = "";

    chars += uppercase_1.checked ? UPPER:" ";
    chars += lowercase_1.checked? LOWER:" ";
    chars += numbers_1.checked? NUMBERS:" ";
    chars += symbol_1.checked? SYMBOL:" ";

    for(let i=0; i <= length; i++ ) {
        let rand = Math.floor(Math.random() * chars.length);
        password += chars.substring(rand, rand+1);
    }
    password_1.value = password
}

async function CopyPaste(){
    if (navigator.clipboard){
        await navigator.clipboard.writeText(password_1.value)

        alert("Successfully Copied!")
    }
}
