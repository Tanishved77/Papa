document.addEventListener("DOMContentLoaded", function () {
    const jokeContainer = document.getElementById("joke-text");

    // Get a new joke and update the content
    const dailyJoke = getDailyJoke();
    jokeContainer.textContent = dailyJoke;
});
