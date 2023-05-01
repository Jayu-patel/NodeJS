const slide = document.querySelectorAll(".k")
// const prevBtn = document.querySelector("#prev")
// const nextBtn = document.querySelector("#next")

slide.forEach(
    (img, number)=>{
        img.style.left = `${number * 100}%`
    }
)

let count = 0

// nextBtn.addEventListener('click',()=>{
//     if(count==5){return}
//     count++
//     slideImage()
// })
// prevBtn.addEventListener('click',()=>{
//     if(count==0){return}
//     count--
//     slideImage()
// })
const slideImage = () =>{
    slide.forEach(
        (img)=>{
            img.style.transform = `translateX(-${count * 100}%)`
        }
    )
}

setInterval(()=>{
    count++
    slideImage()
    console.log(count)
    if(count == 4){
        count = -1
    }
},3000)