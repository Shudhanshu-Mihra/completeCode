import { FC, useEffect, memo ,useState } from "react";
import { useDispatch, useSelector  } from 'react-redux';
import { StatusBar } from "../StatusBar";
import { ButtonsBox } from "../ButtonsBox";
import { FieldsBox } from "./FieldsBox";
// import { usePhotoDetailsContentState } from "./PhotoDetailsContent.state";
import { PhotoDetailsContentStyles as Styled } from "./PhotoDetailsContent.style";
import { PhotoDetailsContentItem } from "./PhotoDetailsContentItem";
import { ButtonsBoxNew } from "../ButtonBoxNew";
import { CheckboxItem } from "components/Checkbox";

import PurchaseTable from "components/Purchases/PurchasesTable";
// import { PhotoDetailsTabs } from "../PhotoDetailsContent";
import { IState } from 'services/redux/reducer';
import { usePhotoDetailsContentState } from "./PhotoDetailsContent.state";

interface ChildProps {
	changePaid: boolean;
	fnChangePaid: () => void;
	actionValue: boolean;
	fnGetPayStatus: (what: boolean | undefined) => void;
	// onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	// onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	changePublish: boolean;
	fnChangePublish: () => void;
	newPublish: boolean;
	getLivePublish:(what: boolean | undefined) => void;
}

interface Item {
	vatCode: number;
	units: number;
	price: number;
	net: number;
	vat: number;
	total: number;
  }
export const PhotoDetailsContent: FC<ChildProps> = memo((props) => {
	const { changePaid, fnChangePaid, actionValue, fnGetPayStatus } = props;
	// const { changePublish, fnChangePublish, newPublish, getLivePublish } = props;
	// console.log("!!!!!!!!!!!!!!!!! - RDContent child-form", actionValue);
	// const {changePaid} = props;
	const {
		state,
	// 	selectedReciept
	// 	inputFields,
	// 	// receiptItem,
	// 	statusValue,
	// 	paymentStatus,
		// 	// receiptid,
		currenciesData,
		type_date,
		isOpen,
		isLoading,
		datePickerRef,
		saveReceiptHandler,
		onChangeRadioButtonHandler,
		onCancelButtonClickHandler,
		onClickOutsideDatePickerHandler,
		onDatePickerClickHandler,
	// 	// onGetAllMasterItemsHandler,
		onForbiddenCharacterClick,
		handleFieldChange,
		onChangeDate,
		// handleInputChange
	// 	paymentStatusFromState,
	// 	publishStatusFromState,
	// 	onChangePaymentStatus,
	// 	paymentStatusHandler,
	// 	publishStatusHandler,
		// 	onChangePublishStatus,
		// onFieldChange
	} = usePhotoDetailsContentState();
	
	// const [inputFieldsState, setInputFieldsState] = useState({
	// 	supplier: '',
	// 	type_date: '',
	// 	currencyValue: '',
	// 	// Add other fields as necessary
	// });

	const [purchaseItems, setPurchaseItems] = useState<Item[]>([
		{vatCode: 0, units: 0, price: 0, net: 0, vat: 0, total: 0 }
	  ]);

	const {
		    user:{currencies},
		    RIdata: { selectedReceipt }
			
		  } = useSelector((state: IState) => state);

		//   const handlePurchaseItemsChange = (updatedItems: Item[]) => {
		// 	setPurchaseItems(updatedItems);
	// };
	
	
	return (
		<Styled.ReceiptDetailContent>
			<Styled.StatusBarWrapper>
				<PhotoDetailsContentItem label="Status">
					<StatusBar status={selectedReceipt?.status } />
				</PhotoDetailsContentItem>
				 <PhotoDetailsContentItem label="Recept ID">
					<StatusBar rid={selectedReceipt?.custom_id} />
				</PhotoDetailsContentItem> 
			</Styled.StatusBarWrapper>

			<Styled.FormFieldWrapper>
				<FieldsBox
					inputFields={state}
					options={ currenciesData}
					currencies={currencies}
					onDatePickerClickHandler={onDatePickerClickHandler}
					onClickOutsideDatePickerHandler={onClickOutsideDatePickerHandler}
					isOpen={isOpen}
					onDateChange={ onChangeDate}
					formattedDate={state.formattedDate}
					datePickerRef={datePickerRef}
					selectedDate={type_date ? new Date(type_date) : null}
					onForbiddenCharacterClick={onForbiddenCharacterClick}
					onFieldChange={handleFieldChange}
				/>
			</Styled.FormFieldWrapper>
			<Styled.ReceiptItemTable>
				<h4>Details</h4>
			{/* {selectedReciept.map((items) => <Styled.items>{items}</Styled.items>): 'no data'} */}
				{/* <PurchaseTable inputFields={selectedReciept}/> */}
				{/* <PurchaseTable inputFields={state} items={purchaseItems} onItemsChange={handlePurchaseItemsChange}/> */}
				<PurchaseTable inputFields={state}  onItemsChange={handleFieldChange} />
			</Styled.ReceiptItemTable>
			{/* <Styled.ReceiptStatusContainer>
				<Styled.CheckboxContainer>
					<CheckboxItem
						name={"Payment status"}
						isChecked={paymentStatus}
						// isChecked={false}
						labelText={"Mark as Paid"}
						onChange={onChangePaymentStatus}
					/>
					<CheckboxItem
						name={"Publish status"}
						isChecked={isPublishStatus}
						// isChecked={true}
						labelText={"Mark as Published"}
						onChange={onChangePublishStatus}
					/>
				</Styled.CheckboxContainer>
				<Styled.Description>
					<Styled.DescriptionInput type="text" placeholder="Description" />
				</Styled.Description>
			</Styled.ReceiptStatusContainer> */}
			<Styled.Footer>
				<ButtonsBoxNew onRejectButtonClickHandler={onChangeRadioButtonHandler} isLoading={isLoading} />
				<ButtonsBox saveReceiptHandler={saveReceiptHandler} onCancelButtonClickHandler={onCancelButtonClickHandler} isLoading={isLoading} onApproveButtonClickHandler={onChangeRadioButtonHandler} />
			</Styled.Footer>
		</Styled.ReceiptDetailContent>
	);
});
