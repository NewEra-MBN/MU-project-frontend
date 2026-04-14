import type { JSX } from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/screen.png'
import bgImage from '../assets/stocksnap-books-2606859_1920.jpg'
export default function HomePage(): JSX.Element {
    return (
        <div className='relative min-h-screen flex flex-col text-white'>
            {/* Background Image*/}
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url(${bgImage})` }}
            />
            {/*Dark Overlay*/}
            <div className='absolute inset-0 bg-black/75' />
            {/* Header */}
            <header className='relative z-10 w-full h-14 flex items-center justify-center md:justify-start px-6 bg-(--color-neutral) shadow-sm'>
                <h1 className='text-xl font-bold text-primary'>MU-Brain-Wave</h1>
            </header>

            {/*Hero Section*/}
            <main className='relative h-auto flex-1 flex flex-col items-center md:items-start justify-center md:justify-center px-6 text-center md:text-left mt-12  md:mt-28'>
                <div>
                    <h2 className='text-6xl font-normal font-sans mb-4'>The Digital<br/>
                     <span className='italic font-light'>Atheneum</span>
                     </h2>
                    <p className='text-lg max-w-xl mb-8'>Your Gateway to Shared Knowledge. Access an elite institutional
                        repository designed for the modern academic. Securely curate,
                        preserve, and share high-impact research within a global scholarly
                        environment.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <Link to='signup' className='px-4 py-3 bg-primary) text-(--color-neutral) rounded font-medium cursor-pointer'>
                        Sign Up
                    </Link>
                    <Link to='login' className='px-4 py-3 bg-neutral text-(--color-primary) rounded font-medium cursor-pointer'>
                        Log In
                    </Link>
                </div>
            </main>

            <footer className='relative w-full py-6 text-center text-sm text-neutral'>
                <p className='mb-2'>
                    © 2024 The Scholarly Curator: An Institutional Repository
                </p>
                <div className='flex justify-center gap-6'>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                    <span>Citation Guide</span>
                    <span>Contact Support</span>
                </div>
            </footer>
            <Outlet/>
        </div>
    )
}