const form = document.querySelector(".form")
const mascara = document.querySelector(".mascara-form")

function cliquei() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
   
}
function sairformulario(){
    form.style.transform = "translatex(0)"
     form.style.left = "-900px"   
    mascara.style.visibility = "hidden"

}