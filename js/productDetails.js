//Thanh 


// slider ảnh

// slide bigsize
const slideBigList = document.querySelector(".slide"),
firstImgBig = slideBigList.querySelectorAll("img")[0],
listImg = slideBigList.querySelectorAll('img'),
arrowBigIcons = document.querySelectorAll(".slide_main i");


let isBigDragStart = false, isBigDragging = false, prevBigPageX, prevBigScrollLeft, bigPositionDiff;

const showHideIconsBig = () => {
    // hiển thị và ẩn biểu tượng trước/tiếp theo theo giá trị băng chuyền cuộn sang trái
    let scrollWidth = slideBigList.scrollWidth - slideBigList.clientWidth; // getting max scrollable width
    // arrowIcons[0].style.display = slideBigList.scrollLeft == 0 ? "none" : "block";
    if(slideBigList.scrollLeft == 0) {
        arrowBigIcons[0].style.display ="none" ;
    }else {
        arrowBigIcons[0].style.display ="block" ;
    }
    // arrowBigIcons[1].style.display = slideBigList.scrollLeft == scrollWidth ? "none" : "block";
    if(slideBigList.scrollLeft == scrollWidth ) {
        arrowBigIcons[1].style.display ="none" ;
    }else {
        arrowBigIcons[1].style.display ="block" ;
    }
}

arrowBigIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgBigWidth = firstImgBig.clientWidth + 35; // nhận chiều rộng img đầu tiên và thêm 35 giá trị lề
        // nếu biểu tượng được nhấp ở bên trái, hãy giảm giá trị chiều rộng từ cuộn slideBigList bên trái, thêm vào đó
        if(icon.id == "prev_big") {
            slideBigList.scrollLeft -= firstImgBigWidth;
        }
        else {
            slideBigList.scrollLeft += firstImgBigWidth;
        }
        setTimeout(() => showHideIconsBig(), 60); // calling showHideIconsBig after 60ms
    });
});

// -----------------------------------------

// slide mini
const slideMiniList = document.querySelector(".slide-mini-list"),
firstImg = slideMiniList.querySelectorAll("img")[0],
smallImgs = slideMiniList.querySelectorAll("img"),
arrowIcons = document.querySelectorAll(".slide-mini-main i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // hiển thị và ẩn biểu tượng trước/tiếp theo theo giá trị băng chuyền cuộn sang trái
    let scrollWidth = slideMiniList.scrollWidth - slideMiniList.clientWidth; // getting max scrollable width
    // arrowIcons[0].style.display = slideMiniList.scrollLeft == 0 ? "none" : "block";
    if(slideMiniList.scrollLeft == 0) {
        arrowIcons[0].style.display ="none" ;
    }else {
        arrowIcons[0].style.display ="block" ;
    }
    // arrowIcons[1].style.display = slideMiniList.scrollLeft == scrollWidth ? "none" : "block";
    if(slideMiniList.scrollLeft == scrollWidth ) {
        arrowIcons[1].style.display ="none" ;
    }else {
        arrowIcons[1].style.display ="block" ;
    }
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 12 ; // nhận chiều rộng img đầu tiên và thêm 12 giá trị lề
        // nếu biểu tượng được nhấp ở bên trái,  giảm giá trị chiều rộng từ cuộn slideMiniList bên trái, thêm vào đó
        console.log(firstImgWidth);
        if(icon.id == "slide_prev-mini") {
            slideMiniList.scrollLeft -= firstImgWidth;
        }
        else {
            slideMiniList.scrollLeft += firstImgWidth;
        }
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});
let firstImgWidth = firstImg.clientWidth + 12;

const autoSlide = () => {
   // nếu không còn ảnh để cuộn thì quay lại từ đây
    if(slideMiniList.scrollLeft - (slideMiniList.scrollWidth - slideMiniList.clientWidth) > -1 || slideMiniList.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // chuyển giá trị positionDiff thành dương
    let firstImgWidth = firstImg.clientWidth + 15;
   // lấy giá trị chênh lệch cần thêm hoặc bớt từ slideMiniList bên trái để lấy img ở giữa
    let valDifference = firstImgWidth - positionDiff;

    if(slideMiniList.scrollLeft > prevScrollLeft) { // nếu người dùng đang cuộn sang phải
        return slideMiniList.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
   // nếu người dùng đang cuộn sang trái
    slideMiniList.scrollLeft -= positionDiff > firstImgWidth  / 3 ? valDifference : -positionDiff;
   
}

const dragStart = (e) => {
   // cập nhật giá trị biến toàn cục khi chuột xuống sự kiện
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = slideMiniList.scrollLeft;
}

const dragging = (e) => {
   // cuộn ảnh/slideMiniList sang trái theo con trỏ chuột
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    slideMiniList.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    slideMiniList.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    slideMiniList.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
//Khi chọn vào ảnh nhỏ thì ảnh to hiện lên
const selectSmallImage = (index) => {
    // Xác định ảnh lớn tương ứng với ảnh nhỏ được chọn
    const selectedBigImage = listImg[index];
    
    // Xác định vị trí cuộn slideBigList để hiển thị ảnh lớn
    const firstImgBigWidth = firstImgBig.clientWidth + 35; // Chiều rộng ảnh lớn
    const scrollLeft = index * firstImgBigWidth; // Vị trí cuộn slideBigList
    
    // Cuộn slideBigList và hiển thị ảnh lớn
    slideBigList.scrollLeft = scrollLeft;
    showHideIconsBig();
    
    // Cập nhật trạng thái ảnh nhỏ và ảnh lớn được chọn
    smallImgs.forEach((image, i) => {
      if (i === index) {
        image.classList.add('slide-mini-active');
        
      } else {
        image.classList.remove('slide-mini-active');
      }
    });
  };
  
  // Gọi hàm selectSmallImage khi người dùng click vào ảnh nhỏ
  smallImgs.forEach((smallImg, index) => {
    smallImg.addEventListener('click', () => {
      selectSmallImage(index);
    });
  });
 

slideMiniList.addEventListener("mousedown", dragStart);
slideMiniList.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
slideMiniList.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
slideMiniList.addEventListener("touchend", dragStop);


//Đọthêm
  var  readmoreElement = document.querySelector('.readmore');
  var contentProductdescription = document.querySelector('.content_productdescription');
  var overlayElement = document.getElementsByClassName('content_productdescription-overlay');
  var  collapseElement = document.querySelector('.collapse');
    readmoreElement.onclick = function() {
    readmoreElement.classList.add('readmore_none');
    contentProductdescription.style.height = 'auto'
    overlayElement[0].style.display = 'none'
  }
  collapseElement.onclick = function() {
    readmoreElement.classList.remove('readmore_none');
    contentProductdescription.style.height = '400px'
    overlayElement[0].style.display = 'block'
  }