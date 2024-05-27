document.addEventListener('DOMContentLoaded', function() {
    // Header Start
    var itemMN = document.querySelectorAll('.menu-item');
    itemMN.forEach(function(item) {
        item.addEventListener('click', function() {
            itemMN.forEach(function(item) {
                item.classList.remove('act-header');
            });
            this.classList.add('act-header');
        });
    });

    // Click Active Box Search
    var iconSearch = document.querySelectorAll('.icon-search');
    iconSearch.forEach(function(icon) {
        icon.addEventListener('click', function() {
            var boxSearch = document.querySelector('.box_search');
            if (boxSearch.style.display === 'block') {
                boxSearch.style.display = 'none';
            } else {
                boxSearch.style.display = 'block';
            }
        });
    });

    // Recommend text in input search
    var inputSearch = document.getElementById('inp_search');
    var recommendText = document.querySelectorAll('.text-search');
    recommendText.forEach(function(text) {
        text.addEventListener('click', function() {
            inputSearch.value = text.textContent;
        });
    });

    // Section margin Header
    var header = document.querySelector('.header');
    var headerHeight = header.offsetHeight;
    document.querySelectorAll('.section').forEach(function(section) {
        var content = section.querySelector('.content');
        content.style.marginTop = headerHeight + "px";
    });

    // Scroll Section
    // const sections = document.querySelectorAll('.section');
    const section_item = document.querySelectorAll('.section-item');
    let active = 0; // Biến chỉ số của Section đang hiển thị 0 là Section đầu tiên
    let delayTimer = null; // Biến hạn chế việc Scroll mạnh trong 500ms
    var icon_status = document.querySelectorAll('.icon-status');
    console.log(icon_status);
    index_status = 0;
    icon_status[index_status].classList.add('status_active');

    addEventListener('wheel', e => {
        // nếu đang trong thời gian delay thì không cho scroll
        if (delayTimer !== null) return;

        const upwards = e.deltaY < 0; // true nếu scroll lên, false nếu scroll xuống

        if (upwards && active > 0) {
            // làm cho section hiện tại trở thành previous
            const previous = section_item[active];
            previous.classList.add('previous');
            previous.classList.remove('active1');
            previous.classList.remove('active');
            // trong 500ms sẽ remove class previous
            setTimeout(() => previous.classList.remove('previous'), 500);
            active += upwards ? -1 : 1;
            section_item[active].classList.add('active1');
            icon_status.forEach(function(icon) {
                icon.classList.remove('status_active');
            });
            index_status -= 1;
            if(index_status < 0){
                index_status = 0;
            }
            icon_status[index_status].classList.add('status_active');
        }
        else{
            if(!upwards && active < section_item.length - 1){
                const previous = section_item[active];
                previous.classList.add('previous');
                previous.classList.remove('active');
                previous.classList.remove('active1');
                // trong 500ms sẽ remove class previous
                setTimeout(() => previous.classList.remove('previous'), 500);
                active += upwards ? -1 : 1;
                section_item[active].classList.add('active');
                icon_status.forEach(function(icon) {
                    icon.classList.remove('status_active');
                });
                index_status += 1;
                if(index_status > 6){
                    index_status = 6;
                }
                icon_status[index_status].classList.add('status_active');
            }
        }

        // ngăn việc scroll mạnh khiến cho nhảy quá nhiều section
        // nên sẽ delay 500ms mới cho scroll tiếp
        delayTimer = setTimeout(() => { delayTimer = null; }, 500);
    });


    var gioithieu = document.querySelector('.gioithieu');
    gioithieu.style.backgroundColor = 'rgb(255, 77, 0)';
    var a_gioithieu = document.querySelector('.a_gioithieu');
    a_gioithieu.style.color = 'white';
});
