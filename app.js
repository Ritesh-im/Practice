let url = "https://catfact.ninja/fact";
let url2 = "https://api.thecatapi.com/v1/images/search";

// Get Cat Fact
let CatFact = document.querySelector("#CatFact");
CatFact.addEventListener("click", async () => {
  let fact = await getCatFact();
  console.log(fact);
  let p = document.querySelector("#Result");
  p.innerText = fact;
});

async function getCatFact() {
  try {
    let response = await axios.get(url);
    return response.data.fact;
  } catch (err) {
    console.log("Error -", err);
    return "No facts found.";
  }
}

//Get Cat Image
let CatImage = document.querySelector("#CatImage");
CatImage.addEventListener("click", async () => {
  let image = await getCatImage();
  console.log(image);

  let imgTag = document.querySelector("#image");
  imgTag.setAttribute("src", image);
  imgTag.width = 300;
  imgTag.alt = "Cute Cat 🐱";
});

async function getCatImage() {
  try {
    let response = await axios.get(url2);
    return response.data[0].url;
  } catch (err) {
    console.log("Error -", err);
    return "No image found.";
  }
}
