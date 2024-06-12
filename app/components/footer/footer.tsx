import { Span } from "next/dist/trace";
import { LuCopyright } from "react-icons/lu";
export default function Footer() {
    return (
        <div className="h-24 w-screen flex justify-center items-center">
            <div className='flex justify-centers'>
                <div className="m-auto">
                    <LuCopyright />
                </div>
                <div className='px-2'>
                    <p className="font-normal">2024. todai All rights reserved</p>
                </div>
            </div>
        </div>
    )
}