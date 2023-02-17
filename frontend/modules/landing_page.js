import config from "../conf/index.js";

async function init() {
  //Fetches list of all cities along with their images and description
  
  let cities = await fetchCities();
  console.log("From init()")
  // console.log(config);
  // console.log(cities);
  
  //Updates the DOM with the cities
  cities.forEach((key) => {
  
    addCityToDOM(key.id, key.city, key.description, key.image);
  });
  
}


//Implementation of fetch call
async function fetchCities() {
  // TODO: MODULE_CITIES
  // 1. Fetch cities using the Backend API and return the data
   try{let result=await fetch(config.backendEndpoint+"/cities");
    let data= await result.json();
    return data
     } 
     catch(err) {
      return null;
     }
    

}

//Implementation of DOM manipulation to add cities
function addCityToDOM(id, city, description, image) {
  // TODO: MODULE_CITIES
  // 1. Populate the City details and insert those details into the DOM

  let idelement=document.getElementById("data");
  // idelement.innerText=city;
  let divelement=document.createElement("div")
  divelement.className="col-sm-6 col-lg-3 mb-4"
  divelement.innerHTML=`
  <a href="pages/adventures/?city=${id}" id="${id}">
  <div class="tile" >
  

  <img src="${image}">
  <div class="tile-text ">
  
  <h5> ${city}</h5>
   <p>${description}</p>
  

  </div>
  

</div>
</a>
  `
  

  idelement.appendChild(divelement);
  console.log(idelement);

}

export { init, fetchCities, addCityToDOM };
