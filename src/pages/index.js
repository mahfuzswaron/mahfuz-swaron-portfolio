import Image from 'next/image'
import { Poppins } from 'next/font/google'
import HeroSection from '@/components/pageComponents/HeroSection'
import Homepage from './(pages)/home'

const inter = Poppins({ subsets: ['latin-ext'], weight: "400" })

export default function Home() {
  return (
    <main className='bg-slate-900'>
      <Homepage />
    </main>
  )
}
