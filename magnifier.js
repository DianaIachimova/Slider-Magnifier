var imageArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
var index=0;
const imgs = document.querySelectorAll('img.Slide');
const imgsArr = Array.from(imgs);
const img = document.getElementById('image');
const result =document.getElementById('result');
var ix = 5;
let tmp = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
var current = '1.jpg';



imgsArr.forEach( (el, i) => {
  el.addEventListener('click', (e) => {
    img.src = e.path[0].currentSrc;
    current = e.path[0].currentSrc;
      index = i;   
      imageZoom(); 
  })   
})



window.addEventListener('load', () => {
  img.src = imageArray[index]; 
  
  lens = document.createElement("DIV");
  lens.setAttribute("class", "lens");
  img.parentElement.insertBefore(lens, img);
  imageZoom();
})


function imageZoom() {
    var  cx, cy;

    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    
    result.style.backgroundImage = `url(${current})`;
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
   
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);

    function moveLens(e) {
      var pos, x, y;
      e.preventDefault();
     
      pos = getCursorPos(e);
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      

      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      //where is it
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      //get position DOM
      a = img.getBoundingClientRect();
      //calculate coordonates
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }

}


function Up(){
  if(ix < 0) {
    ix = 5;
  }
  tmp.unshift(imageArray[ix]);
  tmp.pop();
  ix--;

  imgsArr.forEach( (el, i) => {
    el.src = tmp[i];
  });

}

function Down(){

  if(ix > 5) {
    ix = 0;
  }
  
  tmp.push(imageArray[ix]);
  tmp.shift();
  ix++;
  
  imgsArr.forEach( (el, i) => {
    el.src = tmp[i];
  });

    
}








