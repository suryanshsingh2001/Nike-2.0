import React from "react";

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`relative inline-flex items-center px-7 py-4 border font-montserrat text-lg leading-none rounded-full transition-all duration-300 ease-in-out
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      }
      hover:bg-black hover:text-#D400FF hover:transform hover:scale-105 hover:rotate-3 ${
        fullWidth && "w-full"
      }`}
    >
      {label}

      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 rounded-full bg-white w-5 h-5 transform translate-x-2"
        />
      )}
    </button>
  );
};

export default Button;
