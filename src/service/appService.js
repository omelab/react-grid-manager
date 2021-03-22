import Swal from 'sweetalert2'

export function createAlert() {
    try { 
        let result = Swal.fire({
            title: 'Are you sure?',
            text: "to edit this Item",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, edit it!'
        })
        return result;
    // eslint-disable-next-line no-unreachable
    } catch(e){ 
        // Fail!
        console.error(e); 
        return false;
    }
}