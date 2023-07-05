const listMail = ["mariorossi@mail.it", "giuseppeverdi@mail.it", "pippo@mail.it", "pluto@mail.it"];
let accessAllowed = false;

const searchButton = document.getElementById("button")
searchButton.addEventListener("click", function () {
    mailToSearch = document.getElementById("mail").value
    console.log(mailToSearch)

    for (let i = 0; i < listMail.length; i++) {
        const allMail = listMail[i];
        console.log(allMail);

        if (allMail === mailToSearch) {
            console.log("trovata");
            accessAllowed = true;
        }
    }
    if (accessAllowed === true) {
        document.getElementById("access").innerHTML = "Accesso consentito";
    } else {
        document.getElementById("access").innerHTML = "Accesso non consentito";
    }
});



























