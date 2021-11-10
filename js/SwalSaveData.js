const swalFn = (msg1, msg2) => {
    let timerInterval
                Swal.fire({
                title: msg1,
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {     
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
                }).then((result) => {  
                if (result.dismiss === Swal.DismissReason.timer) {
                    Swal.fire(
                        msg2
                      )
                      setTimeout(() => {
                          Swal.close();
                          modal.style.display = "none";
                          loadHtml();
                      }, 1500);
                }
                })
    };
    
    const SwalErr = (msg1) => {
    
        $('#saleInformation').text('')
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: msg1,
    
        })
    }