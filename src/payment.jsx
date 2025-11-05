import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export default function PaymentPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const plan = searchParams.get('plan') || 'pro';

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardName, setCardName] = useState('');
  const [email, setEmail] = useState('');
  const [showFirstWarning, setShowFirstWarning] = useState(false);
  const [showSecondWarning, setShowSecondWarning] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const planDetails = {
    pro: {
      name: "Pro",
      price: "$12.00",
      description: "24‑bit dynamic silence",
    },
    silencepass: {
      name: "SilencePass — Season 1",
      price: "$39.99",
      description: "Access all tiers + weekly drops",
    }
  };

  const currentPlan = planDetails[plan];

  const isFormValid = () => {
    const month = parseInt(expiryDate.substring(0, 2));
    const isValidExpiry = expiryDate.length === 5 && month >= 1 && month <= 12;

    return cardNumber.length >= 15 &&
           isValidExpiry &&
           cvv.length >= 3 &&
           cardName.trim().length > 0 &&
           email.includes('@');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAttempted(true);
    if (isFormValid()) {
      setShowFirstWarning(true);
    }
  };

  const handleFirstConfirm = () => {
    setShowFirstWarning(false);
    setShowSecondWarning(true);
  };

  const handleSecondConfirm = () => {
    setShowSecondWarning(false);
    navigate('/success');
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const parts = [];
    for (let i = 0, len = v.length; i < len && i < 16; i += 4) {
      parts.push(v.substring(i, i + 4));
    }
    return parts.join(' ');
  };

  const formatExpiry = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const getFieldError = (field) => {
    if (!attempted) return null;

    switch(field) {
      case 'email':
        return !email.includes('@') ? 'Valid email required' : null;
      case 'cardNumber':
        return cardNumber.length < 15 ? 'Card number must be 15-19 digits' : null;
      case 'expiryDate':
        if (expiryDate.length !== 5) return 'Format: MM/YY';
        const month = parseInt(expiryDate.substring(0, 2));
        if (month < 1 || month > 12) return 'Month must be 01-12';
        return null;
      case 'cvv':
        return cvv.length < 3 ? 'CVV must be 3-4 digits' : null;
      case 'cardName':
        return cardName.trim().length === 0 ? 'Cardholder name required' : null;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold">Q</div>
            <span className="font-semibold tracking-tight">Quietness.ai</span>
          </div>
          <Badge variant="secondary">Secure Checkout</Badge>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <Card className="rounded-2xl">
              <CardHeader>
                <CardTitle>{currentPlan.name}</CardTitle>
                <p className="text-sm text-gray-600">{currentPlan.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">{currentPlan.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">$0.00</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold">{currentPlan.price}</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg text-xs text-gray-600">
                  <p className="font-semibold mb-1">What's included:</p>
                  <ul className="list-disc list-inside space-y-0.5">
                    {plan === 'pro' ? (
                      <>
                        <li>Lossless quiet (FLAC‑0dB)</li>
                        <li>All Silence Packs + weekly drops</li>
                        <li>API access (10k quiet‑calls)</li>
                        <li>Digital & Analog silence profiles</li>
                      </>
                    ) : (
                      <>
                        <li>Arctic Silence (Tier 1)</li>
                        <li>Hawaiian Silence (Tier 2)</li>
                        <li>Lunar Silence (Tier 3)</li>
                        <li>Weekly premium drops</li>
                      </>
                    )}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Payment Details</h2>
            <Card className="rounded-2xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Email
                      {getFieldError('email') && <span className="text-red-600 ml-1">*</span>}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        getFieldError('email')
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-gray-900'
                      }`}
                      required
                    />
                    {getFieldError('email') && (
                      <p className="text-red-600 text-xs mt-1">{getFieldError('email')}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Card Number
                      {getFieldError('cardNumber') && <span className="text-red-600 ml-1">*</span>}
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 font-mono ${
                        getFieldError('cardNumber')
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-gray-900'
                      }`}
                      required
                    />
                    {getFieldError('cardNumber') && (
                      <p className="text-red-600 text-xs mt-1">{getFieldError('cardNumber')}</p>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium block mb-2">
                        Expiry Date
                        {getFieldError('expiryDate') && <span className="text-red-600 ml-1">*</span>}
                      </label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(formatExpiry(e.target.value))}
                        placeholder="MM/YY"
                        maxLength="5"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 font-mono ${
                          getFieldError('expiryDate')
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-gray-900'
                        }`}
                        required
                      />
                      {getFieldError('expiryDate') && (
                        <p className="text-red-600 text-xs mt-1">{getFieldError('expiryDate')}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-sm font-medium block mb-2">
                        CVV
                        {getFieldError('cvv') && <span className="text-red-600 ml-1">*</span>}
                      </label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, '').substring(0, 4))}
                        placeholder="123"
                        maxLength="4"
                        className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 font-mono ${
                          getFieldError('cvv')
                            ? 'border-red-500 focus:ring-red-500'
                            : 'border-gray-300 focus:ring-gray-900'
                        }`}
                        required
                      />
                      {getFieldError('cvv') && (
                        <p className="text-red-600 text-xs mt-1">{getFieldError('cvv')}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Cardholder Name
                      {getFieldError('cardName') && <span className="text-red-600 ml-1">*</span>}
                    </label>
                    <input
                      type="text"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="John Doe"
                      className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        getFieldError('cardName')
                          ? 'border-red-500 focus:ring-red-500'
                          : 'border-gray-300 focus:ring-gray-900'
                      }`}
                      required
                    />
                    {getFieldError('cardName') && (
                      <p className="text-red-600 text-xs mt-1">{getFieldError('cardName')}</p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    className="w-full rounded-xl py-6 text-lg font-semibold"
                  >
                    Pay {currentPlan.price}
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    🔒 Your payment information is secure and encrypted
                  </p>
                </form>
              </CardContent>
            </Card>
            <div className="mt-4 text-center">
              <button
                onClick={() => navigate('/')}
                className="text-sm text-gray-600 hover:underline"
              >
                ← Back to home
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* First Warning Dialog */}
      <Dialog open={showFirstWarning} onOpenChange={setShowFirstWarning}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Wait a moment...</DialogTitle>
            <DialogDescription className="text-base pt-2">
              Quietness.ai would like to remind you our product is <strong>literally just silence</strong>.
              <br/><br/>
              Are you sure you want to pay for that?
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button
              variant="outline"
              onClick={() => setShowFirstWarning(false)}
              className="flex-1"
            >
              No, take me back
            </Button>
            <Button
              onClick={handleFirstConfirm}
              className="flex-1"
            >
              Yes, I'm sure
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Second Warning Dialog */}
      <Dialog open={showSecondWarning} onOpenChange={setShowSecondWarning}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely certain?</DialogTitle>
            <DialogDescription className="text-base pt-2">
              To be perfectly clear, this is a <strong>joke website</strong>. This is literally just throwing your money away.
              <br/><br/>
              Are you <em>absolutely certain</em> about this?
            </DialogDescription>
          </DialogHeader>
          <div className="flex gap-3 mt-4">
            <Button
              variant="outline"
              onClick={() => setShowSecondWarning(false)}
              className="flex-1"
            >
              No, I've changed my mind
            </Button>
            <Button
              onClick={handleSecondConfirm}
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Yes, I'm committed to the bit
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
