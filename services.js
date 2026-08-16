
const boxescontainer = document.querySelector(".holdboxes");
const allBoxes = document.querySelectorAll(".box")
const boxOne = document.querySelector("#boxone");
const previousBtn = document.querySelector("#prevBtn");
const nextbtn = document.querySelector("#nextBtn");

let currentIndex = 0;


function showBox(index) {
    
    allBoxes.forEach(box => box.style.display = 'none');
    allBoxes[index].style.display = 'flex';
}

previousBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + allBoxes.length) % allBoxes.length;
    showBox(currentIndex);
});

nextbtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % allBoxes.length;
    showBox(currentIndex);
});
