import React from 'react';

const FormWrapper = ({ title, children }) => (
  <div className="w-full max-w-xs mx-auto">
    <h2 className="text-center text-2xl font-bold mb-6">{title}</h2>
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      {children}
    </form>
  </div>
);

export default FormWrapper;