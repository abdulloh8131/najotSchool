// script.js

const students = [
   { name: "Abdulla", age: 12 , interest: 'Shaxmat o`ynash'},
   { name: "Diyorbek", age: 13, interest:'Rasm chizish' },
   { name: "Gulnoza", age: 11, interest:'Tikuvchilik' } ,
   {name:"Lola", age: 12, interest:'Kitob o`qish'},
   {name:"Aziza", age:11, interest:'Raqs tushish'},
   {name: "Behruz", age:13, interest:'Boks'},
   {name:"Miraziz", age:12, interest:'Futbol tomosha qilish'},
   {name:"Abdulloh",age:10, interest:'Kino ko`rish'},
   {name:"Gulixon", age:11, interest:'Hamshiralik'},
   {name:"Xushnudbek", age:12, interest:'Stol tennis o`ynash'},
   {name:"Asilabonu", age:13, interest:'Gul yasash'},
   {name:"Azimjon", age:14, interest:'ovqat pishirish'},
   { name: "Abdulaziz", age: 12 , interest: 'Shashka o`ynash'},
   { name: "Lazizbek", age: 11 , interest: 'Karate'},
   { name: "Xoliqjon", age: 13 , interest: 'Blogerlik'},
   { name: "Xaitboy", age: 10 , interest: 'Rep aytish'},
   { name: "Nodirbek", age: 13 , interest: 'Robototexnika'},
   { name: "Javlonbek", age: 10 , interest: 'Mevachilik'}
];

const subjects = [
   "Matematika", "Ingliz tili", "Chizmachilik", 'Tarix', 'Huquq', 'Geografiya', 'Fizika', 'Kimyo', 'Biologiya', 'IT',"Shaxmat", "Shashka", "Stol tennis", "Raqs to`garagi","Rassomchilik","Robototexnika","Dizaynerlik","Tikuvchilik"
];

const photos = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg", "photo6.jpg","photo7.jpg", "photo8.jpg", "photo9.jpg",];

const studentList = document.getElementById("student-list");
const subjectList = document.getElementById("subject-list");
const galleryGrid = document.querySelector(".gallery-grid");

// Bolalar ro‘yxati
students.forEach((student) => {
   const div = document.createElement("div");
   div.innerHTML = `<h3>${student.name}</h3><p>Yoshi: ${student.age}</p> <p> Hobbisi : ${student.interest}<p/>`;
   studentList.appendChild(div);
});

// Fanlar ro‘yxati
subjects.forEach((subject) => {
   const div = document.createElement("div");
   div.textContent = subject;
   subjectList.appendChild(div);
});

// Fotolavhalar
photos.forEach((photo) => {
   const img = document.createElement("img");
   img.src = photo;
   galleryGrid.appendChild(img);
});

// So'rov shakli uchun oddiy JS
document.getElementById('contactForm').addEventListener('submit', function (e) {
   e.preventDefault(); // Formani qayta yuklamaslik uchun
 
   // Habarni yuborilgandek ko'rsatish
   alert("Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
   
   // Shaklni tozalash
   e.target.reset();
 });
 