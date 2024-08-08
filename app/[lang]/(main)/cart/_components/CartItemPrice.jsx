const CartItemPrice = ({ quantity, productPrice }) => {

  const subTotalDiscountedPrice = productPrice?.discountedPrice * quantity;
  const subTotalRegularPrice = productPrice?.regularPrice * quantity;
  return (
    <p className="text-base sm:text-xl mb-2 dark:text-themePrimary font-semibold">
      $
      {subTotalDiscountedPrice
        ? subTotalDiscountedPrice.toFixed(2)
        : subTotalRegularPrice.toFixed(2)}
    </p>
  );
};

export default CartItemPrice;
