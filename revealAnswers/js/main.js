// const answers = document.querySelectorAll(".question");

// answers.forEach((answer) => {
//   const btn = answer.querySelectorAll(".question-btn");

//   btn.forEach((question) => {
//     question.onclick = () => {
//       answers.forEach((item) => {
//         if (item !== answer) {
//           item.classList.remove("show-class");
//         }
//       });
//       answer.classList.toggle("show-class");
//     };
//   });
//   //   questionBtn.onclick = () => {};
// });

// METHOD TWO 

const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const qBtn = question.querySelector(".question-btn");
    qBtn.onclick = () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove('show-class')
            }
        })
      question.classList.toggle('show-class')
  };
  console.log(qBtn);
//   console.log(question);
});
console.log(questions);


// TRAVERSING THE DOM
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-class");
//   });
// });
