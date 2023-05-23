const titles = [
  "چطور آب کرفس بگیرم",
  "چطور آب زرشک بگیرم",
  "چطور آرد عدس درست کنم",
  "چطور پرینت اس ام اس بگیرم",
  "چطور آب زرشک خانگی درست کنم",
]

let search = document.querySelector(".search")
let inputBox = document.querySelector(".input")
let resultBox = document.querySelector(".resultBox")

inputBox.onkeyup = (e) => {
  titles.forEach((title) => {
    let inputUser = e.target.value
    let resultArray = []

    if (inputUser.length > 0) {
      resultArray = titles.filter((title) => {
        if (title.startsWith(inputUser)) {
          return title
        }
      })

      resultArray = resultArray.map((title) => {
        return `<li>${title}</li>`
      })

      if (resultArray.length > 0) {
       resultBox.innerHTML = resultArray.join(" ")

      search.classList.add("active") 
      }else{
        search.classList.remove("active") 
      }

      
    }else{
      search.classList.remove("active") 
    }
  })
}
