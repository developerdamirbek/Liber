import React from 'react'
import { Header } from './header/header'
import { Footer } from './footer/footer'

export const MainLayout = ({ children }) => {
    return (
        <>
            <div className='h-[100vh] flex flex-col justify-between'>
                <div>
                    <Header />
                    <main>
                        {children}
                    </main>
                </div>
                    <Footer />
            </div>
        </>
    )
}
