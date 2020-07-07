let currentTopic = "home";
// let nav = {};
// nav = {
//     "home": document.getElementById("home"),
//     "about": document.getElementById("about"),
//     "skills": document.getElementById("skills"),
//     "project": document.getElementById("project"),
//     "contact": document.getElementById("contact"),
// }
// nav["about"].remove();
// nav["skills"].remove();
// nav["project"].remove();
// nav["contact"].remove();

function changeMain(topic) {
    console.log(topic, currentTopic);
    // console.log(nav[topic]);
    document.getElementById(currentTopic).remove();
    document.getElementById("root").appendChild(nav[topic]);
    currentTopic = topic;
    // document.getElementById('navbar').classList.toggle('inactive');
    document.getElementById('navbar').classList.toggle('active1');
    document.getElementById(currentTopic).addEventListener('click', function(e) {
        document.getElementById('navbar').classList.remove('active1');
        // document.getElementById('navbar').classList.add('inactive');
    })
    if (topic == 'project') {
        let $btns = $('.project .button-group button');
        $btns.click(function(e) {
            console.log($(e.target).attr('data-filter'))
            $('.project .button-group button').removeClass('active');
            e.target.classList.add('active');

            let selector = $(e.target).attr('data-filter');
            $('.project .grid').isotope({
                filter: selector
            });

            return false;
        })
        $('.project .button-group #btn2').trigger('click');
        $('.project .button-group #btn1').trigger('click');
        setTimeout(() => {}, 800);
    }
}
document.getElementById(currentTopic).addEventListener('click', function(e) {
    document.getElementById('navbar').classList.remove('active1');
    // document.getElementById('navbar').classList.toggle('inactive');
})

document.getElementById("hamburger").addEventListener('click', function(e) {
    document.getElementById('navbar').classList.toggle('active1');
    // document.getElementById('navbar').classList.toggle('inactive');
})

function home() {
    document.getElementsByClassName("activetopic")[0].remove();
    document.getElementById("root").innerHTML += `<main id="home" class="activetopic">
    <div class="intro">
    <h1><span id="hey">Hey</span> <br> <span id="iam"> I am <br>Vijay Akash</span></h1>
    <h3>Full Stack Developer</h3>
    <a href="mailto:vjbakash@gmail.com"><button type="button" class="button primary-button homebtn1" ><i class="fa fa-envelope"></i>&nbsp;&nbsp;Mail me</button></a> &nbsp;
    <button type="button" class="button secondary-button homebtn2">Get Resume</button>
    </div>
    <div class="vectorArt">
    <img src="vj1.png" alt="vijay vector art">
    </div>
    </main>`
}

function skills() {
    document.getElementsByClassName("activetopic")[0].remove();
    document.getElementById("root").innerHTML += `<main id="skills" class="activetopic">
    <h1>Skills</h1>
    <div id="skills-list">
        <div class="skill1">
            <div class="skillName">
                <h3><span class="heart"> &#10084;</span> &nbsp;Love for programming - Advanced</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="advanced" style="background-color:  #23b6fa; width: 100%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>JavaScript - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>TypeScript - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>Python - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>C Programming - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>HTML5 - Advanced</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="advanced" style="background-color: #23b6fa; width: 100%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>CSS3 - Advanced</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="advanced" style="background-color: #23b6fa; width: 100%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>MySql - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>MongoDB - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>Express.js - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>Angular - Advanced</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="advanced" style="background-color: #23b6fa; width: 100%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>Node.js - Intermediate</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="indermediate" style="background-color: #23b6fa; width: 75%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
        <div class="skill">
            <div class="skillName">
                <h3>Bootstrap - Advanced</h3>
            </div>
            <div id="progressbar" style="background-color: black; border-radius: 13px; padding: 3px;">
                <div class="advanced" style="background-color: #23b6fa; width: 100%;  height: 20px;border-radius: 10px;"></div>
            </div>
        </div>
    </div>
</main>`
}

function project() {
    document.getElementsByClassName("activetopic")[0].remove();
    document.getElementById("root").innerHTML += `<main id="project" class="project activetopic" >
    <!-- <h1 style="text-align: center;">Project Yet to be Added <br>Visit later to see all the projects </h1> -->
    <div class="button-group">
        <button type="button" class="active" id="btn1" data-filter="*">All</button>
        <button type="button" data-filter=".fullstack">Full Stack</button>
        <button type="button" id="btn2" data-filter=".frontend">Frontend App</button>
        <button type="button" data-filter=".npm">Npm Package</button>
        <button type="button" data-filter=".upcoming">Upcoming</button>
    </div>
    <div class="project-list grid">
        <div class="project-item element-item fullstack">
            <div class="img">
                <a href="https://drivestack.netlify.app/#/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/drivestack.png" alt="portfolio-1" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title">
                <span class="project-title">Drive stack</span> <br>
                <span class="text-secondary ">A demo SPA for providing cloud storage for the users with the help of AWS S3</span>
                <p style="font:normal bold 17px/30px var(--roboto);">TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/mongodb.png" /><img src="https://img.icons8.com/color/48/000000/angularjs.png"
                    /><img src="https://img.icons8.com/color/48/000000/nodejs.png" />&nbsp;<img src="https://img.icons8.com/color/48/000000/amazon-web-services.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://covid19visualizer.netlify.app/#/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/covid.JPG" alt="portfolio-1" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">Covid-19 Visualizer</span> <br>
                <span class="text-secondary ">covid-19 cases tracker for india</span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/angularjs.png" /></p>
            </div>
        </div>
        <div class="project-item element-item fullstack">
            <div class="img">
                <a href="https://xsurl.netlify.app/#/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/urlshort.png" alt="portfolio-1" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title">
                <span class="project-title">URL Shortener</span> <br>
                <span class="text-secondary ">Url shortening single page application</span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/mongodb.png" /><img src="https://img.icons8.com/color/48/000000/angularjs.png"
                    /><img src="https://img.icons8.com/color/48/000000/nodejs.png" /></p>
            </div>
        </div>
        <div class="project-item element-item upcoming">
            <div class="img">
                <a>
                    <div class="container">
                        <img src="./img/projects/comingsoon.jpg" alt="portfolio-1" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <!-- <div class="overlay">open project</div> -->
                    </div>
                </a>
            </div>
            <div class="title">
                <span class="project-title">Stone Bench</span> <br>
                <span class="text-secondary ">Peer-to-Peer video conferencing application using WebRTC</span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/javascript.png" /><img src="https://img.icons8.com/color/48/000000/nodejs.png"
                    /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/FreskDesk-Hackathon/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/freshdesk.JPG" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title">
                <span class="project-title">Fresh Desk</span> <br>
                <span class="text-secondary ">A Fresh Desk ticket and contact manager[single page app] build with FreshDesk api</span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/typescript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item npm">
            <div class="img">
                <a href="https://www.npmjs.com/package/funcwizard" target="_blank">
                    <div class="container">
                        <img src="./img/projects/funcwizard.JPG" alt="portfolio-1" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">funcwizard</span> <br>
                <span class="text-secondary ">A npm package with functions that make developing process easier </span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/javascript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/NewYorkTimes-TopNEWS/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/nyt.JPG" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">New York Times-TopNews</span> <br>
                <span class="text-secondary ">A web App to get the top stories of New York Times based on sections </span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/javascript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/Mini-Game/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/minigame.JPG" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">Mini Games</span> <br>
                <span class="text-secondary ">A single page application that contains "hangman" and "tic-tac-toe" </span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/javascript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/Music-Player/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/musicplayer.png" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">Music Player</span> <br>
                <span class="text-secondary ">A Simple Music player which shows songs in different catagories </span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/typescript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/Timer-Cricket/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/timercricket.JPG" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">Timer Cricket Game</span> <br>
                <span class="text-secondary ">A Simple Cricket Game  in which each team score by hitting given value within 60 secs </span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/typescript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/Number-to-Word/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/numbertoword.JPG" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">Number to Word Convertor</span> <br>
                <span class="text-secondary ">An application to convert the number into words </span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/javascript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/Simple-Calculator/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/calc.JPG" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">Simple Calculator</span> <br>
                <span class="text-secondary ">An application to perform basic arithmetics</span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/javascript.png" /></p>
            </div>
        </div>
        <div class="project-item element-item frontend">
            <div class="img">
                <a href="https://vjakash.github.io/World-Countries-Temperature/" target="_blank">
                    <div class="container">
                        <img src="./img/projects/restcontries.JPG" alt="project-2" class="img-fluid" style="border-radius: 5px;border: 1px solid black;">
                        <div class="overlay">open project</div>
                    </div>
                </a>
            </div>
            <div class="title ">
                <span class="project-title">World-Countries</span> <br>
                <span class="text-secondary ">A web that shows details about all countries and their current weather </span>
                <p>TECH STACK: <br> <img src="https://img.icons8.com/color/48/000000/html-5.png" /><img src="https://img.icons8.com/color/48/000000/css3.png" /><img src="https://img.icons8.com/color/48/000000/javascript.png" /></p>
            </div>
        </div>
    </div>
</main>`;
    let $btns = $('.project .button-group button');
    $btns.click(function(e) {
        console.log($(e.target).attr('data-filter'))
        $('.project .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project .grid').isotope({
            filter: selector
        });

        return false;
    })
    $('.project .button-group #btn2').trigger('click');
    $('.project .button-group #btn1').trigger('click');
    setTimeout(() => {}, 800);
}

function contact() {
    document.getElementsByClassName("activetopic")[0].remove();
    document.getElementById("root").innerHTML += `<main id="contact" class="activetopic">

    <div class="contactImg">
        <img src="aboutus1.png" id="profileImg" alt="contact">
    </div>
    <div class="info">
        <h1 id="profile" style="border-bottom: 2px solid black;">Profile</h1>
        <div class="details">
            <span class="contact1">
                <h3><i class="fa fa-user"></i>&nbsp;Name</h3>
               <p > Vijay Akash A</p>
            </span>
            <span class="contact1">
                <h3><i class="fa fa-envelope"></i>&nbsp;Email</h3>
                <a href="mailto:vjbakash@gmail.com">vjbakash@gmail.com</a>
            </span>
            <span class="contact2">
                <h3><i class="fa fa-mobile"></i>&nbsp;Contact</h3>
                <a href="tel:+918870709119">(+91) 88707 09119</a>
            </span>
            <span class="contact2">
                <h3><i class="fa fa-location-arrow"></i>&nbsp;Location</h3>
               <p>Chennai,India</p>
            </span>
            <span class="contact3">
                <h3><img src="https://img.icons8.com/android/24/000000/linkedin.png" style="transform: scale(0.9);"/>&nbsp;LinkedIn</h3>
               <p ><a href="https://www.linkedin.com/in/vjakash/" target="_blank">view profile</a></p>
            </span>
            <span class="contact3">
                <h3><img src="https://img.icons8.com/material-rounded/24/000000/github.png"/>&nbsp;GitHub</h3>
                <a href="https://github.com/vjakash" target="_blank">@vjakash</a>
            </span>

        </div>
    </div>
</main>`
}

function about() {
    document.getElementsByClassName("activetopic")[0].remove();
    document.getElementById("root").innerHTML += ` <main id="about" class="activetopic">
    <div id="about-container">
        <h2>
            <span>Let me</span><br>
            <span>introduce</span><br>
            <span>myself</span><br>
        </h2>

        <p class="para">
            Mission-driven full stack developer with a passion for building a product that solves problem with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong backend.
        </p>
        <p class="para">
            My core competency lies in creating applications from its inception.I primarily work in MEAN stack among the full stack technologies.
        </p>
        <p class="para">
            As a full stack developer, I enjoy using my obsessive attention to detail, my unequivocal love for making things, and my mission-driven work ethic to literally change the world.
        </p>
        <p class="para">
            Feel free to take a look at my projects
        </p>
        <button type="button" class="button" id="downloadid">Download Resume</button>
    </div>
</main>`;

}