const content = [
    ["cloudsbelowme2.png", "cloudsbelowme3.png"],
    ["cloudsbelowme4.png", "cloudsbelowme5.png"],
    ["cloudsbelowme6.png", "cloudsbelowme7.png"],
    ["cloudsbelowme8.png", "cloudsbelowme9.png"],
    ["cloudsbelowme10.png", "cloudsbelowme11.png"],
    ["cloudsbelowme12.png", "cloudsbelowme13.png"],
    ["cloudsbelowme14.png", "cloudsbelowme15.png"],
    ["cloudsbelowme16.png", "cloudsbelowme17.png"],
    ["cloudsbelowme18.png", "cloudsbelowme19.png"]
]

var contentCount = 0;

document.addEventListener('DOMContentLoaded', () => {
    function updateBackground() {
        const now = new Date();
        const hours = now.getHours();

        let gradient;
        if (hours >= 6 && hours < 12) {
            // Morning (6 AM to 12 PM)
            gradient = 'linear-gradient(to top, #C3D2E7, #F9FCFF)';
        } else if (hours >= 12 && hours < 18) {
            // Afternoon (12 PM to 6 PM)
            gradient = 'linear-gradient(to top, #F9FCFF, #C8E8FF)';
        } else if (hours >= 18 && hours < 21) {
            // Evening (6 PM to 9 PM)
            gradient = 'linear-gradient(to top, #C8E8FF, #69A1D2)';
        } else {
            // Night (9 PM to 6 AM)
            gradient = 'linear-gradient(to top, #69A1D2, #24223D)';
        }

        document.body.style.background = gradient;
    }

    // Initial background update
    updateBackground();

    // Update background every minute
    setInterval(updateBackground, 60000);


    newSlide();
    document.body.addEventListener('click', () => {
        newSlide();
    });
});

function newSlide(){
    const imgdiv = document.getElementById("imgdiv");
    const textdiv = document.getElementById("textdiv");

    while (imgdiv.firstChild) {
        imgdiv.removeChild(imgdiv.firstChild);
    }
    while (textdiv.firstChild) {
        textdiv.removeChild(textdiv.firstChild);
    }

    if(contentCount > content.length - 1){
        contentCount = 0;
    }

    var imgIn = document.createElement('img');
    imgIn.src = content[contentCount][0];
    var textIn = document.createElement('img');
    textIn.src = content[contentCount][1];

    imgdiv.appendChild(imgIn);
    textdiv.appendChild(textIn);
    
    contentCount ++;
}