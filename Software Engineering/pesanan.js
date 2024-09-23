document.addEventListener("DOMContentLoaded", function() {
    const cardsContainer = document.querySelector('#card-container');
    const rightArrow = document.querySelector('.arrow.right-arrow');
    const leftArrow = document.querySelector('.arrow.left-arrow');
    const sidebar = document.querySelector('.sidebar');
    const btn = document.querySelector('#btn');
    const sliderDots = document.querySelector('.slider-dots');

    let cards = document.querySelectorAll('.card');
    let left = 0;
    let cardSize = 25;
    let totalCardSize = cards.length * cardSize - cardSize * 4;

    function fetchOrdersAndCreateCards() {
        return fetch('get_orders.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(order => {
                    createCard(order.toko_name, order.order_date, order.service_name, order.order_time, order.total_price);
                });
                cards = Array.from(cardsContainer.querySelectorAll('.card'));
                totalCardSize = (cards.length - 4) * cardSize;
                createDots(cards.length);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }

    function createCard(toko, date, service, time, price, imgSrc = 'images/logotoko.jpg') {
        const parsedDate = new Date(date);
        const formattedDate = `${parsedDate.getDate()}-${parsedDate.getMonth() + 1}-${parsedDate.getFullYear()}`;
        const formattedTime = time.slice(0, 5);
        const cleanedService = service.replace(/-/g, ' ');
        const formattedPrice = formatPrice(price);
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.innerHTML = `
            <div class="card-content">
                <img src="${imgSrc}" alt="" class="card-img">
                <h1 class="card-title">${toko}</h1>
                <h1 class="card-title">${formattedDate} | ${formattedTime}</h1>
                <div class="card-body">
                    <div class="card-desc">
                        <span>${cleanedService}</span>
                    </div>
                    <p class="card-price">Rp${formattedPrice}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-location">Cek Lokasi</button>
                    <button class="btn btn-border">Chat Toko</button>
                </div>
            </div>
        `;
        cardsContainer.appendChild(newCard);
        newCard.querySelector('.btn-location').addEventListener('click', handleLocationButtonClick);
        newCard.querySelector('.btn-border').addEventListener('click', handleChatButtonClick);
    }
    
    function formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }     

    function handleLocationButtonClick(event) {
        const card = event.target.closest('.card');
        if (!card) return;
        const cardTitle = card.querySelector('.card-title').textContent;
        const mapLink = 'https://maps.app.goo.gl/AQtgXnfsDfgtFs3z8';
        Swal.fire({
            title: `Lokasi ${cardTitle}`,
            html: `Klik <a href="${mapLink}" target="_blank">di sini</a> untuk melihat lokasi.`,
            icon: 'info',
            confirmButtonText: 'Tutup'
        }).then(() => {
            card.classList.remove('active');
        });
    }

    function handleChatButtonClick(event) {
        const card = event.target.closest('.card');
        if (!card) return;
        const cardTitle = card.querySelector('.card-title').textContent;
        const chatURL = 'https://api.whatsapp.com/send?phone=6281234567890';
        Swal.fire({
            title: `Chat dengan ${cardTitle}`,
            html: `<p>Klik <a href="${chatURL}" target="_blank">di sini</a> untuk memulai chat di WhatsApp.</p>`,
            icon: 'info',
            confirmButtonText: 'Tutup'
        }).then(() => {
            card.classList.remove('active');
        });
    }

    function moveCards(left) {
        cards.forEach(card => {
            card.style.left = -left + "%";
        });
        updateDots(left);
    }

    function checkArrowVisibility(pos) {
        leftArrow.style.opacity = pos === 0 ? '0' : '1';
        rightArrow.style.opacity = pos >= totalCardSize ? '0' : '1';
    }

    btn.onclick = function() {
        sidebar.classList.toggle('active');
    };

    fetchOrdersAndCreateCards()
        .then(() => {
            moveCards(left);
            checkArrowVisibility(left);
        })
        .catch(error => {
            console.error('Error fetching and creating cards:', error);
        });

    function createDots(cardCount) {
        sliderDots.innerHTML = '';
        if(cardCount > 4) {
            for (let i = 0; i < cardCount - 3; i++) {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                sliderDots.appendChild(dot);
            }
        }
    }

    function updateDots(left) {
        const currentIndex = Math.round(left / cardSize);
        updateActiveDot(currentIndex);
    }

    function updateActiveDot(index) {
        document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
        const dot = document.querySelectorAll('.dot')[index];
        if (dot) dot.classList.add('active');
    }

    function closeSidebarIfOpen() {
        if (sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    }

    leftArrow.onclick = () => {
        left -= cardSize;
        if (left < 0) left = 0;
        moveCards(left);
        checkArrowVisibility(left);
        closeSidebarIfOpen();
    };

    rightArrow.onclick = () => {
        left += cardSize;
        if (left > totalCardSize) left = totalCardSize;
        moveCards(left);
        checkArrowVisibility(left);
        closeSidebarIfOpen();
    };
});