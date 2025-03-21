import React from 'react'
import { Link } from 'react-router-dom'
import mensCollection from '../../assets/mens-collection.webp'
import womensCollection from '../../assets/womens-collection.webp'
export const GenderCollectionSection = () => {
  return (
    <section className='py-16 px-4 lg:px-0'>
            <div className="container mx-auto flex flex-col md:flex-row gap-8">
                {/* Women's Collection */}
                <div className="relative flex-1">
                    <img src={womensCollection} alt="Women's Collection"
                    className='w-full h-[700px] md:h-[600px] lg:h-[750px] object-cover' />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          Women's collection
                        </h2>
                        <Link to='/collections/all?gender=Women'
                        className='text-gray-900 underline'>
                            Shop Now
                        </Link>
                    </div>
                </div>
                {/* Men's Collection */}
                <div className="relative flex-1">
                    <img src={mensCollection} alt="Men's Collection"
                    className='w-full h-[700px] md:h-[600px] lg:h-[750px] object-cover' />
                    <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
                        <h2 className="text-2xl font-bold text-gray-900 mb-3">
                          Men's collection
                        </h2>
                        <Link to='/collections/all?gender=Women'
                        className='text-gray-900 underline'>
                            Shop Now
                        </Link>
                    </div>
                </div>
            </div>
    </section>
  )
}
