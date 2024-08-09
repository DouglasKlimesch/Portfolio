const form = document.querySelector(".form")
const mascara = document.querySelector(".mascara-form")
const containerStatus = document.querySelector(".response-status-form")


function cliquei() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"

}
function sairformulario() {
    form.style.transform = "translatex(0)"
    form.style.left = "-900px"
    mascara.style.visibility = "hidden"
    containerStatus.style.transform = "translatex(0)"
    containerStatus.style.left = "-900px"

}

function statusForm() {
    containerStatus.style.left = "50%"
    containerStatus.style.transform = "translatex(-50%)"
    mascara.style.visibility = "visible"
    form.style.transform = "translatex(0)"
    form.style.left = "-900px"

}

const formData = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("my-form-status");
    const data = new FormData(event.target);
    fetch(event.target.action, {
        method: formData.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Solicitação de orçamento enviada com sucesso ! Dentro de 24hrs entraremos em contato ";
            formData.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! Encontramos um problema tente novamente"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops!Ocorreu um problema ao enviar seu formulário"
    });
}
formData.addEventListener("submit", handleSubmit)






