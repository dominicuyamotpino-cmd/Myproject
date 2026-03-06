function showLab(labId){

    document.getElementById("lab1").style.display = "none";
    document.getElementById("lab2").style.display = "none";
    document.getElementById("lab3").style.display = "none";

    document.getElementById(labId).style.display = "flex";
}