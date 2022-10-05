import swal from "sweetalert2";

function ShowPopUp(htmlCode){
    switch(htmlCode) {
        case 200:
            swal.fire({
                title: "Głos oddany poprawnie.",
                text: "Dziękujemy za udział w konsultacjach.",
                timer: 2500,
                icon: "success",
                showConfirmButton: false
            })
            break;
        case 455:
            swal.fire({
                title: "Głos nieważny!",
                text: "Pesel już został wykorzystany",
                icon: "error",
                showConfirmButton: true
            })
            break;
        case 456:
            swal.fire({
                title: "Głos nieważny!",
                text: "Pesel nieważny",
                icon: "error",
                showConfirmButton: true
            })
            break;
        case 457:
            swal.fire({
                title: "Głos nieważny!",
                text: "Start głosowania: 23:59:59 - 30.09.2022",
                icon: "error",
                showConfirmButton: true
            })
            break;
        case 458:
            swal.fire({
                title: "Głos nieważny!",
                text: "Głosowanie zostało zakończone: 23:59:59 - 20.10.2022",
                icon: "error",
                showConfirmButton: true
            })
            break;
        case 400:
            swal.fire({
                title: "Błąd!",
                text: "Nieznany błąd. Spróbuj ponownie później.",
                timer: 2000,
                icon: "error",
                showConfirmButton: false
            })
            break;
        default:
            swal.fire({
                title: "Błąd!",
                text: "Nieznany błąd. Spróbuj ponownie później.",
                timer: 2000,
                icon: "error",
                showConfirmButton: false
            })
            break;
    }
}

export { ShowPopUp }