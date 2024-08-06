"use client";

const QuantityInput = ({quantity,setQuantity}) => {

  const handleInputChange = (e) => {
    let value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      value = 1;
    }
    setQuantity(value);
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
      <button
        className="h-7 w-7 text-xl select-none inline-block dark:text-themePrimary  border-r border-gray-300"
        onClick={handleDecrease}
      >
        -
      </button>
      <input
        type="number"
        name="quantityInput"
        value={quantity}
        onChange={handleInputChange}
        className="h-7 w-12 pr-0 border-none dark:text-themePrimary text-center"
      />
      <button
        className="h-7 w-7 text-xl select-none inline-block dark:text-themePrimary "
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
