var typingText = document.querySelector('.text2')
var myArray =
    ["Web Developer", "Geographer", "Freelancer", "Graphic Designer", "Affiliate Marketer"];
var arrayIndex = 1;

function textReplace() {
    setInterval(timer, 5000);

    function timer() {
        if (arrayIndex < myArray.length) {
            typingText.innerHTML = myArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
        else {
            arrayIndex = 0;
            typingText.innerHTML = myArray[arrayIndex];
            arrayIndex = arrayIndex + 1;
        }
    }

    console.log(typingText)
}
textReplace();