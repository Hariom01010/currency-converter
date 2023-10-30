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
      <div className={`bg-slate-50 rounded-md w-[23rem] p-4`}>

        <div className='flex justify-between mb-5'>
          <label className='ml-1 text-slate-400' htmlFor={amountInputId}>{label}</label>
          <label className='mr-1 text-slate-400'>Currency Type</label>
        </div>

        <div className='flex justify-between'>
          <input 
            id={amountInputId}
            type="number" 
            placeholder='Amount' 
            className='shadow-inner w-[10rem] outline-1 outline-slate-600 p-2' 
            value={amount} 
            onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
          />

          <select 
            id="currency" 
            className='outline-none shadow-inne p-1' 
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