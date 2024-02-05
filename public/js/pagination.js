const paginationLinksDOM = document.getElementsByClassName('pagination__link');
const prevDOM = paginationLinksDOM.prev;
const nextDOM = paginationLinksDOM.next;
const params = new URLSearchParams(window.location.search);

const limit = 6; 
let currentPage = params.get("page"); 

const paginate = (list, containerDOM, page, limit) => {
    let offset = limit * (page - 1);
    const elementsToDisplay = list.slice(offset, offset + limit);
    containerDOM.innerHTML = "";
    renderItems(elementsToDisplay, containerDOM);
}

paginate(products,itemsContainerDOM, currentPage, 6);
