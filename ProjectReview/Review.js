const reviews = [
  {
    id: 0,
    fullName: "Daenerys Targaryen",
    title: "Mother of Dragons",
    family: "House Targaryen",
    image: "daenerys.jpg",
    imageUrl: "https://thronesapi.com/assets/images/daenerys.jpg",
  },
  {
    id: 1,
    fullName: "Samwell Tarly",
    title: "Maester",
    family: "House Tarly",
    image: "sam.jpg",
    imageUrl: "https://thronesapi.com/assets/images/sam.jpg",
  },
  {
    id: 2,
    fullName: "Jon Snow",
    title: "King of the North",
    family: "House Stark",
    image: "jon-snow.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jon-snow.jpg",
  },
  {
    id: 3,
    fullName: "Arya Stark",
    title: "No One",
    family: "House Stark",
    image: "arya-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/arya-stark.jpg",
  },
  {
    id: 4,
    fullName: "Sansa Stark",
    title: "Lady of Winterfell",
    family: "House Stark",
    image: "sansa-stark.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/sansa-stark.jpeg",
  },
  {
    id: 5,
    fullName: "Brandon Stark",
    title: "Lord of Winterfell",
    family: "House Stark",
    image: "bran-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/bran-stark.jpg",
  },
  {
    id: 6,
    fullName: "Ned Stark",
    title: "Lord of Winterfell",
    family: "House Stark",
    image: "ned-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/ned-stark.jpg",
  },
  {
    id: 7,
    fullName: "Robert Baratheon",
    title: "Lord of the Seven Kingdoms",
    family: "House Baratheon",
    image: "robert-baratheon.jpeg",
    imageUrl: "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
  },
  {
    id: 8,
    fullName: "Jamie Lannister",
    title: "Lord Commander of the Kingsguard",
    family: "House Lannister",
    image: "jaime-lannister.jpg",
    imageUrl: "https://thronesapi.com/assets/images/jaime-lannister.jpg",
  },
  {
    id: 9,
   fullName: "Cersei Lannister",
    title: "Lady of Casterly Rock",
    family: "House Lannister",
    image: "cersei.jpg",
    imageUrl: "https://thronesapi.com/assets/images/cersei.jpg",
  },
  {
    id: 10,
    fullName: "Catelyn Stark",
    title: "Lady of Winterfell",
    family: "House Stark",
    image: "catelyn-stark.jpg",
    imageUrl: "https://thronesapi.com/assets/images/catelyn-stark.jpg",
  },
];

const img = document.getElementById("person-id");
const names = document.getElementById("name");
const title = document.getElementById("title");
const family = document.getElementById("family");

const prevItem = document.querySelector(".prevItem");
const nextItem = document.querySelector(".NextItem");
const randomItem = document.querySelector(".RandomItem");

let currentcount = 0;

window.addEventListener("DOMContentLoaded", function () {
  showcharacter();
});

function showcharacter() {
  const item = reviews[currentcount];
  img.src = item.imageUrl;
  names.textContent = item.fullName;
  title.textContent = item.title;
  family.textContent = item.family;
}

prevItem.addEventListener("click", function () {
  currentcount--;
  if (currentcount < 0) {
    currentcount = reviews.length - 1;
  }
  showcharacter(currentcount);
  // console.log("done");
});

nextItem.addEventListener("click", function () {
  currentcount++;
  if (currentcount > reviews.length - 1) {
    currentcount = 0;
  }
  showcharacter(currentcount);
  // console.log("done");
});

randomItem.addEventListener("click", function () {
  currentcount= Math.floor(Math.random()*reviews.length)
  showcharacter(currentcount)
});
