document.addEventListener('DOMContentLoaded', () => {
    const search = document.querySelector('.search-input');
    const btn = document.querySelector('#btn');
    const sidebar = document.querySelector('.sidebar');
    const popup = document.getElementById("popup");

    search.addEventListener('input', searchTable);

    btn.onclick = function () {
        sidebar.classList.toggle('active');
    };

    function searchTable() {
        const tableRows = document.querySelectorAll('#history-tbody tr');
        const searchValue = search.value.toLowerCase();
        tableRows.forEach((row, i) => {
            const tableData = row.textContent.toLowerCase();
            const isMatch = tableData.includes(searchValue);
            row.classList.toggle('hide', !isMatch);
            row.style.setProperty('--delay', i / 25 + 's');
        });

        document.querySelectorAll('#history-tbody tr:not(.hide)').forEach((visibleRow, i) => {
            visibleRow.style.backgroundColor = (i % 2 === 0) ? 'transparent' : '#0000000b';
        });
    }

    function openPopup() {
        popup.classList.add("open-popup");
    }

    window.submitRating = function (btn) {
        const ratingInput = btn.previousElementSibling;
        const rating = parseFloat(ratingInput.value);
        const storeId = ratingInput.dataset.storeId;

        if (isNaN(rating) || rating < 1 || rating > 5) {
            ratingInput.style.borderColor = "red";
            return;
        } else {
            ratingInput.style.borderColor = "";

            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'submit_rating.php', true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.onload = function () {
                if (xhr.status === 200) {
                    openPopup();
                    ratingInput.disabled = true;
                    btn.style.display = 'none';
                    ratingInput.value = rating.toFixed(1);

                    localStorage.setItem(`rating_${storeId}`, rating.toFixed(1));
                } else {
                    console.error('Rating submission failed.');
                }
            };
            xhr.onerror = function () {
                console.error('Request failed.');
            };
            xhr.send(`id=${encodeURIComponent(storeId)}&rating=${encodeURIComponent(rating)}`);
        }
    }

    document.querySelectorAll('.rating-input').forEach(ratingInput => {
        const storeId = ratingInput.dataset.storeId;
        const storedRating = localStorage.getItem(`rating_${storeId}`);

        if (storedRating) {
            ratingInput.value = storedRating;
            ratingInput.disabled = true;
            ratingInput.nextElementSibling.style.display = 'none';
        }
    });

    fetch('history.php')
        .then(response => response.json())
        .then(data => {
            document.getElementById('history-tbody').innerHTML = data.rows;

            document.querySelectorAll('.rating-input').forEach(ratingInput => {
                const storeId = ratingInput.dataset.storeId;
                const storedRating = localStorage.getItem(`rating_${storeId}`);

                if (storedRating) {
                    ratingInput.value = storedRating;
                    ratingInput.disabled = true;
                    ratingInput.nextElementSibling.style.display = 'none';
                }
            });
        })
        .catch(error => console.error('Error fetching order history:', error));
});