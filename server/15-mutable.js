// Ejercicio: Sacar productos del ARRAY 'products' y pasarlos al ARRAY 'myProducts'
const products = [
   { title: 'Pizza', price: 121, id: '🍕' },
   { title: 'Burger', price: 121, id: '🍔' },
   { title: 'Hot cakes', price: 121, id: '🥞' },
];
const myProducts = [];
console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// Busqueda
// const product = products.find((item) => item.id === '🍔');
// if (product) {
//    myProducts.push(product);
//    products.splice(
//       products.findIndex((item) => item.id === product.id),
//       1
//    );
// }
// console.log('products', products);
// console.log('myProducts', myProducts);
// console.log('-'.repeat(10));

const productsV2 = [
   { title: 'Pizza', price: 121, id: '🍕' },
   { title: 'Burger', price: 121, id: '🍔' },
   { title: 'Hot cakes', price: 121, id: '🥞' },
];

// Otra forma de hacerlo, usamos (-1) porque cuando no existe el elemento...retorna (-1)
// El ejecicio es pasar el item 'Hamburguesa' 🍔 de 'productos' y pasarla a 'myProducts'
const productIndex = products.findIndex((item) => item.id === '🍔');
if (productIndex != -1) {
   myProducts.push(products[productIndex]);
   products.splice(productIndex, 1);
}
console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// Ejercicio: hacer un actualización sobre un elemento, por ejemplo en el 🥞
// Editar el precio 'price' y agregar un nuevo atributo 'description'
const update = {
   id: '🥞',
   changes: {
      price: 200,
      description: 'delicious',
   },
};

// Buscamos el id, en esta ocasión se cambia todo el contenido porque se está haciendo una referencia directa (productsV2[prodIndex] = update.changes;)
// const prodIndex = productsV2.findIndex((item) => item.id === update.id);
// productsV2[prodIndex] = update.changes;
// console.log('productsV2: ', productsV2);

// Esta es la manera correcta de hacerlo, usando el SPREAD OPERATOR
const prodIndex = productsV2.findIndex((item) => item.id === update.id);
productsV2[prodIndex] = {
   ...productsV2[prodIndex],
   ...update.changes,
};
console.log('productsV2: ', productsV2);
