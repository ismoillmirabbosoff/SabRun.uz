import React from 'react'
import { Item } from '../type';
import Image from 'next/image';
import { GoPlus } from "react-icons/go";


const Products = ({ productData }: any) => {
    console.log(productData);
    return (
        <div className='py-6 px-4 grid grid-cols-4 gap-4'>
            {productData.map((item:Item) => (
                <div key={item._id} className='border-[1px] border-gray-200 mb-6 group'>
                    <div className='w-full h-[350px] overflow-hidden p-1'>
                        <Image className='w-full h-full object-contain scale-100 group-hover:scale-105 duration-300' width={300} height={250} src={item.image} alt="itemImage" />
                    </div>


                    {/* description start */}
                    <div className='px-2 py-4 flex flex-col justify-center'>
                        <div className='flex justify-between py-2'>
                            <button className='w-20 h-9 bg-yellow text-white rounded-full flex gap-1 items-center justify-center hover:bg-white hover:text-black hover:outline hover:outline-1 hover:outline-yellow duration-300'>
                                <span><GoPlus/></span>
                                Add
                            </button>

                            <button className='w-24 h-9 bg-white outline outline-1 outline-black text-black rounded-full flex items-center justify-center gap-1 hover:bg-yellow hover:text-white hover:outline hover:outline-1 hover:outline-yellow duration-300'>
                                <span><GoPlus /></span>
                                Details
                            </button>
                        </div>

                        <div className='flex items-center gap-3'>
                            <p className='font-titleFont text-lg text-green-700 font-semibold'>Now ${item.price}</p>
                            <p className='text-gray-500 line-through decoration-[1px]'>${item.oldPrice}</p>
                        </div>
                        <p className='text-lg font-semibold py-2'>{item.title.substring(0, 25)}</p>
                        <p className='text-base text-zinc-500'>{item.description}...</p>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default Products