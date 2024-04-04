import { Earth, Heart, MessageCircleMore } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='hidden row-span-3 md:grid md:grid-rows-6 bg-muted px-10 py-10 space-y-3'>
        <div className='row-span-5 grid grid-cols-7 gap-5 pb-3 border-b border-input'>
            <div className=' col-span-2 px-2'>
                <div className='pacifico-regular mr-3 text-3xl text-primary'>dribbble</div>
                <div className='mt-8'>Dribbble is the world's leading community for creatives to share, grow, and get hired.</div>
                <div className='mt-10 flex space-x-3'>

                    <Earth />

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>

                    <MessageCircleMore />
                </div>
            </div>
            <div className=' space-y-2'>
                <div className='font-bold'>For designers</div>
                <div className='text-sm hover:underline'>Go Pro!</div>
                <div className='text-sm hover:underline'>Explore design work</div>
                <div className='text-sm hover:underline'>Design blog</div>
                <div className='text-sm hover:underline'>Overtime podcast</div>
                <div className='text-sm hover:underline'>Playoffs</div>
                <div className='text-sm hover:underline'>Weekly Warm-Up</div>
                <div className='text-sm hover:underline'>Refer a Friend</div>
                <div className='text-sm hover:underline'>Code of conduct</div>
            </div>
            <div className='space-y-2'>
                <div className='font-bold'>Hire designers</div>
                <div className='text-sm hover:underline'>Post a job opening</div>
                <div className='text-sm hover:underline'>Post a freelance</div>
                <div className='text-sm hover:underline'>Search for designers</div>
                <div className='text-sm font-bold'>Brands</div>
                <div className='text-sm hover:underline'>Advertise with us</div>
            </div>
            <div className='space-y-2'>
                <div className='font-bold'>Company</div>
                <div className='text-sm hover:underline'>About</div>
                <div className='text-sm hover:underline'>Careers</div>
                <div className='text-sm hover:underline'>Support</div>
                <div className='text-sm hover:underline'>Media kit</div>
                <div className='text-sm hover:underline'>Testimonials</div>
                <div className='text-sm hover:underline'>API</div>
                <div className='text-sm hover:underline'>Terms of service</div>
                <div className='text-sm hover:underline'>Privacy policy</div>
                <div className='text-sm hover:underline'>Cookie policy</div>
            </div>
            <div className=' space-y-2'>
                <div className='font-bold'>Directories</div>
                <div className='text-sm hover:underline'>Design jobs</div>
                <div className='text-sm hover:underline'>Designers for hire</div>
                <div className='text-sm hover:underline'>Freelance designers for hire</div>
                <div className='text-sm hover:underline'>Tags</div>
                <div className='text-sm hover:underline'>Places</div>
                <div className='font-bold mt-2'>Design assets</div>
                <div className='text-sm hover:underline'>Dribbble Marketplace</div>
                <div className='text-sm hover:underline'>Creative Market</div>
                <div className='text-sm hover:underline'>Fontspring</div>
                <div className='text-sm hover:underline'>Font Squirrel</div>
            </div>
            <div className=' space-y-2'>
                <div className='text-sm font-bold'>Design Resources</div>
                <div className='text-sm hover:underline'>Freelancing</div>
                <div className='text-sm hover:underline'>Design Hiring</div>
                <div className='text-sm hover:underline'>Design Portfolio</div>
                <div className='text-sm hover:underline'>Design Education</div>
                <div className='text-sm hover:underline'>Creative Process</div>
                <div className='text-sm hover:underline'>Design Industry</div>
                <div className='text-sm hover:underline'>Trends</div>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div>@ 2023 Dribbble. All rights reserved.</div> 
            <div className='flex justify-center items-center space-x-3'><span>20,501,853 shots dribbbled</span> <Earth className='inline-block text-primary'/></div>
        </div>
    </div>
  )
}
