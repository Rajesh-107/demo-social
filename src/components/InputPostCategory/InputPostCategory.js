import React, { useState } from 'react';
import './InputPostCategory.scss'



const InputPostCategory = () => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div class="flex">
    <div class="mt-3 mb-3 xl:w-96">
      <select class="form-select 
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
         border-gray-300
      
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-600 focus:outline-none" aria-label="Default select example">
          <option selected>Please Select Category</option>
          <option value="1">Job</option>
          <option value="2">Rental</option>
          <option value="3">Service Management</option>
      </select>
    </div>

    
  </div>
  );
};

export default InputPostCategory;