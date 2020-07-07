let currentTopic = "home";
let nav = {}
window.onload = () => {
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
}

function changeMain(topic) {
    console.log(topic, currentTopic);
    // console.log(nav[topic]);
    document.getElementById(currentTopic).remove();
    document.getElementById("root").appendChild(nav[topic]);
    currentTopic = topic;
    document.getElementById('navbar').classList.toggle('active');
    document.getElementById(currentTopic).addEventListener('click', function(e) {
        document.getElementById('navbar').classList.remove('active');
    })
}
document.getElementById(currentTopic).addEventListener('click', function(e) {
    document.getElementById('navbar').classList.remove('active');
})

document.getElementById("hamburger").addEventListener('click', function(e) {
    document.getElementById('navbar').classList.toggle('active');
})