// // import React, { useState } from "react";
// // import { InvoiceTableStyles as Styled } from "./PurchaseTable.style";
// // // import { TInputFields } from "../PhotoDetails/PhotoDetailsContent/photoDetailsContent.constants";
// // import { TInputFields } from "components/PhotoDetailsContent/photoDetailsContent.constants";
// // import { Input } from "components/Input";
// // import { Icon } from "components/Icons";
// // import { IRecieptInvoiceData } from "screens/RIDATA/types/RIdata.type";

// // interface Item {
// // 	description: string;
// // 	vatCode: number;
// // 	units: number;
// // 	price: number;
// // 	net: number;
// // 	vat: number;
// // 	total: number;
// // }

// // interface IFieldsBox {
// // 	inputFields: IRecieptInvoiceData | null;
// // 	// onDatePickerClickHandler: (
// // 	//   e: React.MouseEvent<HTMLButtonElement, MouseEvent>
// // 	// ) => void;
// // 	// onClickOutsideDatePickerHandler: (
// // 	//   event: React.MouseEvent<HTMLDivElement, MouseEvent>
// // 	// ) => void;
// // 	// isOpen: boolean;
// // 	// formattedDate: string;
// // 	// datePickerRef: React.RefObject<HTMLButtonElement>;
// // 	// selectedDate: Date | null;
// // 	// onForbiddenCharacterClick: (event: React.KeyboardEvent<Element>) => void;
// // }

// // const PurchaseTable: React.FC<IFieldsBox> = (props) => {
// // 	const { inputFields } = props;
// // 	const [items, setItems] = useState<Item[]>([{ description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 }]);

// // 	// const handleItemChange = (index: number, field: keyof Item, value: string | number) => {
// // 	// 	const updatedItems = [...items];
// // 	// 	updatedItems[index] = {
// // 	// 		...updatedItems[index],
// // 	// 		[field]: value,
// // 	// 	};
// // 	const inputFields = [
// // 		{ label: "Net", value: receiptData.net, inputType: "text", onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'net') },
// // 		{ label: "Tax", value: receiptData.tax, inputType: "text", onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'tax') },
// // 		{ label: "Total", value: receiptData.total, inputType: "text", onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e, 'total') }
// // 	  ];

// // 	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
// // 		// Update receiptData here using setState, assuming receiptData is in state
// // 		setReceiptData(prevState => ({
// // 		  ...prevState,
// // 		  [field]: e.target.value
// // 		}));
// // 	  };
// // 		// if (field === "price" || field === "units" || field === "vatCode") {
// // 		// 	const price = updatedItems[index].price;
// // 		// 	const units = updatedItems[index].units;
// // 		// 	const vatCode = updatedItems[index].vatCode;
// // 		// 	const net = price * units;
// // 		// 	const vat = net * (vatCode / 100);
// // 		// 	const total = net + vat;
// // 		// 	updatedItems[index] = { ...updatedItems[index], net, vat, total };
// // 		// }
// // 		setItems(updatedItems);
// // 	};

// // 	const addItem = () => {
// // 		setItems([...items, { description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 }]);
// // 	};

// // 	const removeItem = (index: number) => {
// // 		const updatedItems = items.filter((_, i) => i !== index);
// // 		setItems(updatedItems);
// // 	};

// // 	const totalNet = items.reduce((acc, item) => acc + item.net, 0);
// // 	const totalVat = items.reduce((acc, item) => acc + item.vat, 0);
// // 	const grandTotal = items.reduce((acc, item) => acc + item.total, 0);

// // 	return (
// // 		<Styled.ReceiptItemTable>
// // 			<Styled.Table>
// // 				<thead>
// // 					<tr>
// // 						<Styled.TableHeader className="description">Description</Styled.TableHeader>
// // 						<Styled.TableHeader>VAT Code</Styled.TableHeader>
// // 						<Styled.TableHeader>Units</Styled.TableHeader>
// // 						<Styled.TableHeader>Price</Styled.TableHeader>
// // 						<Styled.TableHeader>Net</Styled.TableHeader>
// // 						<Styled.TableHeader>VAT</Styled.TableHeader>
// // 						<Styled.TableHeader>Total</Styled.TableHeader>
// // 						<Styled.TableHeader></Styled.TableHeader>
// // 					</tr>
// // 				</thead>
// // 				<tbody>
// // 					{items.map((item, index: number) => (
// // 						<tr key={index}>
// // 							<Styled.TableData>
// // 								<Styled.Input type="text" value={item.description} onChange={(e) => handleItemChange(index, "description", e.target.value)} />
// // 							</Styled.TableData>
// // 							<Styled.TableData>
// // 								<Styled.Input type="number" value={item.vatCode} onChange={(e) => handleItemChange(index, "vatCode", parseFloat(e.target.value))} />
// // 							</Styled.TableData>
// // 							<Styled.TableData>
// // 								<Styled.Input type="number" value={item.units} onChange={(e) => handleItemChange(index, "units", parseFloat(e.target.value))} />
// // 							</Styled.TableData>
// // 							<Styled.TableData>
// // 								<Styled.Input type="number" value={item.price} onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))} />
// // 							</Styled.TableData>
// // 							<Styled.TableData>
// // 								<Styled.Input type="number" value={item.net} onChange={(e) => handleItemChange(index, "net", parseFloat(e.target.value))} />
// // 							</Styled.TableData>
// // 							<Styled.TableData>
// // 								<Styled.Input type="number" value={item.vat} onChange={(e) => handleItemChange(index, "vat", parseFloat(e.target.value))} />
// // 							</Styled.TableData>
// // 							<Styled.TableData>
// // 								<Styled.Input type="number" value={item.total} onChange={(e) => handleItemChange(index, "total", parseFloat(e.target.value))} />
// // 							</Styled.TableData>
// // 							<Styled.TableData>
// // 								<Styled.StyledLink onClick={() => removeItem(index)}>
// // 									<Icon type="removeCross" />
// // 								</Styled.StyledLink>
// // 							</Styled.TableData>
// // 						</tr>
// // 					))}
// // 				</tbody>
// // 			</Styled.Table>
// // 			<Styled.Summary>
// // 			<Styled.Addnew onClick={addItem}>Add new line</Styled.Addnew>
// // 				{/* <Styled.Total>
// // 					{inputFields.map(
// // 						(item: any) =>(
// // 							item.label === "Net" ||
// // 							item.label === "Tax" ||
// // 							item.label === "Total") && (
// // 								<Styled.InputWrapper>
// // 									<Styled.Label>{item.label}</Styled.Label>
// //                                     <Styled.InputDiv>
// // 									<Input value={item.value} inputType={item.inputType} onChangeValue={item.onChange} isTextArea={item.isTextArea} isHiddenLabel isNoMargin isRemoveBorder />
// //                                     </Styled.InputDiv>
// // 								</Styled.InputWrapper>
// // 							)
// // 					)}
				
// // 				</Styled.Total> */}
// // 				<Styled.Total>
// //     {inputFields.map((item: any) => (
// //       <Styled.InputWrapper key={item.label}>
// //         <Styled.Label>{item.label}</Styled.Label>
// //         <Styled.InputDiv>
// //           <Input
// //             value={item.value}
// //             inputType={item.inputType}
// //             onChangeValue={item.onChange}
// //             isTextArea={item.isTextArea || false}
// //             isHiddenLabel
// //             isNoMargin
// //             isRemoveBorder
// //           />
// //         </Styled.InputDiv>
// //       </Styled.InputWrapper>
// //     ))}
// //   </Styled.Total>
// // 			</Styled.Summary>
// // 		</Styled.ReceiptItemTable>
// // 	);
// // };

// // export default PurchaseTable;

// //----------------------------------------------------------------------------------------------------------
// import React, { useState ,FC ,ChangeEvent} from "react";
// import { InvoiceTableStyles as Styled } from "./PurchaseTable.style";
// import { Input } from "components/Input";
// import { Icon } from "components/Icons";
// import { IRecieptInvoiceData } from "screens/RIDATA/types/RIdata.type";

// interface Item {
//   description: string;
//   vatCode: number;
//   units: number;
//   price: number;
//   net: number;
//   vat: number;
//   total: number;
// }

// interface IFieldsBox {
//   onItemsChange?:((fieldName: string, value: string) => void) | undefined;
//   inputFields: {
//     currencyValue: string;
//     type_date: string | Date;
//     formattedDate: string;
//     status: string;
//     vat: string;
//     total: string;
//     tax: string;
//     net: string;
//     supplier: string;
//     recieptId: string;} | null;
// }

// const PurchaseTable: FC <IFieldsBox> = (props) => {
//   const { inputFields  ,onItemsChange } = props;
//   const [items, setItems] = useState<Item[]>([
//     { description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 },
//   ]);
  

//   // const [receiptData, setReceiptData] = useState<IRecieptInvoiceData>()

//   // const [inputFieldsArray, setInputFieldsArray] = useState([
//   //   { label: "Net", value: inputFields?.net || "", inputType: "text" },
//   //   { label: "Tax", value: inputFields?.tax || "", inputType: "text" },
//   //   { label: "Total", value: inputFields?.total || "", inputType: "text" },
//   // ]);

//   const handleItemChange = (
//     index: number,
//     field: keyof Item,
//     value: string | number
//   ) => {
//     const updatedItems = [...items];
//     updatedItems[index] = {
//       ...updatedItems[index],
//       [field]: value,
      
//     };

//     if (field === "price" || field === "units" || field === "vatCode") {
//       const price = updatedItems[index].price;
//       const units = updatedItems[index].units;
//       const vatCode = updatedItems[index].vatCode;
//       const net = price * units;
//       const vat = net * (vatCode / 100);
//       const total = net + vat;
//       updatedItems[index] = { ...updatedItems[index], net, vat, total };
//     }
//     setItems(updatedItems);
//   };

//   const handleInputChange = (
//     event:ChangeEvent<HTMLInputElement>,
//     field: string
//   ) => {
//     // setReceiptData((prevState) => ({
//     //   ...prevState,
//     //   [field]: event.target.value,
// 	  // }));
// 	  console.log("field :---",field , "event :---" , event.target.value);
//   };

//   const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
//     const newValue = e.target.value;
    
//     // Create a new array with the updated value for the specific input
//     const updatedArray = inputFieldsArray.map((item, idx) => 
//       idx === index ? { ...item, value: newValue } : item
//     );
    
//     // setInputFieldsArray(updatedArray);  // Update state with new array
//     console.log("updatedArray::--",updatedArray); 

//   };
//   const addItem = () => {
//     setItems([
//       ...items,
//       { description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 },
//     ]);
//   };

//   const removeItem = (index: number) => {
//     const updatedItems = items.filter((_, i) => i !== index);
//     setItems(updatedItems);
//   };

//   const totalNet = items.reduce((acc, item) => acc + item.net, 0);
//   const totalVat = items.reduce((acc, item) => acc + item.vat, 0);
//   const grandTotal = items.reduce((acc, item) => acc + item.total, 0);

//   const inputFieldsArray = [
//     {
//       label: "Net",
//       value: inputFields?.net,
//       inputType: "text",
//       onChange: (event: ChangeEvent<HTMLInputElement >) =>
//         handleInputChange(event, "net"),
//     },
//     {
//       label: "Tax",
//       value: inputFields?.tax,
//       inputType: "text",
//       onChange: (event: ChangeEvent<HTMLInputElement>) =>
//         handleInputChange(event, "tax"),
//     },
//     {
//       label: "Total",
//       value: inputFields?.total,
//       inputType: "text",
//       onChange: (event:ChangeEvent<HTMLInputElement>) =>
//         handleInputChange(event, "total"),
//     },
//   ];

//   return (
//     <Styled.ReceiptItemTable>
//       <Styled.Table>
//         <thead>
//           <tr>
//             <Styled.TableHeader className="description">Description</Styled.TableHeader>
//             <Styled.TableHeader>VAT Code</Styled.TableHeader>
//             <Styled.TableHeader>Units</Styled.TableHeader>
//             <Styled.TableHeader>Price</Styled.TableHeader>
//             <Styled.TableHeader>Net</Styled.TableHeader>
//             <Styled.TableHeader>VAT</Styled.TableHeader>
//             <Styled.TableHeader>Total</Styled.TableHeader>
//             <Styled.TableHeader></Styled.TableHeader>
//           </tr>
//         </thead>
//         <tbody>
//           {items.map((item, index) => (
//             <tr key={index}>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="text"
//                   value={item.description}
//                   onChange={(e) =>
//                     handleItemChange(index, "description", e.target.value)
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.vatCode}
//                   onChange={(e) =>
//                     handleItemChange(index, "vatCode", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.units}
//                   onChange={(e) =>
//                     handleItemChange(index, "units", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.price}
//                   onChange={(e) =>
//                     handleItemChange(index, "price", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.net}
//                   onChange={(e) =>
//                     handleItemChange(index, "net", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.vat}
//                   onChange={(e) =>
//                     handleItemChange(index, "vat", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.total}
//                   onChange={(e) =>
//                     handleItemChange(index, "total", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.StyledLink onClick={() => removeItem(index)}>
//                   <Icon type="removeCross" />
//                 </Styled.StyledLink>
//               </Styled.TableData>
//             </tr>
//           ))}
//         </tbody>
//       </Styled.Table>
//       <Styled.Summary>
//         <Styled.Addnew onClick={addItem}>Add new line</Styled.Addnew>
//         <Styled.Total>
//           {inputFieldsArray.map((item ,index) => (
//             <Styled.InputWrapper key={item.label}>
//               <Styled.Label>{item.label}</Styled.Label>
//               <Styled.InputDiv>
//                 {/* <Input
//                   value={item.value}
//                   inputType={item.inputType}
//                   onChangeValue={onChange}
//                   isHiddenLabel
//                   isNoMargin
//                   isRemoveBorder
//                 /> */}
//                 <Input
//             value={item.value}
//             inputType={item.inputType}
//             onChangeValue={(event) => onChange(event, index)}  // Pass the index to onChange handler
//             isHiddenLabel
//             isNoMargin
//             isRemoveBorder
//           />
//               </Styled.InputDiv>
//             </Styled.InputWrapper>
//           ))}
//         </Styled.Total>
//       </Styled.Summary>
//     </Styled.ReceiptItemTable>
//   );
// };

// export default PurchaseTable;
// ---------------------------------------------------------------------------------------------
// import React, { useState, FC, ChangeEvent } from "react";
// import { InvoiceTableStyles as Styled } from "./PurchaseTable.style";
// import { Input } from "components/Input";
// import { Icon } from "components/Icons";

// interface Item {
//   description: string;
//   vatCode: number;
//   units: number;
//   price: number;
//   net: number;
//   vat: number;
//   total: number;
// }

// interface IFieldsBox {
//   inputFields: {
//     currencyValue: string;
//     type_date: string | Date;
//     formattedDate: string;
//     status: string;
//     vat: string;
//     total: string;
//     tax: string;
//     net: string;
//     supplier: string;
//     recieptId: string;
//   } | null;
// }

// const PurchaseTable: FC<IFieldsBox> = (props) => {
//   const { inputFields } = props;

//   // Step 1: Initialize state for all input fields
//   const [formState, setFormState] = useState({
//     currencyValue: inputFields?.currencyValue || '',
//     type_date: inputFields?.type_date || '',
//     formattedDate: inputFields?.formattedDate || '',
//     status: inputFields?.status || '',
//     vat: inputFields?.vat || '',
//     total: inputFields?.total || '',
//     tax: inputFields?.tax || '',
//     net: inputFields?.net || '',
//     supplier: inputFields?.supplier || '',
//     recieptId: inputFields?.recieptId || ''
//   });

//   // Step 2: Handle individual input changes
//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>, field: string) => {
//     const { value } = e.target;
    
//     // Update the specific field in the state
//     setFormState((prevState) => ({
//       ...prevState,
//       [field]: value
//     }));
//   };

//   const inputFieldsArray = [
//     {
//       label: "Net",
//       value: formState.net,
//       inputType: "text",
//       onChange: (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, "net"),
//     },
//     {
//       label: "Tax",
//       value: formState.tax,
//       inputType: "text",
//       onChange: (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, "tax"),
//     },
//     {
//       label: "Total",
//       value: formState.total,
//       inputType: "text",
//       onChange: (event: ChangeEvent<HTMLInputElement>) => handleInputChange(event, "total"),
//     },
//   ];

//   return (
//     <Styled.ReceiptItemTable>
//       <Styled.Table>
//         <thead>
//            <tr>
//              <Styled.TableHeader className="description">Description</Styled.TableHeader>
//              <Styled.TableHeader>VAT Code</Styled.TableHeader>
//              <Styled.TableHeader>Units</Styled.TableHeader>
//              <Styled.TableHeader>Price</Styled.TableHeader>
//              <Styled.TableHeader>Net</Styled.TableHeader>
//              <Styled.TableHeader>VAT</Styled.TableHeader>
//              <Styled.TableHeader>Total</Styled.TableHeader>
//              <Styled.TableHeader></Styled.TableHeader>
//            </tr>
//          </thead>
//          <tbody>
//            {items.map((item, index) => (
//             <tr key={index}>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="text"
//                   value={item.description}
//                   onChange={(e) =>
//                     handleItemChange(index, "description", e.target.value)
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.vatCode}
//                   onChange={(e) =>
//                     handleItemChange(index, "vatCode", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.units}
//                   onChange={(e) =>
//                     handleItemChange(index, "units", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.price}
//                   onChange={(e) =>
//                     handleItemChange(index, "price", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.net}
//                   onChange={(e) =>
//                     handleItemChange(index, "net", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.vat}
//                   onChange={(e) =>
//                     handleItemChange(index, "vat", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.Input
//                   type="number"
//                   value={item.total}
//                   onChange={(e) =>
//                     handleItemChange(index, "total", parseFloat(e.target.value))
//                   }
//                 />
//               </Styled.TableData>
//               <Styled.TableData>
//                 <Styled.StyledLink onClick={() => removeItem(index)}>
//                   <Icon type="removeCross" />
//                 </Styled.StyledLink>
//               </Styled.TableData>
//             </tr>
//           ))}
//         </tbody>
//       </Styled.Table>
//       <Styled.Summary>
//         <Styled.Total>
//           {inputFieldsArray.map((item, index) => (
//             <Styled.InputWrapper key={item.label}>
//               <Styled.Label>{item.label}</Styled.Label>
//               <Styled.InputDiv>
//                 <Input
//                   value={item.value}
//                   inputType={item.inputType}
//                   onChangeValue={item.onChange} // Correctly map onChange
//                   isHiddenLabel
//                   isNoMargin
//                   isRemoveBorder
//                 />
//               </Styled.InputDiv>
//             </Styled.InputWrapper>
//           ))}
//         </Styled.Total>
//       </Styled.Summary>
//     </Styled.ReceiptItemTable>
//   );
// };

// export default PurchaseTable;
// -----------------------------------------------------------------------------------------
import React, { useState, FC, ChangeEvent } from "react";
import { InvoiceTableStyles as Styled } from "./PurchaseTable.style";
import { Input } from "components/Input";
import { Icon } from "components/Icons";

interface Item {
  description: string;
  vatCode: number;
  units: number;
  price: number;
  net: number;
  vat: number;
  total: number;
}

interface IFieldsBox {
  onItemsChange?: ((fieldName: string, value: string) => void) | undefined;
  inputFields: {
    currencyValue: string;
    type_date: string | Date;
    formattedDate: string;
    status: string;
    vat: string;
    total: string;
    tax: string;
    net: string;
    supplier: string;
    recieptId: string;
  } | null;
}

const PurchaseTable: FC<IFieldsBox> = (props) => {
  const { inputFields, onItemsChange } = props;
  
  // Managing the items array for table rows
  const [items, setItems] = useState<Item[]>([
    { description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 },
  ]);

  // State for inputFieldsArray
  const [inputFieldsArray, setInputFieldsArray] = useState([
    { label: "Net", value: inputFields?.net || "", inputType: "text" },
    { label: "Tax", value: inputFields?.tax || "", inputType: "text" },
    { label: "Total", value: inputFields?.total || "", inputType: "text" },
  ]);

  // Handle changes in table items
  const handleItemChange = (
    index: number,
    field: keyof Item,
    value: string | number
  ) => {
    const updatedItems = [...items];
    updatedItems[index] = {
      ...updatedItems[index],
      [field]: value,
    };

    // Automatically update net, vat, total when price, units, or vatCode change
    if (field === "price" || field === "units" || field === "vatCode") {
      const price = updatedItems[index].price;
      const units = updatedItems[index].units;
      const vatCode = updatedItems[index].vatCode;
      const net = price * units;
      const vat = net * (vatCode / 100);
      const total = net + vat;
      updatedItems[index] = { ...updatedItems[index], net, vat, total };
    }

    setItems(updatedItems);
  };

  // Handle input field changes for net, tax, and total
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    const updatedArray = inputFieldsArray.map((item) => 
      item.label.toLowerCase() === field
        ? { ...item, value: event.target.value }
        : item
    );
    setInputFieldsArray(updatedArray);
    if (onItemsChange) {
      onItemsChange(field, event.target.value);
    }
  };

  // Add a new item (table row)
  const addItem = () => {
    setItems([...items, { description: "", vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 }]);
  };

  // Remove an item (table row)
  const removeItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  // Calculate totals for summary
  const totalNet = items.reduce((acc, item) => acc + item.net, 0);
  const totalVat = items.reduce((acc, item) => acc + item.vat, 0);
  const grandTotal = items.reduce((acc, item) => acc + item.total, 0);

  return (
    <Styled.ReceiptItemTable>
      <Styled.Table>
        <thead>
          <tr>
            <Styled.TableHeader className="description">Description</Styled.TableHeader>
            <Styled.TableHeader>VAT Code</Styled.TableHeader>
            <Styled.TableHeader>Units</Styled.TableHeader>
            <Styled.TableHeader>Price</Styled.TableHeader>
            <Styled.TableHeader>Net</Styled.TableHeader>
            <Styled.TableHeader>VAT</Styled.TableHeader>
            <Styled.TableHeader>Total</Styled.TableHeader>
            <Styled.TableHeader></Styled.TableHeader>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <Styled.TableData>
                <Styled.Input
                  type="text"
                  value={item.description}
                  onChange={(e) => handleItemChange(index, "description", e.target.value)}
                />
              </Styled.TableData>
              <Styled.TableData>
                <Styled.Input
                  type="number"
                  value={item.vatCode}
                  onChange={(e) => handleItemChange(index, "vatCode", parseFloat(e.target.value))}
                />
              </Styled.TableData>
              <Styled.TableData>
                <Styled.Input
                  type="number"
                  value={item.units}
                  onChange={(e) => handleItemChange(index, "units", parseFloat(e.target.value))}
                />
              </Styled.TableData>
              <Styled.TableData>
                <Styled.Input
                  type="number"
                  value={item.price}
                  onChange={(e) => handleItemChange(index, "price", parseFloat(e.target.value))}
                />
              </Styled.TableData>
              <Styled.TableData>
                <Styled.Input
                  type="number"
                  value={item.net}
                  onChange={(e) => handleItemChange(index, "net", parseFloat(e.target.value))}
                />
              </Styled.TableData>
              <Styled.TableData>
                <Styled.Input
                  type="number"
                  value={item.vat}
                  onChange={(e) => handleItemChange(index, "vat", parseFloat(e.target.value))}
                />
              </Styled.TableData>
              <Styled.TableData>
                <Styled.Input
                  type="number"
                  value={item.total}
                  onChange={(e) => handleItemChange(index, "total", parseFloat(e.target.value))}
                />
              </Styled.TableData>
              <Styled.TableData>
                <Styled.StyledLink onClick={() => removeItem(index)}>
                  <Icon type="removeCross" />
                </Styled.StyledLink>
              </Styled.TableData>
            </tr>
          ))}
        </tbody>
      </Styled.Table>

      <Styled.Summary>
        <Styled.Addnew onClick={addItem}>Add new line</Styled.Addnew>
        <Styled.Total>
          {inputFieldsArray.map((item) => (
            <Styled.InputWrapper key={item.label}>
              <Styled.Label>{item.label}</Styled.Label>
              <Styled.InputDiv>
                <Input
                  value={item.value}
                  inputType={item.inputType}
                  onChangeValue={(event) =>
                    handleInputChange(event as ChangeEvent<HTMLInputElement>, item.label.toLowerCase())
                  }
                  isHiddenLabel
                  isNoMargin
                  isRemoveBorder
                />
              </Styled.InputDiv>
            </Styled.InputWrapper>
          ))}
        </Styled.Total>
      </Styled.Summary>
    </Styled.ReceiptItemTable>
  );
};

export default PurchaseTable;
