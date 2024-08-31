document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('card-container');
            data.forEach(item => {
                const card = document.createElement('div');
                card.className = 'card';

                const link = document.createElement('a');
                link.href = item.link;

                const cardTitle = document.createElement('div');
                cardTitle.className = 'card-title';

                const h1 = document.createElement('h1');
                h1.textContent = item.title;
                cardTitle.appendChild(h1);

                const productInfo = document.createElement('div');
                productInfo.className = 'product-info';

                const h2 = document.createElement('h2');
                h2.textContent = item.info;
                productInfo.appendChild(h2);

                card.appendChild(cardTitle);
                card.appendChild(productInfo);
                link.appendChild(card);
                cardContainer.appendChild(link);
            });
        })
        .catch(error => console.error('Error fetching the data:', error));
});
