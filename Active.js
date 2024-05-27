// Header Start///////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    var itemMN = document.querySelectorAll('.menu-item');
    itemMN.forEach(function(item) {
        item.addEventListener('click', function() {
            itemMN.forEach(function(item) {
                item.classList.remove('act-header');
            });
            this.classList.add('act-header');
        });
    });
});
//Header end///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Scroll Fade-in start///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const content = document.querySelectorAll('.text_fade-in');
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
function handleScroll() {
    content.forEach(function(content) {
        if (isInView(content)) {
            content.classList.add('fade-in');
            window.removeEventListener('wheel', handleScroll);
        }
    });
}
window.addEventListener('wheel', handleScroll);
//Scroll Fade-in end///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Scroll Right-in start///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const content1 = document.querySelectorAll('.text_right-in');
function handleScroll1() {
    content1.forEach(function(content) {
        if (isInView(content)) {
            content.classList.add('right-in');
            window.removeEventListener('wheel', handleScroll1);
        }
    });
}
window.addEventListener('wheel', handleScroll1);
//Scroll Right-in end///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Scroll Fade-in with px small start///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const content3 = document.querySelectorAll('.text_fade-in1');
function handleScroll3() {
    content3.forEach(function(content) {
        if (isInView(content)) {
            content.classList.add('fade-in1');
            window.removeEventListener('wheel', handleScroll3);
        }
    });
}
window.addEventListener('wheel', handleScroll3);
//Scroll Fade-in with px small end///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Scroll Fade-down start///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const content4 = document.querySelectorAll('.text_fade-down');
function handleScroll4() {
    content4.forEach(function(content) {
        if (isInView(content)) {
            content.classList.add('fade-down');
            window.removeEventListener('wheel', handleScroll4);
        }
    });
}
window.addEventListener('wheel', handleScroll4);
//Scroll Fade-down end///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Scroll Left-in start///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const content2 = document.querySelectorAll('.text_left-in');
function handleScroll2() {
    content2.forEach(function(content) {
        if (isInView(content)) {
            content.classList.add('left-in');
            window.removeEventListener('wheel', handleScroll2);
        }
    });
}
window.addEventListener('wheel', handleScroll2);
//Scroll Left-in end///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Change Bg-banner auto start///////////////////////////////////////////////////////////////////////////////////////////////////////////
var banner = document.querySelector('.bg-img');
var bannerImg = ['img_banner_1.jpg', 'img_banner_2.jpeg', 'img_banner_3.jpg', 'img_banner_4.jpg', 'img_banner_5.jpg'];
var i = 0;
var icon_status = document.querySelectorAll('.icon-status');
icon_status[0].style = 'background-color: red';
function changeStatus() {
    icon_status.forEach(function(icon) {
        icon.style.backgroundColor = 'white';
    });
    icon_status[i].style.backgroundColor = 'red';
}
setInterval(function() {
    banner.style.backgroundImage = 'url(' + bannerImg[i] + ')';
    changeStatus();
    i++;
    if (i == bannerImg.length) {
        i = 0;
    }
}, 5000);
//Change Bg-banner auto end///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Change Bg-banner by click start///////////////////////////////////////////////////////////////////////////////////////////////////////////
var btn_img_left = document.querySelector('.fa-angle-left').addEventListener('click', function() {
    i--;
    if (i < 0) {
        i = bannerImg.length - 1;
    }
    banner.style.backgroundImage = 'url(' + bannerImg[i] + ')';
    changeStatus();
});
var btn_img_right = document.querySelector('.fa-angle-right').addEventListener('click', function() {
    i++;
    if (i == bannerImg.length) {
        i = 0;
    }
    banner.style.backgroundImage = 'url(' + bannerImg[i] + ')';
    changeStatus();
});
//Change Bg-banner by click end///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Scroll Header to fixed start
// window.onscroll = function() {
//     var header = document.querySelector(".header");
//     if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
//         header.style.position = "fixed";
//         header.style.width = "100%";
//     } else {
//         header.style.position = "relative";
//     }
// };
//Scroll Header to fixed end

//Click Active Box Search start////////////////////////////////////////////////////////////////////////////////////////////////////////////
var iconSearch = document.querySelectorAll('.icon-search');
var index_search = 0;
iconSearch.forEach(function(icon) {
    icon.addEventListener('click', function() {
        var boxSearch = document.querySelector('.box_search');
        index_search++;
        if(index_search % 2 == 0){
            iconSearch[0].style.backgroundColor = 'white';
            iconSearch[0].style.color = 'black';
        }
        else{
            iconSearch[0].style.backgroundColor = 'rgb(255, 77, 0)';
            iconSearch[0].style.color = 'white';
        }
        if (boxSearch.style.display === 'block') {
            boxSearch.style.display = 'none';
        } else {
            boxSearch.style.display = 'block';
        }
    });
});
//Click Active Box Search end////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Recommend text in input search start///////////////////////////////////////////////////////////////////////////////////////////////////
var inputSearch = document.getElementById('inp_search');
var recommendText = document.querySelectorAll('.text-search');
recommendText.forEach(function(text) {
    text.addEventListener('click', function() {
        inputSearch.value = text.textContent;
    });
});
//Recommend text in input search end////////////////////////////////////////////////////////////////////////////////////////////////////

//Section margin Header start/////////////////////////////////////////////////////////////////////////////////////////////////////////////
var header = document.querySelector('.header');
var headerHeight = header.clientHeight;
document.querySelectorAll('.section').forEach(function(section) {
    var content = section.querySelector('.content');
    content.style.marginTop = headerHeight + "px";
});
//Section margin Header end//////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Scroll Section start///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const sections = document.querySelectorAll('.section');
let active = 0; //Biến chỉ số của Section đang hiển thị 0 là Section đầu tiên
let delayTimer = null; //Biến hạn chế việc Scroll mạnh trong 500ms

addEventListener('wheel', e => {
  // nếu đang trong thời gian delay thì không cho scroll
  if (delayTimer !== null) return;

  const upwards = e.deltaY < 0; // true nếu scroll lên, false nếu scroll xuống

  if ((upwards && active > 0) || (!upwards && active < sections.length - 1)) {
    // làm cho section hiện tại trở thành previous
    const previous = sections[active];
    previous.classList.add('previous');
    previous.classList.remove('active');
    // trong 500ms sẽ remove class previous
    setTimeout(() => previous.classList.remove('previous'), 500);
    active += upwards ? -1 : 1;
    sections[active].classList.add('active');
  }

  // ngăn việc scroll mạnh khiến cho nhảy quá nhiều section
  // nên sẽ delay 500ms mới cho scroll tiếp
  delayTimer = setTimeout(() => { delayTimer = null; }, 500);
});
// //Scroll Section end///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Change Need Know Content start///////////////////////////////////////////////////////////////////////////////////////////////////////////
 var change_home_product = document.querySelectorAll('.change_home_product');
 var need_know_left = document.querySelector('.need_know_left');
 var need_know_right = document.querySelector('.need_know_right');
 var icon_status1 = document.querySelectorAll('.icon-status1');
 index_need_know = 0;
 icon_status1[index_need_know].style.backgroundColor = 'red';
 function changeStatus1() {
    icon_status1.forEach(function(icon) {
        icon.style.backgroundColor = 'black';
    });
    icon_status1[index_need_know].style.backgroundColor = 'red';
}
need_know_left.addEventListener('click', function(){
    index_need_know--;
    if(index_need_know < 0){
        index_need_know = change_home_product.length - 1;
    }
    change_home_product.forEach(function(item){
        item.classList.remove('change_active')
    });
    changeStatus1();
    change_home_product[index_need_know].classList.add('change_active');
});
need_know_right.addEventListener('click', function(){
    index_need_know++;
    if(index_need_know == change_home_product.length){
        index_need_know = 0;
    }
    change_home_product.forEach(function(item){
        item.classList.remove('change_active')
    });
    changeStatus1();
    change_home_product[index_need_know].classList.add('change_active');
});
// Change Need Know Content end///////////////////////////////////////////////////////////////////////////////////////////////////////////