let imageDiv = document.getElementById("thumbnail_list")
let images = imageDiv.getElementsByTagName("img")
let mainImage = document.getElementById("mainImg")
let topHeading = document.getElementById("topic")
let introduction = document.getElementById("intro")
let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');

//change background colour
function changeBackgroundColor(getColor) {
    let bc = document.querySelector('.background');
    bc.style.background = getColor.value;
}

function changeFontColor(getColor) {
    const change = document.querySelector('.background');
    change.style.color = getColor.value;
}

//set description according to selected picture
function setDetails(topic) {
    let heading;
    let description;
    switch (topic) {
        case "jab":
            heading = "THE JAB";
            description = "Assume fighting stance with your fists in guard position.,<br>" +
                "Extend your lead arm straight ahead, keeping your fist in line with its starting point <br>" +
                "Return your fist quickly back to your face. <br> " +
                "The jab is meant to be more of a rapid movement than a powerful one, <br> " +
                "so keep this in mind as you practice, <br>"
            break;
        case "cross":
            heading = "THE CROSS";
            description = "Assume the same fighting stance with fists in guard position. <br> " +
                "You will pivot on your back foot as you rotate your hips,<br> " +
                "angling your body towards the front <br>" +
                "Rotate your body back to fighting stance and return your rear hand to guard position<br>"
            break;
        case "lead_hook":
            heading = "THE LEAD HOOK";
            description = "Start in your fighting stance with fists in guard position,Rotate your body into a forward position to transfer your weight on your lead leg;<br> " +
                "Bring your lead arm up to shoulder-height with your elbow bent at a 90-degree angle. <br> " +
                "Pivot on your lead leg while rotating your body to follow your fist <br> " +
                "Your arm will remain bent at the elbow at a roughly 90-degree angle and your elbow should end up almost in front of your face as you follow-through <br>"
            break;
        case "rear_hook":
            heading = "THE REAR HOOK";
            description = "Start in your fighting stance with fists in guard position <br> " +
                "Bring your rear arm to shoulder height with your elbow bent at a 90-degree angle. <br> " +
                "Pivot on your rear foot while rotating your hips and body.<br>" +
                "Again, your elbow will remain bent and should be almost in front of your face as you deliver your hook punch"
            break;
        case "lead_uppercut":
            heading = "THE LEAD UPPERCUT";
            description = "Assume fighting stance with fists in guard position,Bend your knees into a low squat,<br>" +
                "Drop your lead arm to a 90-degree angle from your body <br> " +
                "Using the power from your legs and body, drive your fist upwards into a punch keeping your elbow bent <br>"
            break;

             break;
        case "rear_uppercut":
             heading = "THE REAR UPPERCUT";
             description = "Start in your boxing stance. Imagine your opponent's head being at mid-to-close distance.<br>" +
                  "Shift your weight a little bit to the front foot, lower your stance slightly and drop your front arm about one foot to create enough space to generate power.<br> " +
                  "Keep your back hand up, protecting your chin at all times.<br>"
             break;
    }
    topHeading.innerHTML = heading;
    introduction.innerHTML = description;

}

for (let i = 0; i < images.length; i++) {
    let image = images[i];
    image.addEventListener("mouseover", function () {
        mainImage.src = this.src
    })
}

// change font size
function changeFontSize(size) {
    switch (size) {
        case "small":
            topHeading.style.fontSize = '2em'
            introduction.style.fontSize = '1em'
            break;
        case "medium":
            topHeading.style.fontSize = '3em'
            introduction.style.fontSize = '1.5em'
            break;
        case "large":
            topHeading.style.fontSize = '3.5em'
            introduction.style.fontSize = '1.75em'
            break;
    }
}

//set active state to fonts
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function () {
        let current = document.getElementsByClassName('active');
        current[1].className = current[1].className.replace('active', "");
        this.className += " active"
    })
}

