"use client";
import { useReactToPrint } from "react-to-print";
import { Button } from "../../ui/button";
import PrintableInvoice from '@/components/invoice/printable-invoice';
import { useRef } from 'react';

export default function InvoiceButton() {
  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <Button className="bg-[#5D5CFF]" onClick={handlePrint}>
        Print / Download
      </Button>
      <div style={{ display: 'none' }}>
        <PrintableInvoice ref={componentRef} />
      </div>
    </>

  );
}
