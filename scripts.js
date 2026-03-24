const form = document.querySelector(".fale-conosco")
const mascara = document.querySelector(".mascara-form")

function mostrarForm (){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    form.style.transition = "1s"
    mascara.style.transition = "1s"
    mascara.style.visibility = "visible"
}

function esconderForm (){
    form.style.left = "-300px"
    form.style.transform = "translateX(0)"
    form.style.transition = "1s"
    mascara.style.transition = "1s"
    mascara.style.visibility = "hidden"
}