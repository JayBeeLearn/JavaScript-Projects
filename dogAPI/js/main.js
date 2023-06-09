const dogImageDiv = document.getElementById("dogImage");
const newDogBtn = document.getElementById("newDog");

const getNewDog = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((json) => {
      dogImageDiv.innerHTML = `<img src='${json.message}' class="dog" width='300' height='300'/>`;
    });
};

// getNewDog();

newDogBtn.onclick = () => getNewDog();
