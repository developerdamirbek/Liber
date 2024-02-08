
import { useState } from 'react';
import { SearchIcon } from '../../../../assets/icons/search-icon'; 
import { DownArrow } from '../../../../assets/icons/down-arrow';

const categories = [
    { id: 1, name: 'All Books', icon: SearchIcon },
    { id: 2, name: 'Audio Books', icon: SearchIcon },
    { id: 3, name: 'E-Books', icon: SearchIcon }
];

export const SelectCategory = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };


    return (
        <div className="max-w-[739px] w-[100%] flex items-center gap-[4px] ">
            <div className="relative flex items-center">
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="block appearance-none w-48 bg-white border border-grey text-primary font-semibold py-[14px] px-4 pr-8 rounded-s-xl leading-tight focus:outline-none focus:border-gray-500"
                >
                    <option className='text-primary font-semibold' value="rukunlar">Rukunlar</option>
                    {categories.map(({ icon, id, name }) => (
                        <option className='text-primary font-semibold' key={id} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <DownArrow />
                </div>
            </div>
            <div className=" w-[100%] relative flex items-center">
                <input
                    type="search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search books..."
                    className="bg-[#F8F8F8] border w-[100%] border-grey text-gray-700 py-3 px-4 outline-none"
                />
                <div className="border border-grey rounded-r-lg border-l-0 bg-[#F8F8F8] right-0 flex items-center px-2 text-gray-700">
                    <button className='w-[20px] py-[14px]'>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};


