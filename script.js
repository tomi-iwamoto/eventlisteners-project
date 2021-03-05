const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
box4.id = "box4";
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const divs = document.querySelectorAll('div');

/*Event listener that targets certain elements 
either by element names or classes, id*/

document.addEventListener('click', function (e) {

    //If the target is a div then do the following
    if (e.target.matches('div')) {

        console.log('I am a div!');

    }

    //If the target has the class of .box2 then do the following
    if (e.target.matches('.box2')) {

        box2.innerText = "Green";

    }

    if (e.target.matches('#box4')) {

        box4.innerText = "Light Blue"

    }


})


//If a target matches .box1 then create a new element and add a text to it
document.addEventListener('click', function (e) {

    if (e.target.matches('.box1')) {

        let newDiv = document.createElement('div');
        newDiv.classList.add('newDivStyles');
        box1.append(newDiv);
        newDiv.innerText = "Hi!";

    }

}, { once: true });


//Hover effect on box6
document.addEventListener('mouseover', function (e) {

    if (e.target.matches('.box6')) {

        box6.style.backgroundColor = "yellow";

    }

})


/*---------------Adding a single event function to two different elements------------*/
let newBox = function (e) {

    let newBox = document.createElement('div');
    newBox.classList.add('newBoxStyles');
    e.target.append(newBox);

}

/*Both these elements share the same event listener. 
Also added the parameter of 'once:true' so that it 
doesn't keep adding the new div to the same element 
once it's done.*/
box5.addEventListener('click', newBox, {once: true});
box3.addEventListener('click', newBox, {once: true});





