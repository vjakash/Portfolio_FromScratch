let currentTopic = "home";
let nav = {};
nav = {
    "home": document.getElementById("home"),
    "about": document.getElementById("about"),
    "skills": document.getElementById("skills"),
    "project": document.getElementById("project"),
    "contact": document.getElementById("contact"),
}
nav["about"].remove();
nav["skills"].remove();
nav["project"].remove();
nav["contact"].remove();

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