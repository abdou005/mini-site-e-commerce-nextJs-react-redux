export const getProductImage = (product) => {
    let categorieName;
    if (product && product.id !== undefined) {
        if (product.imageName.startsWith("apple")) {
            categorieName = "Apple";
        } else if (product.imageName.startsWith("huawei")) {
            categorieName = "Huawei";
        } else if (product.imageName.startsWith("sony") || (product.imageName.startsWith("s-"))) {
            categorieName = "Sony";
        } else if (product.imageName.startsWith("lg")) {
            categorieName = "LG";
        } else if (product.imageName.startsWith("samsung")) {
            categorieName = "Samsung";
        }
        return categorieName;
    }
};

export const formatPrice = (price) => {
    //return new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR'}).format(price)
    return new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(price);
};