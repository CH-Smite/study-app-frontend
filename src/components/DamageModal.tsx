import React, {useRef} from 'react';
import DamageRelations from "./DamageRelations";
import useOnclickOutside from "../hooks/useOnClickOutside.jsx";
import {DamageRelationsClass} from "../types/DamageRelationOfPokemonTypes";

interface DamageModalProps {
    damages: DamageRelationsClass[];
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DamageModal = ({setIsModalOpen, damages}: DamageRelationsClass) => {

    const ref = useRef<HTMLDivElement>(null);
    useOnclickOutside(ref, () => setIsModalOpen(false));

    return (
        <div className=
                 'flex items-center justify-center z-40 fixed left-0 bottom-0 w-full h-full bg-gray-800'>
            <div ref={ref} className='modal bg-white rounded-lg w-1/2'>
                <div className='flex flex-col items-center p-4'>
                    <div className='flex items-center w-full justify-between'>

                        <div className='text-gray-900 font-medium text-lg'>
                            데미지 관계
                        </div>
                        <span
                            className='text-gray-900 font-medium cursor-pointer'
                            onClick={() => setIsModalOpen(false)}
                        >
                            X
                        </span>
                    </div>
                    <DamageRelations
                        damages={damages}
                    />
                </div>
            </div>
        </div>
    );
};

export default DamageModal;