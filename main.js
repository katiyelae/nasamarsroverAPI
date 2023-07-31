let nextPhoto = []

//event listener for get media button
document.querySelector('button').addEventListener('click', getFetch)

//function to run fetch API
function getFetch(){
  //takes input value date and stores it as choice
  const dateChoice = document.querySelector('input').value
  //url used to grab data from 
  const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${dateChoice}&api_key=4gGQ2Wh6ktqc6kLV5ryyhMnyniRCiqSOkanaYKjM`
  console.log(dateChoice) //shows us the date we chose in console

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    // push each photo object individually to the nextPhoto array
    Array.prototype.push.apply(nextPhoto, data.photos);
    console.log("data.photos", data.photos)
    console.log("nextPhoto", nextPhoto)
    document.querySelector('img').src = data.photos[0].img_src
    console.log(data)
  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}

//event listener for more photos button
document.querySelector('#getMorePhotos').addEventListener('click', morePhotos)

let currentPhotoIndex = -1

function morePhotos(){ 

  //  // Shuffle the nextPhoto array
   for (let i = nextPhoto.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nextPhoto[i], nextPhoto[j]] = [nextPhoto[j], nextPhoto[i]];
  }

  //advance to the next photo
  currentPhotoIndex++
  if(currentPhotoIndex >= nextPhoto.length){
    currentPhotoIndex = 0
  }

  //display the current photo
  for(let i = 0; i < nextPhoto.length; i++){
    if(i === currentPhotoIndex){
      document.querySelector('img').src = nextPhoto[i].img_src
    }
}
}

  //event listener for more photos button
  // document.querySelector('#getMorePhotos').addEventListener('click', morePhotos)
 

  // function morePhotos(){ 
  //   for(let i = 0; i <= fotos.length-1; i++){
  //       document.querySelector('img').src = moreFotos[i].img_src
  // }
  // }
 



//loop through all photos in object from that day
//1. i want the photo to begin with the first array object 
//2. if the index of the photos is less than or equal to the length of the object array
//3. increase the index by one and displat the photos
