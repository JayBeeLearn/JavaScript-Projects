const cardsBox = document.getElementById("cardsBox");

const addCards = document.getElementById("addCards");
const removeCards = document.getElementById("removeCards");

const cardsImagesArray = [];

clickCount = 8;

addCards.addEventListener("click", addCard);
function addCard() {
  if (clickCount >= 1) {
    ci = document.createElement("img");
    r = Math.floor(Math.random() * 10);
    i = ci.src = `images/${r}.png`;
    ci.classList.add('cover')
    c = ci.id = r;
    cardsBox.append(ci);
    cardsImagesArray.push(ci);
    clickCount--;
  }
}
// clickCount = 2

removeCards.addEventListener("click", removeCard);

function removeCard() {
  console.log(cardsImagesArray);
  const cardsImages = document.querySelectorAll("img");
  for (i = 0; i <= cardsImages.length - 1; i++) {
    cardsBox.removeChild(cardsImages[i]);
  }
}

// console.log(clickCount);
// const cardsImages = document.querySelectorAll("img");

// console.log(cardsImagesArray);

// cardsImagesArray.forEach((item) => {
//     item.onclick = () => function () {
//         alert('hi');
//     }
// })

function compare() {
  for (i = 0; i <= cardsImagesArray.length - 1; i++) {
    cardsImagesArray[i].addEventListener("click", function () {
      for (i = 0; i <= cardsImagesArray.length - 1; i++) {
        console.log(cardsImagesArray[i].id);

        if (cardsImagesArray[i].id != 2) {
          alert("not 2");
        } else {
          alert("its 2");
        }
        // console.log(cardsImagesArray[i].id);
      }
    });
    // console.log(cardsImagesArray[i]);
  }
}

// compare();
