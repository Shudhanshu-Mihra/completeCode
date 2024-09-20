import React from "react";
import { ReactComponent as Processing } from '../../../assets/icons/Processing-1.svg';
import { ReactComponent as Approved } from '../../../assets/icons/approved-dash.svg';
import { ReactComponent as Rejected } from '../../../assets/icons/rejected.svg';
import { ReactComponent as Archived } from '../../../assets/icons/archieved-dash.svg';
import { ReactComponent as Reciept } from '../../../assets/icons/reciept-dash.svg';
import { ReactComponent as SalseInvoice } from '../../../assets/icons/salse-invoice-dash.svg';
import { DashboardStyles as Styled } from '../Dashboard.style';

const updates = [
  { name: "KFC", icon: <SalseInvoice />, text: "Receipt", statusIcon: <Processing /> },
  { name: "Starbucks", icon: <Reciept />, text: "Purchase Invoice", statusIcon: <Approved /> },
  { name: "Burger King", icon: <SalseInvoice />, text: "Sales Invoice", statusIcon: <Rejected /> },
  { name: "Domino's", icon: <SalseInvoice />, text: "Receipt", statusIcon: <Rejected /> },
  { name: "Company 5", icon: <Reciept />, text: "Receipt", statusIcon: <Archived /> },
];

export const UpdatesTimeLine: React.FC = () => {
  const specificDate = "21-7-2024";
  const price = "GBP 20.00";

  return (
    <Styled.Container>
      <Styled.Heading>Updates / Timeline</Styled.Heading>
      {updates.map((update, index) => (
        <Styled.ListItem key={index}>
          <Styled.CompanyName>{update.name}</Styled.CompanyName>
          <Styled.MiddleIconsUpdates>
            <div>{update.icon}</div>
            <Styled.TextContent>{update.text}</Styled.TextContent>
          </Styled.MiddleIconsUpdates>
          <Styled.IconContainer>{update.statusIcon}</Styled.IconContainer>
          <Styled.Date>{specificDate}</Styled.Date>
          <Styled.Price>{price}</Styled.Price>
        </Styled.ListItem>
      ))}
    </Styled.Container>
  );
};


