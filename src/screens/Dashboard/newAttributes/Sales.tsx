import React from "react";
import { ReactComponent as Processing } from '../../../assets/icons/Processing-1.svg';
import { ReactComponent as Approved } from '../../../assets/icons/approved-dash.svg';
import { ReactComponent as Rejected } from '../../../assets/icons/rejected.svg';
import { ReactComponent as Archived } from '../../../assets/icons/archieved-dash.svg';
import { ReactComponent as Review } from '../../../assets/icons/review-dash.svg';
import { DashboardStyles as Styled } from '../Dashboard.style';

export const Sales: React.FC = () => {
  return (
    <Styled.PurchasesContainer>
      <Styled.PurchasesTitle>Sales</Styled.PurchasesTitle>
      <Styled.PurchasesMetrics>
        <Styled.Metric>
          <Styled.MetricIcon><Processing /></Styled.MetricIcon>
          <Styled.MetricValue>0</Styled.MetricValue>
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricIcon><Approved /></Styled.MetricIcon>
          <Styled.MetricValue>0</Styled.MetricValue>
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricIcon><Rejected /></Styled.MetricIcon>
          <Styled.MetricValue>0</Styled.MetricValue>
          
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricIcon><Archived /></Styled.MetricIcon>
          <Styled.MetricValue>6</Styled.MetricValue>
          
        </Styled.Metric>
        <Styled.Metric>
          <Styled.MetricIcon><Review /></Styled.MetricIcon>
          <Styled.MetricValue>1</Styled.MetricValue>
        </Styled.Metric>
      </Styled.PurchasesMetrics>
    </Styled.PurchasesContainer>
  );
};


