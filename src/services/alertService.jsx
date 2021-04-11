

import Swal from 'sweetalert2';

const FinishAlert = (alertMessage) => {

    Swal.fire({
        title: alertMessage,
        text: "Do you want to replay?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: "Yes, Let's go!",
        cancelButtonText: 'No, Thanks'
    }).then((result) => {
        if (result.isConfirmed) {
            // eslint-disable-next-line no-restricted-globals
            location.reload();
        }
    })
}

const InfoAlert = (alertMessage) => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: alertMessage,
        //footer: '<a href>Why do I have this issue?</a>'
    })
}
export { InfoAlert, FinishAlert }