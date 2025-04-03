const Jbutton = document.getElementById("getjoke");
const joke = document.getElementById("myjoke");

async function randomJokes() {
    try {
        // Use your deployed server URL if it's live; otherwise, keep 'localhost' for local dev.
        const response = await fetch("https://modson-jokes.onrender.com/random/")

            .catch(() => {
                throw new Error("Network error: Server is unreachable");
            });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data); // Log fetched data for debugging
        joke.innerText = data.tipText || "No joke text found."; // Display the joke text

    } catch (error) {
        console.error("Error fetching data:", error.message);
        joke.innerText = `⚠️ ${error.message}`; // Display error in the UI for the user
    }
}


Jbutton.addEventListener('click', randomJokes);
document.querySelector('.menu-icon').addEventListener('click', function() {
    const navLink = document.querySelector('.nav-link');
    navLink.classList.toggle('open');  // Toggle the "open" class
});
