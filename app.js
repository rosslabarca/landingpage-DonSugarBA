const slide = document.querySelector(".slide"),
firstImg = slide.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".carrusel i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = slide.scrollWidth - slide.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = slide.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = slide.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
       slide.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(slide.scrollLeft - (slide.scrollWidth - slide.clientWidth) > -1 || slide.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;
    if(slide.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return slide.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    slide.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slide.scrollLeft;
}
const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slide.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slide.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    slide.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
slide.addEventListener("mousedown", dragStart);
slide.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
slide.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
slide.addEventListener("touchend", dragStop);



$(document).ready(function(){

	$('.boton').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

});

