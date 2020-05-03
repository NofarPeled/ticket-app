import Swal from 'sweetalert2';

export default {
    eventAlert,
    confirmAlert
}

function eventAlert(title, type) {
    Swal.fire({
        type,
        title,
        showConfirmButton: false,
        timer: 2000
    })
}

async function confirmAlert(title) {
    const res = await Swal.fire({
        title,
        icon: 'warning',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
    })
    return res.value ? true : false;
}