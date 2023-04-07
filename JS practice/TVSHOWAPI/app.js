const form = document.querySelector(".form");
const input = document.querySelector(".title");
const imageContainer = document.querySelector(".movies-display");

const searchImage = async(userInput) => {
    const result = await axios.get(
        `https://api.tvmaze.com/search/shows?q=${userInput}`
    );
    // clear the previous images first
    imageContainer.innerHTML = "";

    // getting the image link
    for (let i = 0; i < result.data.length; i++) {
        const imageSrc = result.data[i].show.image.medium;

        const newImg = document.createElement("img");
        newImg.setAttribute("src", imageSrc);
        imageContainer.appendChild(newImg);
    }
};

form.addEventListener("submit", async(e) => {
    e.preventDefault();
    const userInput = input.value;

    // making the api call
    try {
        searchImage(userInput);
    } catch (err) {
        console.log("COULDNT FIND IMAGE", err);
    }
    input.value = "";
});