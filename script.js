let currentPage = 0;

const pages = document.querySelectorAll(".page");
const welcome = document.getElementById("welcome");
const book = document.getElementById("book");
const pageNumber = document.getElementById("pageNumber");

function openBook() {
    welcome.style.display = "none";
    book.style.display = "block";
}

function updatePageNumber() {
    pageNumber.textContent = `${currentPage + 1} / ${pages.length}`;
}

function nextPage() {
    if (currentPage < pages.length - 1) {

        // Turn the current page away
        pages[currentPage].style.transform = "rotateY(-180deg)";
        pages[currentPage].style.zIndex = currentPage;

        // Move to the next page
        currentPage++;

        // Show the next page correctly
        pages[currentPage].classList.add("active");
        pages[currentPage].style.transform = "rotateY(0deg)";
        pages[currentPage].style.zIndex = currentPage + 10;

        updatePageNumber();
    }
}

function previousPage() {
    if (currentPage > 0) {

        // Move back one page
        currentPage--;

        // Bring the previous page back
        pages[currentPage].style.transform = "rotateY(0deg)";
        pages[currentPage].style.zIndex = currentPage + 10;
        pages[currentPage].classList.add("active");

        // Hide the page we're leaving
        pages[currentPage + 1].classList.remove("active");
        pages[currentPage + 1].style.transform = "rotateY(90deg)";
        pages[currentPage + 1].style.zIndex = currentPage;

        updatePageNumber();
    }
}

