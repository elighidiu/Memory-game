

let images = ["img/croco.png", "img/elephant.png", "img/giraffe.png", "img/lion.png", "img/monkey.png", "img/pantera.png", "img/rino.png", "img/zebra.png", "img/croco.png", "img/elephant.png", "img/giraffe.png", "img/lion.png", "img/monkey.png", "img/pantera.png", "img/rino.png", "img/zebra.png"];

images.sort(() => 0.5 - Math.random());

let imgActiv = [];
let imgActivId = [];

let imgMatched = 0;

let mygame = document.querySelector(".mygame");


// creates the board for the images, adding by default the blank image
function createBoard(){
    images.forEach((image, index) => {
        var img = document.createElement("img"); //creates the img element
        img.setAttribute("data-id", index); //we set a data id for the index position
        img.src = "img/blank.png"; // same as img.setAttribute("src", "img/blank.png")

        img.addEventListener("click", flipImg); //apply function flipImg when click on img

        mygame.appendChild(img); 
        
    })
}

// comparing the images in the imgActiv arrray
function compareImg(){
    let allImages = document.querySelectorAll("img") //img see line in createBoard where element is created
    let firstId = imgActivId[0];
    let secondId = imgActivId[1];

    if(imgActiv[0]!==imgActiv[1]){
       allImages[firstId].setAttribute("src", "img/blank.png");
       allImages[secondId].setAttribute("src", "img/blank.png");
    } else {
        imgMatched ++;
        if(imgMatched===8) {
            resetGame();
            
        }
        console.log(imgMatched);
    }
    
    imgActiv = []; //removes images from array
    imgActivId = [];
}


// when i press a blank image it brings an image from array
function flipImg(){
    let imgId = this.getAttribute("data-id");
    imgActiv.push(images[imgId]); //in imgActiv we add the image from index imgId from array Images
    imgActivId.push(imgId); // adds the img id (data id, index) in the imgActivId so I can use it in the compare function 

    this.setAttribute("src", images[imgId]);
    if(imgActiv.length===2){
        setTimeout(compareImg, 300); //executes compare function after 5 sec
    //compareImg();
    }  
}

function resetGame(){
    mygame.innerHTML = "";
    createBoard();
    imgActiv = [];
    imgActivId = [];
    imgMatched = 0;
}
createBoard();