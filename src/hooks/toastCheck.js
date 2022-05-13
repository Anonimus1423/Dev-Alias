
export const IsErrorWasPrintedScreen = (error) => {
    let toaster = document.querySelectorAll('.toast-body')
    for(let i = 0;i<toaster.length;i++){
        if(toaster[i].children[1].innerText === error){
            return true
        }
    }
    return false
}