export const TABLE_GRID_MARKUP = `
minmax(100px, max-content) minmax(100px, max-content) minmax(150px, max-content) minmax(150px, auto)
minmax(100px, 150px) minmax(145px, 150px) minmax(100px, 130px)
minmax(94px, 106px) minmax(60px, 75px) minmax(60px, 75px)
`;

export const TABLE_ID = {
  date: 'create',
  supplier: 'supplier',
  tax: 'tax',
  net: 'net',
  total: 'total',
  supplier_account: 'supplier_account',
  category: 'category',
};

export const TABLE_COLUMN_NAMES = [
  {
    id: 'receipt_date',
    name: 'Date',
  },
  {
    id: 'RecInv',
    name: 'Receipt/Invoice',
  },
  {
    id: 'supplier',
    name: 'Supplier/customer',
  },
  // {
  //   id: 'supplier_account',
  //   name: 'SPLR Account',
  // },
  // {
  //   id: 'category',
  //   name: 'Category',
  // },
  {
    id: 'vat_code',
    name: 'VAT Rate',
  },
  {
    id: 'currency',
    name: 'CUR',
  },
  {
    id: 'net',
    name: 'Net',
  },
  {
    id: 'tax',
    name: 'Tax',
  },
  {
    id: 'total',
    name: 'Total',
  },
 
];
