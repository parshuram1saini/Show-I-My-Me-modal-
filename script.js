'use strict'
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnclose = document.querySelector('.close-modal')
const btnopen = document.querySelectorAll('.show-modal')
// console.log(btnopen);

const openmodal = function () {
  // console.log("button clicked");
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
const closemodal = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
}

for (let i = 0; i < btnopen.length; i++)
  console.log(
    btnopen[i].addEventListener('click', openmodal),
    // function () {
    //   modal.classList.remove("hidden");
    //   overlay.classList.remove("hidden");
    //   //   //   modal.classList.toggle("hidden");
    //   //   //   overlay.classList.toggle("hidden");
    // })
  )

btnclose.addEventListener('click', closemodal)
overlay.addEventListener('click', closemodal)
// function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
//   //   //   modal.classList.toggle("hidden");
//   //   //   overlay.classList.toggle("hidden");
// });
// overlay.addEventListener("click", function () {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });
///handle by using esc key
document.addEventListener('keydown', function (e) {
  //   console.log("a key is pressed");
  //   console.log(e.key);
  //   if (e.key === "Escape")
  //     if (!modal.classList.contains("hidden")) {
  //       //   console.log("esc was pressed");
  //       closemodal();
  //     }
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closemodal()
  }
})
