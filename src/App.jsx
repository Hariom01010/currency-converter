import { useState } from 'react'
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
      <h1 className='text-slate-50 my-4 text-2xl text-center'>Currency Converter</h1>

        <div className='flex flex-col'>
          <div>
            <img src={image} alt="money_image" width={300} className='invert mx-auto'/>
          </div>

          <div>
            <form action="" onSubmit={(e)=>e.preventDefault()} className='flex flex-col items-center'> 
              <InputBox 
                label="From"
                amount = {amount}
                onAmountChange={(amount)=>setAmount(amount)}
                onCurrencyChange={(currency)=> setFrom(currency)}
                currencyOptions={options}
                selectCurrency={from}
              />

              <button className='bg-cyan-500 text-slate-50 border-slate-50 border-4 p-2 w-[4rem]' onClick={swap}> Swap</button>

              <InputBox 
                label="To"
                amount={convertedAmount}
                onAmountChange={(setConvertedAmount)}
                onCurrencyChange={(currency)=> setTo(currency)}
                currencyOptions={options}
                selectCurrency={to}
              />

              <button type="submit" className='bg-green-500 text-slate-50 p-4 rounded-md m-4 hover:shadow-md hover:shadow-blue-500/50' onClick={convert}>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
            </form>
            <div className='text-right'>
              <span className='text-slate-50 text-[10px]'>Background Cr:</span>
              <a href="https://www.vecteezy.com/free-vector/finance-background" target="_blank" className='text-slate-50 text-[10px]'>Finance Background Vectors by Vecteezy</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
