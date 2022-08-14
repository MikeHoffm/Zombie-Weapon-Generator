let weapons = ['🥑 avocado','🐈 cat','🗡️ dagger','💣 bomb','🛡️ shield', '🔫 gun', '🎸 guitar', '🏹 bow'] //Creates an array of 7 items


//code that generates a random weapon when clicked for button1
//also plays pop1

document.querySelector(".box1").addEventListener("click", function ()
{
    let audio = new Audio("sounds/pop1.mp3");
    audio.play();
let randomNumber1 = Math.floor(Math.random()*8); //Random number 0-7
let randomizeWeapon1 = weapons[randomNumber1]; //Randomly selects one of the array items
let randomGenerator1 = document.querySelector(".box1").innerHTML = randomizeWeapon1; //Changes text value from 'random weapon' to randomizeWeapon1
return randomizeWeapon1;
});


//code that generates a random weapon when clicked for button2
//also plays pop2

document.querySelector(".box2").addEventListener("click", function()
{
    let audio2 = new Audio("sounds/pop2.mp3");
    audio2.play();
    let randomNumber2 = Math.floor(Math.random()*8);
    let randomizeWeapon2 = weapons[randomNumber2];
    let randomGenerator2 = document.querySelector(".box2").innerHTML = randomizeWeapon2;
    return randomizeWeapon2;
});

//Work on implementing this to work
if (randomizeWeapon1 === randomizeWeapon2) {
    document.querySelector("h2").textContent="Two for the price of one";
} else if (randomizeWeapon1 <=weapons[1]) {
    document.querySelector("h2").textContent="Good luck with that.";
} else {
    document.querySelector("h2").textContent="Not too bad!"
}
