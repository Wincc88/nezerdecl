
const boxescontainer = document.querySelector(".holdboxes");
const allBoxes = document.querySelectorAll(".box");
const boxOne = document.querySelector("#boxone");
const previousBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const sliderRadios = document.querySelectorAll('.allradios input[type="radio"]');
const sliderOne = document.querySelector('#rad1');
const downUpBtn = document.querySelector('#downUp');
const upToggleBtn = document.querySelector('#updown');
const revealDemo = document.querySelector('#demoDemo');

let currentIndex = 0;
let navOpen = false;
console.log(navOpen);


function showBox(index) {

    //keep track of when active and index it 
    currentIndex = (index + allBoxes.length) % allBoxes.length;
        // modulo used, divion gives fraction/decimal invalid for position
    
    
    allBoxes.forEach((box, boxIndex) => {
        const boxActive = boxIndex === currentIndex;
        if(boxActive) {
            box.style.display = 'flex';
        }
        else {
            box.style.display = 'none';
        }
    });

        
     
        // also get current sliderRadio index to be matched to boxes
    sliderRadios.forEach((radio, radioIndex) => {
        radio.checked = radioIndex === currentIndex;
        console.log(currentIndex);
    });
}

previousBtn.addEventListener('click', () => {
    showBox(currentIndex - 1);
    
});

nextBtn.addEventListener('click', () => {
     showBox(currentIndex + 1);
   
});

sliderRadios.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        if(radio.checked) {
        showBox(index);
        //console.log(index);
        }
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        showBox(currentIndex + 1);
        
    }

    if (event.key === 'ArrowLeft') {
        showBox(currentIndex - 1);
       
    }
});
showBox(0);

lucide.createIcons();



downUpBtn.addEventListener('click', () => {
    revealDemo.style.display = 'flex';
    upToggleBtn.style.display = 'flex';
    downUpBtn.style.display = 'none';
    
});


upToggleBtn.addEventListener('click', () => {
downUpBtn.style.display = 'flex';
revealDemo.style.display = 'none';
upToggleBtn.style.display = 'none';

});
     

    
   
   
   