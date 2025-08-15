const products = [
    {id: 1, name: 'cotton t-shirt', price: 500},
    {id: 2, name: 'cotton dropsholder t-shirt', price: 700},
    {id: 3, name: 'cotton polo shirt', price: 1200},
    {id: 4, name: 'stiched cotton t-shirt', price: 500},
    {id: 5, name: 'lather shoe', price: 1800},
    {id: 6, name: 'original lather belt', price: 600},
    {id: 7, name: 'moneybag with burnprof lather', price: 900},
    {id: 8, name: 'customized lather moneybag', price: 500},
    {id: 9, name: 'cotton shirt', price: 500}
]

function matchedProducts(products, search){
    const matched = [];
    for (const product of products) {
        // console.log(product);
        if(product.name.includes(search)){
            matched.push(product);
        }
    }

    return matched;
}




const result = matchedProducts(products, 'cotton');
console.log(result);