// import React from "react";
// import { RIdetailsStyle as Styled } from "./RIdetails.style";

// export const RIdetails: React.FC = () => {
//     return (
//         <Styled.MainSelector>
//             {type !== "invoice" ? (): null }
//       </Styled.MainSelector>
//     );
// };

import React, { useEffect, useState } from "react";
import { RIdetailsStyle as Styled } from "./RIdetails.style";
import { useRIDetailsState } from "./RIdetails.state";
import { ReceiptDetailsHeader } from "components/ReceiptDetailsHeader";
import { CheckboxItem } from "components/Checkbox";
// import { PhotoDetailsContent } from "components/PhotoDetails/PhotoDetailsContent/PhotoDetailsContent";
import { PhotoPreview } from "components/PhotoPreview";
import { PhotoDetailsContent } from "components/PhotoDetailsContent/PhotoDetailsContent";


export const RIdetails: React.FC = () => {
	const { selectedReceiptIndex,
		selectedReceipt,
		selectedReceiptType,
		receiptInvoiceData,
		selectedReceiptPhoto,
		imageUrl,
		isImageLoading,
		onClickGetNextReceiptHandler,
		onClickGetPrevReceiptHandler,
		onGoBackHandler,
		onFetchReceiptImageHandler
	} = useRIDetailsState();

	const [payStatus, setPayStatus] = useState(false);
	const [actionValue, setActionValue] = useState(false);

	const [changePaid, setChangePaid] = useState(false);
	const fnChangePaid = (): void => {
		setChangePaid(false);
	};

	const fnSetvalue = (event: React.ChangeEvent<HTMLInputElement>): void => {
		// console.log(event.target.checked);
		setActionValue(event.target.checked);
		setChangePaid(true);
	};

	const [livePublish, setLivePublish] = useState(false);
	const getLivePublish = (what: boolean | undefined) => {
		if (what === undefined) {
			setLivePublish(false);
		} else {
			setLivePublish(what);
		}
	};

	const [changePublish, setchangePublish] = useState(false);
	const fnChangePublish = (): void => {
		setchangePublish(false);
	};

	const [newPublish, setNewPublish] = useState(false);
	const fnSetPublish = (event: React.ChangeEvent<HTMLInputElement>): void => {
		// console.log(event.target.checked);
		setNewPublish(event.target.checked);
		setchangePublish(true);
	};

	const getPayStatus = (what: boolean | undefined) => {
		if (what === undefined) {
			setPayStatus(false);
		} else {
			setPayStatus(what);
		}
	};

	useEffect(() => {
		onFetchReceiptImageHandler();
	}, [selectedReceipt]);
	console.log("isImageLoading:- ",isImageLoading);
	return (
		<Styled.MainSelector>
			{selectedReceiptType !== "invoice" ? (
				<>
					<ReceiptDetailsHeader
						onClickGetNextReceiptHandler={onClickGetNextReceiptHandler}
						onClickGetPrevReceiptHandler={onClickGetPrevReceiptHandler}
						totalReceiptsCount={receiptInvoiceData?.length}
						currentReceiptPosition={Number(selectedReceiptIndex) + 1}
						onGoBackHandler={onGoBackHandler}
						customId={selectedReceipt?.custom_id} />
					<Styled.BodyWrapper>
						<PhotoPreview imageSrc={imageUrl} isImageLoading={isImageLoading} isPDF={false} />
						{/* <PhotoPreview imageSrc={imageUrl} isImageLoading={false} isPDF={false} /> */}
						<Styled.ReceiptDetailWrapper>

							{/* <PhotoDetailsContent changePaid={changePaid} fnChangePaid={fnChangePaid} actionValue={actionValue} fnGetPayStatus={getPayStatus} changePublish={changePublish} fnChangePublish={fnChangePublish} newPublish={newPublish} getLivePublish={getLivePublish} /> */}
							<PhotoDetailsContent changePaid={changePaid} fnChangePaid={fnChangePaid} actionValue={actionValue} fnGetPayStatus={getPayStatus} changePublish={changePublish} fnChangePublish={fnChangePublish} newPublish={newPublish} getLivePublish={getLivePublish} />
							{/* <Styled.ReceiptStatusContainer>
								<Styled.CheckboxContainer>
									<CheckboxItem
										name={"Payment status"}
										isChecked={payStatus || false}
										labelText={"Mark as Paid"}
										onChange={fnSetvalue}
									// onChange={onChangePaymentStatus}
									/>
									<CheckboxItem
										name={"Publish status"}
										isChecked={livePublish || false}
										labelText={"Mark as Published"}
										onChange={fnSetPublish}
									/>
								</Styled.CheckboxContainer>
								<Styled.Description>
									<Styled.DescriptionInput type="text" placeholder="Description" />
								</Styled.Description>
							</Styled.ReceiptStatusContainer> */}
						</Styled.ReceiptDetailWrapper>
						
					</Styled.BodyWrapper>
				</>

			) : (
				<h1>Welcome to Invoice</h1>
			)}
		</Styled.MainSelector>
	);
};
