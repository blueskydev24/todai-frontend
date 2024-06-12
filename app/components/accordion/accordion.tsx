'use client'
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Accordion() {
    const pathname = usePathname();

    const navLinks = [
        {
            menu: 'Ideate',
            subMenu: [
                {
                    name: 'Linkedin',
                    href: '/pages/linkedin'
                },
                {
                    name: 'Tiktok',
                    href: '/pages/tiktok'
                },
                {
                    name: 'Instagram',
                    href: '/ins'
                },
                {
                    name: 'Current Trends',
                    href: '//'
                },
                {
                    name: 'Viral Content',
                    href: '///'
                },
            ]
        },
        {
            menu: 'Create',
            subMenu: [
                {
                    name: 'Video & Caption',
                    href: '////'
                },
                {
                    name: 'Image & Caption',
                    href: '/////'
                },
                {
                    name: 'Carousel & Caption',
                    href: '/cc'
                },
                {
                    name: 'Current Trends',
                    href: '//ct'
                },
                {
                    name: 'Bring Your Own Links',
                    href: '//bol'
                },
            ]
        },
        {
            menu: 'Shedule',
            subMenu: [
                {
                    name: 'Calendar',
                    href: '/cal'
                },
                {
                    name: 'Global Occasions',
                    href: '/go'
                },
            ]
        },
        {
            menu: 'Engage',
            subMenu: [
                {
                    name: 'Comment & Engage',
                    href: '/come'
                },

            ]
        },
        {
            menu: 'Assets',
            subMenu: [
                {
                    name: 'All uploaded assets',
                    href: '/ass'
                },

            ]
        }
    ]
    return (
        <div>
            {navLinks.map((link) => {
                return (
                    <div className="relative overflow-hidden py-3" key={link.menu}>
                        <input type="checkbox" className="peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer"></input>
                        <div className="h-12 flex items-center border-b-2 border-slate-300 pb-2">
                            <h1 className="text-2xl font-bold" >{link.menu}</h1>

                        </div>
                        <div className="absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180">
                            <IoIosArrowDown />
                        </div>
                        <div className="overflow-hidden transition-all duration-500 peer-checked:max-h-0">
                            <ul className="py-3">
                                {link.subMenu.map((submenu) => {
                                    const isActive = pathname.startsWith(submenu.href)
                                    return (
                                        <li className="text-lg font-medium py-2" key={submenu.name}>
                                            <Link href={submenu.href} key={submenu.name} className={isActive ? "text-gray-400" : ""}>{submenu.name}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                )
            })
            }
        </div>

    )
}
