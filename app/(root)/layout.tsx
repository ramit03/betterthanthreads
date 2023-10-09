import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"
import '../globals.css'
import Topbar from "../../components/shared/Topbar"
import LeftSidebar from "../../components/shared/LeftSideBar"
import RightSidebar from "../../components/shared/RightSideBar"
import Bottombar from "../../components/shared/BottomBar"

export const metadata = {
    title:'Betterthanthreads',
    description:'A Next.js 13 Meta Threads Application'
}

const inter = Inter({subsets:["latin"]})

export default function RootLayout({children}:{children:React.ReactNode}){
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className}  bg-dark-1`}>
                    <Topbar />
                    {/* {children} */}
                    <main className="flex flex-row">
                        <LeftSidebar />

                        <section className="main-container">
                            <div className="w-full max-w-4xl">
                                {children}
                            </div>
                        </section>

                        <RightSidebar />
                    </main>
                    <Bottombar />
                </body>
            </html>
        </ClerkProvider>
    )
}