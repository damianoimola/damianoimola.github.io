window.onload = function (){
    loadTypeWriting();
    // loading personal age
    document.getElementById("age").innerText = computeAge(new Date(1999, 2, 22)).toString();
}


function computeAge(bornDate) {
    let diff = Date.now() - bornDate.getTime();
    let age_dt = new Date(diff); // full date-time

    return Math.abs(age_dt.getUTCFullYear() - 1970); //TODO check if you can remove the "+1"
}