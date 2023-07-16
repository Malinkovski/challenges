//__________________________________________________________________________
//Variables

const API_URL = "https://challenges.brainster.tech/ajax_data/data.json";
const filterInputs = document.querySelectorAll(".filter-option input");
const container = document.querySelector("#bikes");
let productsArray = [];

//Fetching cards from the api url
fetch(API_URL)
  .then((res) => res.json())
  .then((data) => {
    productsArray = data.products;
    displayCards(productsArray);
    populateAllBadges();
  })
  .catch((error) => {
    console.error("Error fetching data from the URL:", error);
  });

//__________________________________________________________________________
//Functions

function createCards(product) {
  const container = document.querySelector("#bikes");
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML += `
	<div class="inner-card">
		<div class="card-image">
			<img src="./img/${product.image}.png" alt="${product.name}" />
		</div>
		<div class="card-content">
			<h3 class="card-title">${product.name}</h3>
			<p class="card-price">${product.price} $</p>
		</div>
	</div>
	`;
  container.appendChild(card);
  card.offsetHeight;
  card.classList.add("show");
}

function displayCards(array) {
  container.innerHTML = "";
  array.forEach((product) => {
    createCards(product);
  });
}

//filtering the cards by the selected value in the imputs
function filterArray(destination, array) {
  const value = document.querySelector(`#${destination}`).value.toUpperCase();
  if (value === "ALL") {
    return array;
  }
  return array.filter(function (product) {
    if (value === "MALE" || value === "FEMALE") {
      return product.gender.toUpperCase() === value;
    } else {
      return product.brand.toUpperCase() === value;
    }
  });
}

// Function to populate all badges
function populateAllBadges() {
  filterInputs.forEach((input) => {
    const destination = input.getAttribute("id");
    populateBadgeData(destination, productsArray);
  });
}

function populateBadgeData(destination, array) {
  const badge = document.querySelector(`label[for="${destination}"] .badge`);
  badge.textContent = filterArray(destination, array).length;
}

//__________________________________________________________________________
//Filtering method

filterInputs.forEach((input) => {
  input.addEventListener("click", () => {
    const destination = input.getAttribute("id");
    const filteredObjects = filterArray(destination, productsArray);
    displayCards(filteredObjects);
  });
});
