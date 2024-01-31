import logo from '@assets/logo.svg'

export function App() {

  return (
    <div className='flex justify-center h-full items-center'>
      <div className='bg-white p-3 rounded-md shadow-md'>
        <img src={logo} width={100} className='mb-5' />
        <h1 className='text-center'>SweetHome</h1>
      </div>
    </div>
  )
}
