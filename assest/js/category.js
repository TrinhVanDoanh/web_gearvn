//lọc
const overLay = document.getElementById('colections_filter-overlay')
const filterButton = document.querySelector('.colections_filter-item-filter')
const filterMain = document.querySelector('.filter_main')
const colectionFilter = document.querySelector('.colections_filter')
const headerElement = document.querySelector('.header__content-list')
const closeFilter = document.getElementById('filter_close')
// var vendorButton = document.querySelector('.colections_filter-item-vendor')

filterButton.onclick = function () {
    overLay.classList.add('colections_filter-overlay-active')
    filterButton.classList.add('colections_filter-item-active')
    filterMain.classList.add('filter_main-active')
    filterButton.classList.add('activeAfter')
    var itemfilters = filterMain.getElementsByTagName('li')
    for (var i = 0; i < itemfilters.length; i++) {
        itemfilters[i].onclick = function () {
            this.classList.add('filter_item-select')
        };
        itemfilters[i].onclick = function () {
            this.classList.toggle('filter_item-select')
        };

    }
};
closeFilter.onclick = function () {
    overLay.classList.remove('colections_filter-overlay-active')
    filterButton.classList.remove('colections_filter-item-active')
    filterMain.classList.remove('filter_main-active')
    filterButton.classList.remove('activeAfter')
};

// Xem thêm
const containerMain = document.querySelector('.container_main')
const loadMore = document.querySelector('.load_more')


loadMore.onclick = function () {
    loadMore.style.display = 'none';
    containerMain.style.height = "auto";
}


// Sắp xếp
var listboxElement = document.querySelector('.container_listbox')
var listboxSelect = document.querySelector('.listbox_colections')

listboxElement.onclick = function () {
    listboxSelect.classList.toggle('presently')
}
const listboxItems = document.querySelectorAll('.listbox_colections-item');
const mainText = document.querySelector('.listbox_main strong');

listboxItems.forEach(item => {
    item.addEventListener('click', () => {
        const itemText = item.textContent;
        mainText.textContent = itemText;
        listboxItems.forEach(item => {
            item.style.fontWeight = 'normal';
        });
        item.style.fontWeight = '700';
    });
});
// Hết xắp xếp


const listFilterEl = document.querySelectorAll('.list-filter');

function onclickFilter(el) {
    const nameFilter = (el.id).split('-')[1];
    const nameFilterMain = document.querySelector(`.${nameFilter}-main`);

    // Kiểm tra nếu class 'd-block' đã tồn tại trong 'nameFilterMain'
    if (nameFilterMain.classList.contains('d-block')) {
        nameFilterMain.classList.remove('d-block');
    } else {
        document.querySelectorAll('.list-filter').forEach(filter => {
            filter.classList.remove('d-block');
        });
        nameFilterMain.classList.add('d-block');
    }
}


function activeChildSelect(parent) {
    const parentEl = document.querySelector(`.${parent}`);  
    var itemfilters = parentEl.getElementsByTagName('li')
    for (var i = 0; i < itemfilters.length; i++) {
        itemfilters[i].onclick = function () {
            this.classList.toggle('filter_item-select')
        };

    }
}
listFilterEl.forEach(filter => {
    const classActive = Array.from(filter.classList).filter(el => el != 'list-filter');
    activeChildSelect(classActive[0]);
});

function unSelect() {
    document.querySelectorAll('.unselection').forEach(close => {
        close.addEventListener("click", e => {
            const parentFilter = e.target.closest('.list-filter');
            parentFilter.classList.remove('d-block');
            const itemFilters = parentFilter.querySelectorAll('.filter_item-select');
            itemFilters.forEach(item => {
                item.classList.remove('filter_item-select');
            });
        });
    });
}

unSelect();

