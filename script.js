function showLab(labId){

    document.getElementById("lab1").style.display = "none";
    document.getElementById("lab2").style.display = "none";
    document.getElementById("lab3").style.display = "none";

    document.getElementById(labId).style.display = "flex";

}

function showLab(labId) {

let labs = document.querySelectorAll(".lab-gallery");

labs.forEach(function(lab){
lab.style.display = "none";
});

document.getElementById(labId).style.display = "flex";
}

const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
e.preventDefault()

fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {
msg.innerHTML = "Message sent successfully!"
setTimeout(function(){
msg.innerHTML = ""
},5000)
form.reset()
})
.catch(error => console.error('Error!', error.message))
})
