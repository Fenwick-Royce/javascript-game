var character = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}

var checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputerStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputerStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        alert("try again!");
    }
}, 10);