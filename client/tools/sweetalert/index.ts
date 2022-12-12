import Swal from 'sweetalert2'

function Test(test:any){
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
    }).then()
}


function ShowPopUp(htmlCode: number) {
    switch (htmlCode) {
        case 200:
            Swal.fire({
                title: "Success!",
                text: "Thank's for your vote",
                // timer: 2500,
                icon: "success",
                showConfirmButton: true,
                // willOpen: () => setCSSLink()
            }).then()
            break;
        case 400:
            Swal.fire({
                title: "Error",
                text: "The erver can not process your request",
                icon: "error",
                showConfirmButton: true,
                // willOpen: () => setCSSLink()
            }).then()
            break;
        default:
            Swal.fire({
                title: "Unknown error",
                text: "Try again later",
                // timer: 2000,
                icon: "error",
                showConfirmButton: true,
                // willOpen: () => setCSSLink()
            }).then()
            break;
    }

    // Set theme for popup-window
    // function setCSSLink() {
    //     let ss = document.createElement('link');
    //     ss.rel = "stylesheet";
    //     if (localStorage.getItem('theme') === 'dark') {
    //         ss.href = "src/plugins/sweetalert/swal-dark.css";
    //     } else {
    //         ss.href = "src/plugins/sweetalert/swal-light.css";
    //     }
    //     document.head.appendChild(ss);
    // }
}


export {Test, ShowPopUp}