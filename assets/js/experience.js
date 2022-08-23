AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Software Development",
    cardImage: "assets/images/experience-page/logo.png",
    place: "Vessac Software",
    time: "(April, 2022 - present)",
    desp: "<li>We found of this company.</li> <li>Worked to leading software team , give them new task and follow the missions.</li> <li>On the other hand worked with React, Flutter, Unity technologies, now we startup our ideas.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Google Developer Groups",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects, leading team and organize new events.",
  },
  {
    title: "Artificial Intelligence Society",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling educations, leading society and organize new events.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Otto AR App",
    subtitle: "Debugger",
    image: "assets/images/experience-page/otto.png",
    desp: "I debugging project, in this project we use unity for app and , react for panel.",
  },
  {
    title: "Robocam",
    subtitle: "Software Developer",
    image: "assets/images/experience-page/robocam.png",
    desp: "I use flutter for app, camera catch a photo and send server than trigger and send to app. We show in the app and send who open this photo information to server",
  },
  {
    title: "StoryHub",
    subtitle: "Software Developer",
    image: "assets/images/experience-page/logo1.png",
    desp: "Lead to team and write app with flutter, we use react for backend.",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
