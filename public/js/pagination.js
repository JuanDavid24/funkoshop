

let paramsURL = new URLSearchParams(window.location.search);
export let currentPage = paramsURL.get("page") || 1; 

// devuelve array de elementos a mostrar en una página
export function paginate (list, page, limit) {
    let offset = limit * (page - 1);
    return list.slice(offset, offset + limit);
}

export const createPaginationLinks = (containerDOM, listLength, currentPage, limit) => {
    const fragment = document.createDocumentFragment('nav');
    const nPages = Math.ceil (listLength / limit);

    fragment.appendChild( createLink('‹', currentPage, nPages) );
    for (let page = 1; page < nPages + 1; page++) {
        fragment.appendChild( createLink(page, currentPage, nPages) );
        
    }
    fragment.appendChild( createLink('›', currentPage, nPages) );
    containerDOM.appendChild(fragment);
}

export const createLink = (value, currentPage, nPages) => {
    const isPrev = value === '‹';
    const isNext = value === '›'; 
    const isDisabled = isPrev && Number(currentPage) === 1 || isNext && Number(currentPage) === nPages;
    const isActive = value === Number(currentPage);

    const link = document.createElement('a');
    link.classList.add('pagination__link');

    isDisabled && link.classList.add('pagination__link--disabled'); 
    isActive && link.classList.add('pagination__link--active'); 

    if (isPrev) {
        link.setAttribute('id', 'prev');
        !isDisabled && link.setAttribute('href', `/shop?page=${Number(currentPage)-1}`);
    }
    else if (isNext) {
        link.setAttribute('id', 'next');
        !isDisabled && link.setAttribute('href', `/shop?page=${Number(currentPage)+1}`);
    } 
    else 
        link.setAttribute('href', "/shop?page=" + value); 

    link.innerHTML = value;  
    return link
}