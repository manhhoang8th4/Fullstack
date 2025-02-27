import React from 'react'
import {PayPalButtons, PayPalScriptProvider} from "@paypal/react-paypal-js"
const PayPalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider options={{"client id":"AQht59rTJLHbkDofXisUgCok8XVa6IcwfZ4TEM6CVpK1x6w-fkXY1iBRCfW_e5ga8wxRP30U-O8tztAa"}}>
      
      <PayPalButtons style={{layout:"vertical"}}
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units:[{amount:{value:amount}}]
        })
      }}
      onApprove={(data,actions) => {
        return actions.order.capture().then(onSuccess)
      }}
      onError={onError} 
      />
    </PayPalScriptProvider>
  )
}

export default PayPalButton