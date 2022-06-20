// Code here
document.addEventListener("DOMContentLoaded", onPageLoad)
function onPageLoad(){
    displayTheFirstBeer()
    getBeerMenu();
}
  //display first beer
  function displayTheFirstBeer(){
    fetch('http://localhost:3000/beers/1') // fetching first beer details
    .then(response=>response.json())
    .then(beer=>{
       document.getElementById("beer-name").textContent=beer.name;
       document.getElementById("beer-image").src=beer.image_url;
       document.getElementById("beer-description").textContent=beer.description

       const reviewList= document.getElementById("review-list")
        const existingReview= Array.from(reviewList.children)
        
                existingReview.forEach(review=>review.remove())

       beer.reviews.forEach(review=> {//create a list item for every review
         let newItem=document.createElement("li");
         newItem.textContent=review;
         reviewList.appendChild(newItem);
       });
    })
    .catch(error=>console.log(error))
}

//part 2
//fetch all beers and display them to nav menu section
function getBeerMenu(){
const beerList=document.getElementById("beer-list")
// delete existing item
const existingItems=Array.from(beerList.children)
      existingItems.forEach(item =>item.remove())     

fetch("http://localhost:3000/beers")
.then(response=>response.json())
.then(beers=>{
    console.log(beers)
    beers.forEach( beer=>
    {
        let beerName=document.createElement("li")
        beerName.innerText=beer.name
       beerList.appendChild(beerName)

    }
      
)
})

.catch(error=>console.log(error))
}

document.getElementById("review-form").addEventListener("submit", (e)=>{
    e.preventDefault()
     const customerReview =document.getElementById("review").value
     let newListItem=document.createElement("li")
    newListItem.innerText=customerReview
     document.getElementById("review-list").appendChild(newListItem)
            
})