const priceRu = (price: number): string => {
    const regExp = /\B(?=(\d{3})+(?!\d))/g;
    const newPrice = price.toString().replace(regExp, " ").concat(" ₽");
    return newPrice;
};

export default priceRu;
