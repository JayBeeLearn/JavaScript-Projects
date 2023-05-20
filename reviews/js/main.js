// local reviews data
const reviews = [
  {
    id: 1,
    name: "Jahaziel Uko",
    job: "web developer",
    img: "../images/person-2.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Hon Nkanteen",
    job: "Entrepreneur",
    img: "../images/person-3.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "../images/person-4.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "Chidera Ibe",
    job: "Student",
    img: "../images/person-5.png",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const img = document.getElementById("person-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const review = document.getElementById("review");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const randomBtn = document.getElementById("randomBtn");

// rev = [{
//     name: 'Jahaziel',
//     picture: '../images/person-2.jpg'
// }]

// img.src = rev[0].picture;
// console.log(img)
// console.log(rev[0].picture)

currentPerson = 0;

const showPerson = (personIndex) => {
  person = reviews[personIndex];
  img.src = person.img;
  name.textContent = person.name;
  job.textContent = person.job;
  review.textContent = person.text;
};
nextBtn.addEventListener("click", () => {
  currentPerson++;
  if (currentPerson > reviews.length - 1) {
    currentPerson = 0;
  }
  showPerson(currentPerson);
  //   console.log(currentPerson);
});

prevBtn.addEventListener("click", () => {
  currentPerson--;
  if (currentPerson < 0) {
    currentPerson = reviews.length - 1;
  }
  showPerson(currentPerson);
});

const randomPerson = () => {
    random = Math.floor(Math.random() * reviews.length);
    
    return random;
};
randomBtn.addEventListener("click", () => {
    showPerson(randomPerson())
    console.log(randomPerson())
});


// console.log(randomPerson())