const slides=document.querySelectorAll(".slide");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
const circle=document.querySelector(".circle");
let index=0;


prev.addEventListener("click",function(){
    prevSlide();
    updateCircle(); 
})

next.addEventListener("click",function(){
    nextSlide(); 
    updateCircle();
})

//circle bum  
function Circle(){
    for(let i=0; i< slides.length; i++)
    {
        const div=document.createElement("div");
        div.innerHTML=i+1;
        
        div.addEventListener('click', function () {
            indicateSlide(this)
          })

        div.id=i;
        if(i==0)
        {
            div.className="active";
        }
        circle.appendChild(div);
    }
}

Circle();

function indicateSlide(element){
    index=element.id;
    changeSlide();
    updateCircle();
}   

function updateCircle(){
    	for(let i=0; i<circle.children.length; i++){
    		circle.children[i].classList.remove("active");
    	}
    	circle.children[index].classList.add("active");  
}

function prevSlide(){
    if(index==0){
        index=slides.length-1;}  
    else{index--;}
   	changeSlide();
}

function nextSlide(){
    if(index==slides.length-1){       
        index=0;}
    else{index++;}
    changeSlide();
}

function changeSlide(){
    for(let i=0; i<slides.length; i++)
    { slides[i].classList.remove("active");}
    slides[index].classList.add("active");
}

