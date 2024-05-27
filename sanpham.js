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

    // Click Active Box Search start
    var iconSearch = document.querySelector('#icon-search'); // Sửa lại selector để tìm đúng phần tử
    console.log(iconSearch);
    var index_search = 0;
    iconSearch.addEventListener('click', function() {
        var boxSearch = document.querySelector('.box_search');
        index_search++;
        if(index_search % 2 === 0) {
            iconSearch.style.backgroundColor = 'white';
            iconSearch.style.color = 'black';
            boxSearch.style.display = 'none';
        } else {
            iconSearch.style.backgroundColor = 'rgb(255, 77, 0)';
            iconSearch.style.color = 'white';
            boxSearch.style.display = 'block';
        }
    });
    // Click Active Box Search end

    // Recommend text in input search
    var inputSearch = document.getElementById('inp_search');
    var recommendText = document.querySelectorAll('.text-search');
    recommendText.forEach(function(text) {
        text.addEventListener('click', function() {
            inputSearch.value = text.textContent;
        });
    });

    var sanpham = document.querySelector('.sanpham');
    sanpham.style.backgroundColor = 'rgb(255, 77, 0)';
    var a_sanpham = document.querySelector('.a_sanpham');
    a_sanpham.style.color = 'white';
});