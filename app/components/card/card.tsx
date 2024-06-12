import React, { useState, useRef } from "react";
import { TbEdit } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
const Card = ({ postList }) => {
    const [isOpen, setIsOpen] = useState(false);
    const childRef = useRef();

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    
    return (
        <div className="masonry sm:masonry-sm md:masonry-md">
            {
                postList && postList.length && postList.map((post) => {
                    return (
                        <div className="h-fit border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-300 dark:shadow-none overflow-hidden mb-10" key={post.i}>
                            <div className="flex px-6 py-4">
                                {post.author.user_profile_img ?
                                    <div className='flex flex-col justify-center'>
                                        <img className='size-12 rounded-full' src={post.author.user_profile_img} alt="post-profile" />
                                    </div> :
                                    <div className='flex flex-col justify-center'>
                                        <IoPersonCircleOutline size={50} style={{ color: '#0077B5' }} />
                                    </div>
                                }
                                <div className="flex flex-col px-3">
                                    <h1 className='text-xl font-medium text-black'>{post.author.name}</h1>
                                    < p className=' text-gray-400 text-xs'>{post.author.time}</p>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <p className="text-gray-700 text-base">{post.data}</p>
                            </div>
                            <div className="flow-root px-6 py-4">
                                <div className="float-left text-blue-500">
                                    <button className="flex font-bold text-center text-sm py-1 px-3 hover:border border-blue-500 rounded-full" type="button" onClick={toggleDrawer}>
                                        <TbEdit size={20} style={{ color: '#B7C9E2' }} /><span className="px-2">Edit</span>
                                    </button>
                                </div>

                                <div className="float-right text-blue-500">
                                    <button
                                        className="align-middle font-bold text-center text-sm py-1 px-6 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full"
                                        type="button">
                                        Post
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Card