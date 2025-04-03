const Tbuttons = document.getElementById("gettips");
const tips = document.getElementById("mytips");
const loader = document.getElementById("loader");
const bodyContainer = document.querySelector('.body-container');
const moveaway = document.querySelectorAll(".nav-link a");

document.querySelector('.menu-icon').addEventListener('click', function() {
    const navLink = document.querySelector('.nav-link');
    navLink.classList.toggle('open');
});

document.addEventListener('click', function(event) {
    console.log(event.target);
});

async function randomJokes() {
    try {

        loader.style.visibility = "visible";
        bodyContainer.classList.add('loading');


        const response = await fetch("https://modson-jokes.onrender.com/random/")

            .catch(() => {
                throw new Error("Network error: Server is unreachable");
            });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);
        if (data.tipText) {
            tips.innerHTML = `"${data.tipText}" <br><br> <button onclick="getipsbyid(${data.id})">Learn More</button>`;
        } else {
            tips.innerHTML = "No tips text found.";
        }



    } catch (error) {
        console.error("Error fetching data:", error.message);
        tips.innerText = `⚠️ ${error.message}`;
    } finally {

        loader.style.visibility = "hidden";
        bodyContainer.classList.remove('loading');
    }
}
function getipsbyid(id){
    console.log(id)

}
// Check if the current page is 'index.html'
if (window.location.pathname === "/index.html") {
    Tbuttons.addEventListener('click', () => {
        randomJokes();
    });
}


