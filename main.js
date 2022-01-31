let colors=["rgb(247, 18, 3)","rgb(247, 236, 3)","rgb(25, 247, 3)","rgb(3, 247, 224)","rgb(3, 11, 247)", "rgb(247, 3, 191)"];
let square=document.querySelectorAll(".square");
let pickedColor=colors[2];
let colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;
let message=document.querySelector("#message")
let h1=document.querySelector("h1");
let reset= document.querySelector("#reset");


for(let i=0; i<square.length; i++){
    square[i].style.background=colors[i];
}

for (let i = 0; i < square.length; i++) {
    square[i].addEventListener("click", function(){
        
        let clickedColor=this.style.background;
        
        if(clickedColor==pickedColor){
            message.textContent="CORRECTO";
            h1.style.backgroundColor=clickedColor;
            changeColors(clickedColor);
            reset.textContent="Play Again?"
        }else{
            this.style.background="#232323"
            document.getElementById('message').innerHTML="INTENTELO NUEVAMENTE";
        }
    })
}

function changeColors(color){
    for(let i=0; i<square.length; i++){
        square[i].style.background=color;
    }
}
function randomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    return "rgb("+r+", "+g+", "+b+")"

  }

function generateRandomColors(num){
    for(let i=0;i<num;i++){
        colors[i]=randomColor();   
    }
for(let i=0; i<square.length; i++){
    square[i].style.background=colors[i];
}
}
generateRandomColors(6)

function pickColor(random){
    pickedColor=colors[random]
    colorDisplay.textContent=pickedColor;
}
pickColor(Math.floor(Math.random()*6)) 



easy.addEventListener("click", function(){
    generateRandomColors(3);
    pickColor(Math.floor(Math.random()*3));
    easy.classList.add("selected")
    hard.classList.remove("selected")
    square[3].style.display="none";
    square[4].style.display="none";
    square[5].style.display="none";
})

hard.addEventListener("click", function(){
    generateRandomColors(6);
    pickColor(Math.floor(Math.random()*6));
    hard.classList.add("selected")
    easy.classList.remove("selected")
    square[3].style.display="block";
    square[4].style.display="block";
    square[5].style.display="block";
})

reset.addEventListener("click", function(){
    h1.style.backgroundColor="black";
    reset.textContent="Nuevos Colores"
    message.textContent="";
    if(hard==6){
    generateRandomColors();
    pickColor(Math.floor(Math.random()*6));
    }else{
        generateRandomColors(3);
    pickColor(Math.floor(Math.random()*3));
    }
    
})

     