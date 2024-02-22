const paginationLinksDOM = document.getElementsByClassName('pagination__link');
const prevDOM = paginationLinksDOM.prev;
const nextDOM = paginationLinksDOM.next;

const paginationDOM = document.querySelectorAll('.pagination')[1];


let paramsURL = new URLSearchParams(window.location.search);
export let currentPage = paramsURL.get("page") || 1; 

// devuelve array de elementos a mostrar en una página
export function paginate (list, page, limit) {
    let offset = limit * (page - 1);
    return list.slice(offset, offset + limit);
}

export const createPaginationLinks = (listLength, currentPage, limit) => {
    const paginationNavDOM = document.createElement('nav');
    const nPages = listLength / limit;
    createLink("&#8249;", currentPage);
}

export const createLink = (value, currentPage, nPages) => {
    const isPrev = value === '‹';
    const isNext = value === '›'; 
    //const isArrow = isPrev || isNext;
    const isDisabled = isPrev && Number(currentPage) === 1 || isNext && Number(currentPage) === nPages;
    const isActive = value === Number(currentPage);
    //const href = ''; 
    //if (!isArrow) href = "/shop?page=" + value;

    const link = document.createElement('a');

    link.classList.add('pagination__link');
    if (isDisabled) link.classList.add('pagination__link--disabled'); 
    else if (isActive) link.classList.add('pagination__link--active'); 
    if (isPrev) {
        link.setAttribute('id', 'prev');
        if(!isDisabled) 
            link.setAttribute('href', `/shop?page=${Number(currentPage)-1}`);
    }
    else if (isNext) {
        link.setAttribute('id', 'next');
        if (!isDisabled)
            link.setAttribute('href', `/shop?page=${Number(currentPage)+1}`);
    }
    else link.setAttribute('href', "/shop?page=" + value);
    link.innerHTML = value;
    
    return link
    /*
    return (
        `<a class="pagination__link ${isDisabled ? 'pagination__link--disabled' : ''} 
                                    ${isActive ? 'pagination__link--active' : ''}" 
            ${isPrev ? 'id=prev' : ''}
            ${isNext ? 'id=next' : ''}
            ${href ? "href=" + href : ''}> 
            ${value}
        </a>`)*/
}

//paginationDOM.innerHTML += createLink(2, currentPage, 3);
paginationDOM.appendChild(createLink('‹', currentPage, 3))
paginationDOM.appendChild(createLink(1, currentPage, 3))
paginationDOM.appendChild(createLink(2, currentPage, 3))
paginationDOM.appendChild(createLink(3, currentPage, 3))
paginationDOM.appendChild(createLink('›', currentPage, 3))
    