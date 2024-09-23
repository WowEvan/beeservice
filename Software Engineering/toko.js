document.addEventListener('DOMContentLoaded', function() {
    fetch('get_rating.php')
        .then(response => response.json())
        .then(data => {
            console.log('Ratings data:', data);

            document.querySelectorAll('.toko-detail').forEach(toko => {
                const id = toko.getAttribute('data-name');
                const ratingData = data[id];
                if (ratingData) {
                    const rating = ratingData.rating.toFixed(1);
                    const totalRatings = ratingData.total_ratings;

                    toko.querySelector('.rating').textContent = rating;
                } else {
                    console.error(`No rating data found for id ${id}`);
                }
            });

            document.querySelectorAll('.preview').forEach(preview => {
                const target = preview.getAttribute('data-target');
                const ratingData = data[target];
                if (ratingData) {
                    const rating = ratingData.rating.toFixed(1);
                    const totalRatings = ratingData.total_ratings;

                    preview.querySelector('.rating').textContent = rating;
                    preview.querySelector('.num').textContent = `(${totalRatings})`;
                } else {
                    console.error(`No rating data found for target ${target}`);
                }
            });
        })
        .catch(error => {
            console.error('Error fetching ratings:', error);
        });

    const orderButtons = document.querySelectorAll('.order-button');
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'layanan.html';
        });
    });

    const previewToko = document.querySelector('.toko-preview');
    const previewBox = previewToko.querySelectorAll('.preview');

    document.querySelectorAll('.toko-content .toko-detail').forEach(toko => {
        toko.onclick = () => {
            previewToko.style.display = 'flex';
            const name = toko.getAttribute('data-name');
            previewBox.forEach(preview => {
                const target = preview.getAttribute('data-target');
                if (name === target) {
                    preview.classList.add('active');
                } else {
                    preview.classList.remove('active');
                }
            });
        };
    });

    previewBox.forEach(close => {
        close.querySelector('.fa-times').onclick = () => {
            close.classList.remove('active');
            previewToko.style.display = 'none';
        };
    });

    const btn = document.querySelector('#btn');
    const sidebar = document.querySelector('.sidebar');

    btn.onclick = function() {
        sidebar.classList.toggle('active');
    };

});