import { Poppins } from 'next/font/google';
import Homepage from './home/index'

const inter = Poppins({ subsets: ['latin-ext'], weight: "400" })

export default function Home() {
  return <Homepage />
}
