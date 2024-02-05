import { Spinner } from '@ui/spinner/spinner';

export function SpinnerOverlay() {
  return (
    <div>
      <div className='absolute h-full w-full top-0 left-0 bg-slate-600 opacity-25'></div>
      <div className='absolute inset-2/4 w-12 h-12 -translate-x-2/4 -translate-y-1/2'>
        <Spinner />
      </div>
    </div>
  )
}