document.addEventListener('DOMContentLoaded', function () {
    const menuItem = document.querySelector('.menu-item');
    const menuLink = document.querySelector('.dropdown_parent');
    const dropdown = document.querySelector('.dropdown');
    let isDropdownOpen = false;

    // Function to show the dropdown
    function showDropdown() {
        dropdown.style.display = 'block';
        isDropdownOpen = true;
    }

    // Function to hide the dropdown
    function hideDropdown() {
        dropdown.style.display = 'none';
        isDropdownOpen = false;
    }

    // Toggle dropdown visibility on click
    menuLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        event.stopPropagation(); // Prevent the click from propagating to the document
        if (isDropdownOpen) {
            hideDropdown();
        } else {
            showDropdown();
        }
    });

    // Show the dropdown when mouse enters
    menuItem.addEventListener('mouseenter', showDropdown);

    // Hide the dropdown when mouse leaves unless it's open via click
    menuItem.addEventListener('mouseleave', function () {
        if (!isDropdownOpen) {
            hideDropdown();
        }
    });

    // Optionally, hide dropdown if clicking outside of it
    document.addEventListener('click', function (event) {
        if (!menuItem.contains(event.target)) {
            hideDropdown();
        }
    });
});
