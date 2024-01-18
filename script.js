import {API_ENDPOINT} from "/config.js"

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    // prevent the form submit from refreshing the page
    event.preventDefault();

    const { name, email, message } = event.target;

    // API endpoint URL
    const endpoint = API_ENDPOINT;

    // Using JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
        senderName: name.value,
        senderEmail: email.value,
        message: message.value
    });
    const requestOptions = {
        method: "POST",
        body,
    };

    fetch(endpoint, requestOptions)
        .then(async (response) => {
            // console.log(await response.json());
            if (!response.ok) throw new Error("Error in fetch");
            // return response.json();
        })
        .then((response) => {
            document.getElementById("contact-submit").innerText =
                "Email sent successfully!";
        })
        .catch((error) => {
            document.getElementById("contact-submit").innerText =
                "An unkown error occured.";
        });
});