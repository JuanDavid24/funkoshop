const paginationLinksDOM = document.getElementsByClassName('pagination__link');
const prevDOM = paginationLinksDOM.prev;
const nextDOM = paginationLinksDOM.next;

let paramsURL = new URLSearchParams(window.location.search);
export let currentPage = paramsURL.get("page") || 1; 

// devuelve array de elementos a mostrar en una página
export function paginate (list, page, limit) {
    let offset = limit * (page - 1);
    return list.slice(offset, offset + limit);
}
