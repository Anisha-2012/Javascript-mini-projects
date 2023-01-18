const slides = document.querySelectorAll(".slide");
var counter = 0;
// console.log(slides)
slides.forEach(
    (slide,index) => {
        //left to right
        slide.style.left = `${index * 100}%`
        // top to bottom
        // slide.style.bottom = `${index * 100}%`
    }
)
const goPrev = () => {
    counter--;
    slideImage();
}
const goNext = () => {
    counter++;
    slideImage();
}
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter*100}%)`
            // slide.style.transform = `translateY(-${counter*100}%)`
        }
    )
}
