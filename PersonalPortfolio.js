console.log("Personal Portfolio");

var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            /*Highlights the links of Skills, Experience and Education*/
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
        var sidemenu = document.getElementById("sidemenu");
        /*Mobile menu interaction*/
                function openmenu(){
                    sidemenu.style.right = "0";
                }
                function closemenu(){
                    sidemenu.style.right = "-200px";
                }

document.addEventListener("DOMContentLoaded", function(){
/*Google contact form*/
        const scriptURL = 'https://script.google.com/macros/s/AKfycbxJ4Safl6voMAN1V2SQ61Xq6j58cbMJaawPCXM8jndnjHhhUXCoKmydC3-K0DfyB0XM/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message sent successfully"
                setTimeout(function(){
                    msg.innerHTML = ""
                }, 5000)
                form.reset();
            })
            .catch(error => console.error('Error!', error.message))
        })
})
