


'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar variables
 */

const navbar = document.querySelector("[data-nav]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");


const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
    elemToggleFunc(document.body);

    

  })

}






const select = document.querySelector(".dropdown-header");
const options = document.querySelectorAll(".dropdown-header option");
 
// 1
select.addEventListener("change", function() {
  const url = this.options[this.selectedIndex].dataset.url;
  if(url) {
    localStorage.setItem("url", url);
    location.href = url;
  }
});
 










/*        FAQ      */

let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})








/**
 * go top
 */

 const goTopBtn = document.querySelector("[data-go-top]");

 window.addEventListener("scroll", function () {
 
   if (window.scrollY >= 800) {
     goTopBtn.classList.add("active");
   } else {
     goTopBtn.classList.remove("active");
   }
 
 })






 /*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
contactMessage = document.getElementById('contact-message'),
contactUser = document.getElementById('contact-user')

//check if the box is not embty
const sendEmail = (e) =>{
    e.preventDefault()

    if(contactUser.value === ''){


    contactMessage.classList.remove('color-green')
    contactMessage.classList.add('color-red')

    //Show message

    contactMessage.textContent = '*يجب أن تدخل بريدك الإلكتروني'




    setTimeout(() =>{
        contactMessage.textContent = ''
    },5000)


    } else{


        emailjs.sendForm('','','','')
        .then(() =>{

            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'تم الاشتراك بنجاح'



            setTimeout(() =>{
                contactMessage.textContent = ''
            },4000)

        }, (error) =>{
            alert('فشل الإرسال', error)
        })




        contactUser.value = ''
    }

}

contactForm.addEventListener('submit', sendEmail)




//animate vote page






function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
} else {
reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);



