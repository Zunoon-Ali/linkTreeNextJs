import React from 'react';

const InputButton = ({
  ButtonColor,
  ButtonText,
  ButtonLink,
  ButtonTextColor,
  ButtonPadding,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch">
      <input
        type="text"
        placeholder="link./tree"
        className="py-4 px-6 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-600 w-full"
      />

      <a
        href={ButtonLink}
        style={{
          backgroundColor: ButtonColor,
          color: ButtonTextColor,
          padding: ButtonPadding,
        }}
        className="rounded-full font-semibold text-lg text-center hover:opacity-90 transition-all whitespace-nowrap"
      >
        {ButtonText}
      </a>
    </div>
  );
};

export default InputButton;