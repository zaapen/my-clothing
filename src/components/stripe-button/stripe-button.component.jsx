import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51GqBSkH8vhEdu5cqPYXGPs7N7UJnmaHTWlfy5jYQ1X25Ndd2ZyeHpRgEv8m0Hv9UkTcE7BuNdKUfYHeBXBCa9g4A00cWh412Oh';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='My Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;