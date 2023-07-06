const listMail = ["mariorossi@mail.it", "giuseppeverdi@mail.it", "pippo@mail.it", "pluto@mail.it"];
let accessAllowed = false;

const searchButton = document.getElementById("button")
searchButton.addEventListener("click", function () {
    
    const mailToSearch = document.getElementById("mail").value
    console.log(mailToSearch)

    for (let i = 0; i < listMail.length; i++) {
        const currentMail = listMail[i];
        console.log(currentMail);

        if (currentMail === mailToSearch) {
            console.log("trovata");
            accessAllowed = true;
            break;
        }
    }
    if (accessAllowed === true) {
        document.getElementById("access").innerHTML = "Accesso consentito";
    } else {
        document.getElementById("access").innerHTML = "Accesso non consentito";
    }
});



























