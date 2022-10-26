import swal from "sweetalert2";

export function ShowPopUp(htmlCode) {
    switch (htmlCode) {
        case 200:
            swal.fire({
                title: "Success!",
                text: "Thank's for your vote",
                timer: 2500,
                icon: "success",
                showConfirmButton: false
            })
            break;
        case 400:
            swal.fire({
                title: "Error",
                text: "The erver can not process your request",
                icon: "error",
                showConfirmButton: true
            })
            break;
        default:
            swal.fire({
                title: "Unknown error",
                text: "Try again later",
                // timer: 2000,
                icon: "error",
                showConfirmButton: true
            })
            break;
    }
}