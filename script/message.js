function message() {
    let name = prompt("Enter your e-mail: ?");
    if(name == null || name == ""){
        alert("Something went wrong. Please try again.");
    } else {
        alert(`Your message was send`);
    }
}

window.addEventListener('load', function(event) {
    message();
});