// console.log("Personal Portfolio");

// var tablinks = document.getElementsByClassName("tab-links");
//         var tabcontents = document.getElementsByClassName("tab-contents");
//         function opentab(tabname){
//             for(tablink of tablinks){
//                 tablink.classList.remove("active-link");
//             }
//             for(tabcontent of tabcontents){
//                 tabcontent.classList.remove("active-tab");
//             }
            /* COMMENTHighlights the links of Skills, Experience and Education*/
        //     event.currentTarget.classList.add("active-link");
        //     document.getElementById(tabname).classList.add("active-tab");
        // }
        // var sidemenu = document.getElementById("sidemenu");
        /* COMMENT Mobile menu interaction*/
//                 function openmenu(){
//                     sidemenu.style.right = "0";
//                 }
//                 function closemenu(){
//                     sidemenu.style.right = "-200px";
//                 }

// document.addEventListener("DOMContentLoaded", function(){
/* COMMENT Google contact form*/
//         const scriptURL = 'https://script.google.com/macros/s/AKfycbxJ4Safl6voMAN1V2SQ61Xq6j58cbMJaawPCXM8jndnjHhhUXCoKmydC3-K0DfyB0XM/exec'
//         const form = document.forms['submit-to-google-sheet']
//         const msg = document.getElementById("msg")
      
//         form.addEventListener('submit', e => {
//           e.preventDefault()
//           fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//             .then(response => {
//                 msg.innerHTML = "Message sent successfully"
//                 setTimeout(function(){
//                     msg.innerHTML = ""
//                 }, 5000)
//                 form.reset();
//             })
//             .catch(error => console.error('Error!', error.message))
//         })
// })

// COMMENT Weather application
// const container = document.querySelector('.app-container');
// const search = document.querySelector('.search-box button');
// const weatherBox = document.querySelector('.weather-box');
// const weatherDetails = document.querySelector('.weather-details');
// const error404 = document.querySelector('.not-found');

// search.addEventListener('click', () =>{

//     const APIKey = '47c45aece6ed5939cf5d32797af0e8a4';
//     const city = document.querySelector('.search-box input').value;

//     if(city === '')
//         return;

//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
//     .then(response => response.json())
//     .then(json => {

        // COMMENT If the user input doesn't exist, the application will produce 404 error and display an inserted image.
//         if(json.cod === '404'){
//             container.style.height = '400px';
//             weatherBox.style.display = 'none';
//             weatherDetails.style.display = 'none';
//             error404.style.display = 'block';
//             error404.classList.add('fadeIn');
//             return;
//         }

//         error404.style.display = 'none';
//         error404.classList.remove('fadeIn');

//         const image = document.querySelector('.weather-box img');
//         const tempreature = document.querySelector('.weather-box .tempreature');
//         const description = document.querySelector('.weather-box .description');
//         const humidity = document.querySelector('.weather-details .humidity span');
//         const wind = document.querySelector('.weather-details .wind span');

//         switch(json.weather[0].main){
//             case 'Clear':
//                 image.src = 'Images/Clear.png';
//                 break;

//             case 'Rain':
//                     image.src = 'Images/Rain.png';
//                     break;

//             case 'Snow':
//                     image.src = 'Images/Snow.png';
//                     break;

//             case 'Clouds':
//                     image.src = 'Images/Cloudy.png';
//                     break;
                
//             case 'Haze':
//                     image.src = 'Images/Haze.png';
//                     break;

//             default:
//                 image.src = '';
//         }
        
//         tempreature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
//         description.innerHTML = `${json.weather[0].description}`;
//         humidity.innerHTML = `${json.main.humidity}%`;
//         wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

//         weatherBox.style.display = '';
//         weatherDetails.style.display = '';
//         weatherBox.classList.add('fadeIn');
//         weatherDetails.classList.add('fadeIn');
//         container.style.height = '590px';
//     });
// });

// ------------- VALENTINES-------------------------
// function showCustomDialog(){
//     var dialog = document.getElementById('custom-dialog');
//     dialog.style.display = 'block';
// }

// var currentFontSize = 40;

// function enLargeYes(event){
//     var yesButton = document.querySelector('.yes-button');
//     var noButton = document.querySelector('.no-button');
    
//     if(event.target === noButton){
//         currentFontSize += 10;
//         yesButton.style.fontSize = currentFontSize + 'px';
//     }
// }
    




