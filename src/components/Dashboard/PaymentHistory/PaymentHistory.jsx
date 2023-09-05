import React from 'react'
import usePayments from '../../hooks/usePayments/usePayments'

const PaymentHistory = () => {
const [payments, refetch]=usePayments()
  return (
    <>
      <div className="overflow-x-auto overflow-y-auto  h-96">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='bg-green-500 text-white'>
        <th>Sl</th>
        <th>Itemsname</th>
        <th>Price</th>
        <th>Email</th>
        <th>Quantity</th>
        <th>TransactionId</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody className='text-white'>
{payments.map((payment,index)=><tr key={index}>
        <td>{index+1}</td>
        <td>{payment.itemsName.join(' , ')}</td>
        <td>{payment.price}</td>
        <td>{payment.email}</td>
        <td>{payment.quantity}</td>
        <td>{payment.transactionId}</td>
        <td><span className='bg-green-500 text-white px-5 rounded-lg py-1'>{payment.status}</span></td>
      </tr>)}
    
      
    </tbody>
  </table>
</div>
    </>
  )
}

export default PaymentHistory
