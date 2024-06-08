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

export default PrintableInvoice;
