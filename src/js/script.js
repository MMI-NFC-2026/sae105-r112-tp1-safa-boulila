const aMettreEnRouge = document.querySelector("a-mettre-en-rouge");
 aMettreEnRouge.style.color = "red";
const enRouge = document.querySelector("en-rouge-suite-a-click");
enRouge.addEventListener("click", (evt) =>{ 
  enRouge.style.color = "red";
});
const collH2 = document.querySelectorAll("h2");
collH2.forEach((elm) => {
  elm.addEventListener("click", (evt) => {
    evt.target.style.color = "red";
    });
});