import React from 'react'
import { useState } from 'react'
import { DownArrow } from '../../../../assets/icons/down-arrow';


const langs = [
    { id: 1, name: 'UZB' },
    { id: 2, name: 'RUS' },
    { id: 3, name: 'ENG' }
];

export const SelectLang = () => {
    const [selectedLang, setSelectedLang] = useState('');

    const handLangChange = (event) => {
        setSelectedLang(event.target.value);
    };

    return (
        <div className="relative flex items-center">
            <select
                value={selectedLang}
                onChange={handLangChange}
                className=" appearance-none w-[90px] bg-primary-soft text-primary px-4 font-semibold py-[14px] rounded-xl leading-tight focus:outline-none focus:border-gray-500"
            >
                {langs.map(({ id, name }) => (
                    <option className='text-primary font-semibold' key={id} value={name}>
                        {name}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-gray-700">
                <DownArrow />
            </div>
        </div>
    )
}
