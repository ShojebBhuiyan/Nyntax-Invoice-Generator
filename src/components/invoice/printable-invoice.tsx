"use client";

import React from 'react';
import Invoice from '.';

const PrintableInvoice = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <Invoice />
    </div>
  );
});

PrintableInvoice.displayName = 'PrintableInvoice';

export default PrintableInvoice;
