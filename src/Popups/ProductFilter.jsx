import React from 'react'

function ProductFilter({handleCheckboxChange, handleFilter, selectedItems}) {
  return (
    <div>
        <div>
            <div className="flex flex-col sm:flex-row my-4 text-sm sm:text-lg">
                <div className='flex flex-col px-5 mt-2 justify-center'>
                    <h1 className="font-bold pb-2">Phones</h1>

                    <label>
                    <input type="checkbox" value="samsung" onChange={handleCheckboxChange} checked={selectedItems.includes('samsung')}/>Samsung
                    </label>

                    <label>
                    <input type="checkbox" value="apple" onChange={handleCheckboxChange} checked={selectedItems.includes('apple')}/>Apple
                    </label>

                    <label>
                    <input type="checkbox" value="nokia" onChange={handleCheckboxChange} checked={selectedItems.includes('nokia')}/>Nokia
                    </label>

                    <label>
                    <input type="checkbox" value="oppo" onChange={handleCheckboxChange} checked={selectedItems.includes('oppo')}/> Oppo
                    </label>

                </div>
                <div className='flex flex-col px-5 mt-2'>
                    <h1 className="font-bold pb-2">Laptops</h1>

                    <label>
                    <input type="checkbox" value="dell" onChange={handleCheckboxChange} checked={selectedItems.includes('dell')}/>Dell
                    </label>

                    <label>
                    <input type="checkbox" value="acer" onChange={handleCheckboxChange} checked={selectedItems.includes('acer')}/>Acer
                    </label>
                </div>

                <div className='flex flex-col px-5 mt-2'>
                    <h1 className="font-bold pb-2">Cameras</h1>

                    <label>
                    <input type="checkbox" value="canon" onChange={handleCheckboxChange} checked={selectedItems.includes('canon')}/>Canon
                    </label>

                    <label>
                    <input type="checkbox" value="sony" onChange={handleCheckboxChange} checked={selectedItems.includes('sony')}/>Sony
                    </label>
                </div>

                <div className='flex flex-col px-5 mt-2'>
                    <h1 className="font-bold pb-2">Televisions</h1>

                    <label>
                    <input type="checkbox" value="panasonic" onChange={handleCheckboxChange} checked={selectedItems.includes('panasonic')}/>Panasonic
                    </label>

                    <label>
                    <input type="checkbox" value="philips" onChange={handleCheckboxChange} checked={selectedItems.includes('philips')}/>Philips
                    </label>
                </div>
                
                <div className='flex flex-col px-5 mt-2'>
                    <h1 className="font-bold pb-2">Headphones</h1>
                    <label>
                    <input type="checkbox" value="jbl" onChange={handleCheckboxChange} checked={selectedItems.includes('jbl')}/>JBL
                    </label>
                </div>
            </div>

            <div className="mt-5 flex justify-center">
                <button
                    className="bg-[#fe624c] text-white px-4 py-2 rounded mx-2"
                    onClick={handleFilter}
                >
                    Add
                </button>
                <button
                    className="bg-[#fe624c] text-white px-4 py-2 rounded mx-2"
                    onClick={handleFilter}
                >
                    Cancel
                </button>
             </div>
        </div>
    </div>
  )
}

export default ProductFilter