import '../styles/globals.css'
import Link from 'next/link'
import Image from 'next/image'

function Marketplace({ Component, pageProps }) {
  return (
    <body className="background min-h-screen">
      <nav className="flex fixed w-full font-mono justify-start  flex p-6">
      <Link href="/">
        <a className="text-4xl text-white font-bold">Lock & Key</a>
      </Link>
        <div className=" mt-4">
        
          <Link href="/create-item">
            <a className=" mx-10  text-white hover:text-indigo-200">
              List
            </a>
          </Link>

          <Link href="/collect">
            <a className="mr-10 text-white hover:text-indigo-200">
              Collect
            </a>
          </Link>

          <Link href="/my-assets">
            <a className="text-white hover:text-indigo-200">
              My NFTs
            </a>
          </Link>

          
          {/* <Image className="w-2/3 h-full mx-auto" src="/pg.png"></Image> */}
        </div>
      </nav>
      <Component {...pageProps} />
    </body>
  )
}

export default Marketplace