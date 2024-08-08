const CartTotalPrice = ({ books }) => {
  const total = books.reduce((sum, currentItem) => {
    const unitPrice =
      currentItem?.productId?.price?.discountedPrice ||
      currentItem?.productId?.price?.regularPrice;
    const subtotal = unitPrice * currentItem.quantity;
    return sum + subtotal;
  }, 0);
  return <p className="text-themePrimary text-2xl">${total.toFixed(2)}</p>;
};

export default CartTotalPrice;
