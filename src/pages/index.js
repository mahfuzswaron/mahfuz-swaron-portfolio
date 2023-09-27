import Image from 'next/image'
import { Poppins } from 'next/font/google'
import HeroSection from '@/components/pageComponents/HeroSection'
import Homepage from './home/index'

const inter = Poppins({ subsets: ['latin-ext'], weight: "400" })

export default function Home() {
  return (
    <main className=''>
      <Homepage />
    </main>
  )
}
