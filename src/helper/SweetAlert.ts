import Swal from "sweetalert2/dist/sweetalert2.js"

export function confirmDelation() {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(result.isConfirmed)
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
      reject()
    });
  })
}

export function confirmSoumission() {
  return new Promise((resolve, reject) => {
    Swal.fire({
      title: "Soumettre le devoir?",
      text: "Etes-vous sure de vouloir soumettre ce devoir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, soumettre!"
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(result.isConfirmed)
        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success"
        // });
      }
      reject()
    });
  })
}
