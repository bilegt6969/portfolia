import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './components/Header'
import About from './components/About'



export default function Home() {
  return (
    <div className='max-w-[30rem] mx-auto'>
      <title>b1lgee</title>

     <Header/>
     <About/>

    </div>
  )
}
