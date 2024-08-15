const form = document.querySelector(".form")
const mascara = document.querySelector(".mascara-form")
const containerStatus = document.querySelector (".response-status-form")


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

// projetos
const menuProjectsMac = [

    './img-port/tatto-mac.png' ,
    
    './img-port/joias-mac.png' ,
    
   './img-port/jokenpo-mac.png',
    
    './img-port/burguer-mac.png',
    
    './img-port/d-k-mac.png'
    
    
    ];
    const menuProjectsPhone = [

        './img-port/tatto-iphone.png' ,
        
        './img-port/joias-iphone.png' ,
        
       './img-port/jokenpo-iphone.png',
        
        './img-port/burguer-iphone.png',
        
        './img-port/d-k-iphone.png' 

        
        
        ];
        const menuProjectsTablet = [

            './img-port/tatto-ipad.png' ,
            
            './img-port/joias-ipad.png' ,
            
           './img-port/jokenpo-ipad.png',
            
            './img-port/burguer-ipad.png',

            './img-port/d-k-ipad.png'
            
            
            ];

            const menuHref=[

                'https://jokenpo-dk.netlify.app/',
                'https://d-k.com'

            ]




            
  const imageMac= document.getElementById('desk-projects');
  const imagePhone= document.getElementById('phone-projects');
  const imageTablet= document.getElementById('tablet-projects');
  const buttonProjects=document.querySelector('.buttonProjects')
  const  buttonProjects2 = document.querySelector('.buttonProjects2')
  let currentImg=1;
  let currentImgPhone=1
  let currentImgTablet=1

  setInterval(function() {
    trocar();
       
  },6000)

  function trocar () {
    if( currentImg == menuProjectsMac.length){
        currentImg=0
    }
   imageMac.src= menuProjectsMac[currentImg];
    currentImg++;

    trocarPhone()
    trocarTablet()
    
  
  }  

  function trocarPhone () {
    if( currentImgPhone == menuProjectsPhone.length){
        currentImgPhone=0
    }
   imagePhone.src= menuProjectsPhone[currentImgPhone];
    currentImgPhone++;
    
  }
 

  function trocarTablet () {
    if( currentImgTablet == menuProjectsTablet.length){
        currentImgTablet=0
    }
   imageTablet.src= menuProjectsTablet[currentImgTablet];
    currentImgTablet++;
    
  }

  

  function changeHref() {
 const href=1
    const link = document.querySelector('.link-projects')

    if (link.href == menuHref.length){
        href=0
    }
    href.href=menuHref[href]
    href++
    console.log( href)
  }





buttonProjects.addEventListener('click',trocar)
buttonProjects2.addEventListener('click',trocar)



