var imageList = Array.from(document.querySelectorAll("img"));
var pop = document.querySelector(".pop");
var closeBtn = document.getElementById("close");
var nextbtn = document.getElementById("next");
var brevBtn = document.getElementById("brev");
var popInner = document.querySelector(".pop-inner");
var currentIndex;
for (i = 0; i < imageList.length; i++) {
  imageList[i].addEventListener("click", function (e) {
    pop.classList.replace("d-none", "d-flex");
    var currentSrc = e.target.getAttribute("src");
    popInner.style.backgroundImage = `url(${currentSrc})`;
    currentIndex = imageList.indexOf(e.target)
  });
}

// Close

closeBtn.addEventListener("click", function () {
  close();
});

// close by mouse

function close() {
  pop.classList.replace("d-flex", "d-none");
}

//close by key

document.addEventListener("keyup", function (e) {
  if (e.key == "Escape") {
    close();
  }
});

// Next
nextbtn.addEventListener("click", function(){
    currentIndex++
    if(currentIndex == imageList.length){
        currentIndex = 0
    }
    var currenSrc = imageList[currentIndex].getAttribute("src")
    popInner.style.backgroundImage = `url(${currenSrc})`;
})

// Back
brevBtn.addEventListener("click", function(){
    currentIndex--
    if(currentIndex < 0){
        currentIndex = imageList.length - 1
    }
    var currenSrc = imageList[currentIndex].getAttribute("src")
    popInner.style.backgroundImage = `url(${currenSrc})`;
})
