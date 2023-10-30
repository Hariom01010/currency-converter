import { useState } from 'react'
import './App.css'
import {InputBox} from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
import image from "./assets/money.png"

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("eur")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = ()=>{setConvertedAmount(amount * currencyInfo[to])}

  return (
    <>
      <div className='flex justify-around items-center'>
        <div>
          <img src={image} alt="" className='invert'/>
        </div>

        <div>
          <form action="" onSubmit={(e)=>e.preventDefault()} className='flex flex-col'> 
            <InputBox 
              label="From"
              amount = {amount}
              onAmountChange={(amount)=>setAmount(amount)}
              onCurrencyChange={(currency)=> setFrom(currency)}
              currencyOptions={options}
              selectCurrency={from}
              className="mt-8"
            />

            <button className='bg-blue-800 hover:bg-blue-600 text-slate-50 p-1 mx-auto w-[5rem] rounded-lg border-4 border-slate-50' onClick={swap}>Swap</button>

            <InputBox 
              label="To"
              amount={convertedAmount}
              onAmountChange={(setConvertedAmount)}
              onCurrencyChange={(currency)=> setTo(currency)}
              currencyOptions={options}
              selectCurrency={to}
            />

            <button type="submit" className='text-slate-100 hover:bg-blue-500 bg-blue-400 p-4 w-[20rem] mx-auto my-8' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
