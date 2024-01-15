// You can use JavaScript to add or remove a class to show/hide the loader as needed.

// Example: Show loader
document.addEventListener('DOMContentLoaded', function() {
    showLoader();
});

function showLoader() {
    var loaderContainer = document.querySelector('.loader-container');
    loaderContainer.style.display = 'block';
}

// Example: Hide loader
function hideLoader() {
    var loaderContainer = document.querySelector('.loader-container');
    loaderContainer.style.display = 'none';
}
