window.onload = function (){
    loadTypeWriting()
    main()
}



function computeAge(bornDate) {
    let diff = Date.now() - bornDate.getTime();
    let age_dt = new Date(diff); // full date-time

    return Math.abs(age_dt.getUTCFullYear() + 1 - 1970); //TODO check if you can remove the "+1"
}

function main(){
    // loading personal age
    document.getElementById("age").innerText = computeAge(new Date(1999, 22, 3)).toString()
}