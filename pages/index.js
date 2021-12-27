import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let rpcEndpoint = null

if (process.env.NEXT_PUBLIC_WORKSPACE_URL) {
  rpcEndpoint = process.env.NEXT_PUBLIC_WORKSPACE_URL
}


export default function Home() {

  async function addMumbai() {
    
    window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
      chainId: '0x13881',
      chainName: 'Mumbai',
      nativeCurrency: {
          name: 'MATIC Token',
          symbol: 'MATIC',
          decimals: 18
      },
      rpcUrls: ['https://rpc-mumbai.maticvigil.com'],
      blockExplorerUrls: ['https://mumbai.polygonscan.com/']
      }]
      })
      .catch((error) => {
      console.log(error)
      }) 

      toast('🦄 Mumbai Network Added!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
  }
  
  return (
    <div className="flex font-mono justify-center">
        <div className="shadow-xl mt-40 rounded-2xl mt-20 p-10 w-1/2 bg-white">
          <p className="rainbow-text mb-8 text-2xl font-semibold">
            Welcome to Lock & Key
          </p>
          <p className='rainbow-text mb-4'>
            List password protected NFTs on Polygon Testnet!
          </p>
          <p className='rainbow-text mb-4'>
            This is a work in progress but down the road I want to integrate secured delivery through 2FA via phone number!
          </p>

          <p className='rainbow-text mb-4'>
            Click the Polygon logo to add the necessary network to Metamask!
          </p>


          <img
            onClick={addMumbai}
            className='float-right '  
            src="/pg.png"
            width={50}
            height={50}
          />

          
        </div>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
          {/* Same as */}
          <ToastContainer />
    
    </div>
  )
}
