import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Check, X } from 'lucide-react';
import { useState } from 'react';

const PAYPAL_CLIENT_ID = 'BAAI_kixpDN8FEkmQRg3AvxDA4oXKeXkUce_hBdzNNqlLJluxf08enVgPK15Mf-cgkIkFQp9zQeYcCR4O0';

export interface Plan {
  name: string;
  price: number;
}

export default function PayPalModal({ plan, onClose }: { plan: Plan; onClose: () => void }) {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  return (
    <div className="paypal-modal" role="dialog" aria-modal="true" aria-label={`PayPal checkout for ${plan.name}`}>
      <div className="paypal-modal-backdrop" onClick={onClose} />
      <div className="paypal-modal-card">
        <button className="paypal-modal-close" type="button" onClick={onClose} aria-label="Close"><X size={18} /></button>
        {status === 'success' ? (
          <div className="paypal-success">
            <Check size={24} />
            <strong>Payment successful</strong>
            <p>Thanks — your {plan.name} order is confirmed. We&apos;ll be in touch shortly.</p>
            <button className="button button-primary" type="button" onClick={onClose}>Done</button>
          </div>
        ) : (
          <>
            <span className="eyebrow">PAYPAL CHECKOUT</span>
            <h3>{plan.name}</h3>
            <p className="paypal-amount">${plan.price} USD</p>
            <PayPalScriptProvider options={{ clientId: PAYPAL_CLIENT_ID, currency: 'USD', intent: 'capture' }}>
              <PayPalButtons
                style={{ layout: 'vertical' }}
                createOrder={(data, actions) => actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [{ description: `DataWeaveX ${plan.name} plan`, amount: { currency_code: 'USD', value: String(plan.price) } }],
                })}
                onApprove={async (data, actions) => {
                  try {
                    await actions.order?.capture();
                    setStatus('success');
                  } catch {
                    setStatus('error');
                  }
                }}
                onError={() => setStatus('error')}
              />
            </PayPalScriptProvider>
            {status === 'error' && <p className="form-error">Payment failed. Please try again.</p>}
          </>
        )}
      </div>
    </div>
  );
}