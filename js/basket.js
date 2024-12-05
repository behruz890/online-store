let basket_json = {
	1: {
		'img': 'ice-cream/01.png',
		'name': 'Zolotoy',
		'price': 15000,
		'count': 3,
		'total price': 45000,
	},
	2: {
		'img': 'chocolate/04.png',
		'name': 'Kit Kat',
		'price': 12000,
		'count': 1,
		'total price': 12000,
	},
	3: {
		'img': 'drink/03.png',
		'name': 'coca-cola',
		'price': 14000,
		'count': 3,
		'total price': 42000,
	},
	4: {
		'img': 'chocolate/13.png',
		'name': 'Alpen Gold',
		'price': 13000,
		'count': 3,
		'total price': 39000,
	},
};

let productList = document.querySelector('.product-list');

for (let key in basket_json) {
	let productData = basket_json[key];

	let product = document.createElement('div');
	product.classList.add('product');

	product.innerHTML = `
		<img src="../media/${productData['img']}" alt="product-img" class="product-img">
		<p class="product-name">name: ${productData['name']}</p>
		<p class="product-price">price: ${productData['price']}</p>
		<p class="product-count">count: ${productData['count']}</p>
		<p class="total-price">total price: ${productData['total price']}</p>
		<button class="delete">delete</button>
	`;

	productList.appendChild(product);

}
