'use client';

import HeroVideoSection from '../components/HeroVideoSection';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Copy } from "lucide-react";
import { Button } from "../components/ui/button";

export default function PaymentPage() {
  const bankDetails = {
    accountName: "Belgotex India Pvt. Ltd.",
    accountNumber: "123456789012",
    ifsc: "HDFC0001234",
    bankName: "HDFC Bank",
    branch: "Connaught Place, New Delhi",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroVideoSection
        heading="Safe & Secure Transactions"
        description="Your data is protected with top-level encryption for worry-free payments."
        videoSrc="/assets/video/video4.mp4"
      />

      <main>
        {/* Intro Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
                Simplified Payments
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A smooth and transparent payment experience—quick, secure, and reliable.
              </p>
            </div>

            {/* Payment Details Card */}
            <section className="max-w-3xl mx-auto">
              <Card className="shadow-lg rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-xl">Bank Transfer Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between items-center">
                    <p className="font-medium">Account Name:</p>
                    <div className="flex items-center gap-2">
                      <span>{bankDetails.accountName}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(bankDetails.accountName)}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-medium">Account Number:</p>
                    <div className="flex items-center gap-2">
                      <span>{bankDetails.accountNumber}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(bankDetails.accountNumber)}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-medium">IFSC Code:</p>
                    <div className="flex items-center gap-2">
                      <span>{bankDetails.ifsc}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => copyToClipboard(bankDetails.ifsc)}
                      >
                        <Copy size={16} />
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-medium">Bank Name:</p>
                    <span>{bankDetails.bankName}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <p className="font-medium">Branch:</p>
                    <span>{bankDetails.branch}</span>
                  </div>
                </CardContent>
              </Card>

              <p className="text-center text-gray-600 mt-10">
                Please use the above details to complete your payment.
                Once done, kindly share the transaction reference with us.
              </p>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
