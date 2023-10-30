import React, {useId} from 'react'

function InputBox({
  label,
  amount, 
  onAmountChange, 
  onCurrencyChange, 
  currencyOptions =[], 
  selectCurrency,
  className
}) {

  const amountInputId = useId()

  return (
      <div className={`bg-white w-[40rem] m-auto rounded-md ${className}`}>

        <div className='flex justify-between'>
          <label className='m-4 text-gray-500 font-bold text-lg' htmlFor={amountInputId}>{label}</label>
          <label className='m-4 text-gray-500  text-[17px]'>Currency Type</label>
        </div>

        <div className='flex justify-between'>
          <input 
            id={amountInputId}
            type="number" 
            placeholder='Amount' 
            className='m-4 outline-none cursor-pointer' 
            value={amount} 
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
          />

          <select 
            id="currency" 
            className='m-4 p-2 outline-none cursor-pointer bg-gray-300 rounded-sm shadow-inner' 
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}

          >
            {currencyOptions.map((currency)=>{
              return <option key={currency} selected={currency == selectCurrency? "selected": ""} value={currency}>{currency.toUpperCase()}</option>
            })}
          </select>
        </div>
      </div>
  )
}

export default InputBox