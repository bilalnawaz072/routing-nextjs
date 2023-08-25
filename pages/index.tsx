import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import Camera from "../public/camera.jpg";
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
  return (
   <div className='container space-x-2'>
    {/* <Link href='/'>Home</Link>
    <Link href='dashboard/about' as={'/bilal'} prefetch={true}>About</Link>
    <Link href='dashboard/contact'>Contact</Link> */}
       {/* <Image 
       src={Camera} 
       height={720} 
       width={1080} 
       alt='Love is Life' 
       loading='lazy'
       /> */}

       <Image 
       src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
      //  width={600}
      //  height={300}
       alt='Love is Life'
       priority = {true}
       fill 
       quality={100}
      //  placeholder='blur'
      //  blurDataURL='/camera.jpg'
      // style={imageStyle}
      onLoadingComplete={(e)=>console.log(e.naturalWidth)}
       />
   </div>
  )
}
