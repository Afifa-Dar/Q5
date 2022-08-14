var form = document.getElementById("myForm");
console.log(form);
var title = document.getElementById("title");
var disc = document.getElementById("disc");
var year = document.getElementById("year");
console.log("js");
form.addEventListener("submit", function (e) {
    if (title.value == null || title.value == "") {
        e.preventDefault();
        alert("title fiels is mandatory");
        title.classList.add("error")
        title.focus();
    }
    else if (disc.value == null || disc.value == "") {
        e.preventDefault();
        alert("discription fiels is mandatory");
        disc.focus();
    }
    else if (year.value == null || year.value == "") {
        e.preventDefault();
        alert("year fiels is mandatory");
        year.focus();
    }
})
var inputFields = document.getElementsByTagName("input")  //hilight all input field
for (let input = 0; input < inputFields.length; input++) {
    inputFields[input].style.background = "grey"
}
