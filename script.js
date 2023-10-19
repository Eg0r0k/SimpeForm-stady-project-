const clipBtn = document.querySelector(".add-to-team__btn")
const copyText = document.querySelector(".add-to-team__link")
const alert = document.querySelector(".alert")
const closeBtn = document.querySelector(".card-2__close")
const card2 = document.querySelector(".card-2")

clipBtn.addEventListener("click",()=>{
    const inputVale = copyText.textContent.trim()
    if(inputVale)
    {
        navigator.clipboard.writeText(inputVale)
        alert.classList.add("open");
        setTimeout(() => {
            alert.classList.remove("open");
        }, 1500);
    }
   
})
closeBtn.addEventListener("click",()=>{
    card2.classList.add("close")
    setTimeout(()=>{
        card2.classList.remove("close")
    },3000)
})