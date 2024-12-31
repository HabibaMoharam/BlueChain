// Toggle Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const searchBar = document.querySelector('.search-bar');
searchBar.addEventListener('input', () => {
    const searchText = searchBar.value.toLowerCase();
    const rows = document.querySelectorAll('.table-row[data-title]');

    rows.forEach(row => {
        const title = row.getAttribute('data-title').toLowerCase();
        if (title.includes(searchText)) {
            row.style.display = ''; // Show the row
        } else {
            row.style.display = 'none'; // Hide the row
        }
    });
});


const rowsPerPage = 5;
let currentPage = 1;

function paginateRows() {
    const rows = document.querySelectorAll('.reports-table .table-row:not(.header)');
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    rows.forEach((row, index) => {
        row.style.display = index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage ? 'table-row' : 'none';
    });

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.addEventListener('click', () => {
            currentPage = i;
            paginateRows();
        });
        paginationContainer.appendChild(button);
    }
}

// Initialize Pagination
paginateRows();


