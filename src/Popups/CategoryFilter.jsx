import React from "react";


function CategoryFilter({handleCheckboxChange, handleFilter, selectedItems}) {
  return (
    <div className="flex flex-col">
       <label className="flex">
        <input type="checkbox" value="phone" onChange={handleCheckboxChange} checked={selectedItems.includes('phone')}/>
        <p className="px-5">Phones</p>
      </label>

      <label className="flex">
        <input type="checkbox" value="audio" onChange={handleCheckboxChange} checked={selectedItems.includes('audio')} />
        <p className="px-5">Audio</p>
      </label>

      <label className="flex">
        <input type="checkbox" value="television" onChange={handleCheckboxChange} checked={selectedItems.includes('television')} />
        <p className="px-5">Televisions</p>
      </label>

      <label className="flex">
        <input type="checkbox" value="laptop" onChange={handleCheckboxChange} checked={selectedItems.includes('laptop')} />
        <p className="px-5">Laptops</p>
      </label>

      <label className="flex">
        <input type="checkbox" value="camera" onChange={handleCheckboxChange} checked={selectedItems.includes('camera')} />
        <p className="px-5">Cameras</p>
      </label>

    <div className="mt-5 flex justify-between px-6">
        <button
            className="bg-[#fe624c] text-white px-4 py-2 rounded"
            onClick={handleFilter}
        >
            Add
        </button>
        <button
            className="bg-[#fe624c] text-white px-4 py-2 rounded"
            onClick={handleFilter}
        >
            Cancel
        </button>
    </div>
    </div>
  );
}

export default CategoryFilter;
