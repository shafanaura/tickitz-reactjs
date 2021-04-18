import React, { Component } from "react";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import PayInfo from "../../components/payment/PayInfo";
import PersonalInfo from "../../components/payment/PersonalInfo";
import ButtonPanel from "../../components/splitpanel/ButtonPanel";
import PanelLeft from "../../components/splitpanel/PanelLeft";
import PanelRight from "../../components/splitpanel/PanelRight";
import FooterComponent from "../../components/footer/FooterComponent";
import PayMethod from "../../components/payment/PayMethod";

export default class PaymentPage extends Component {
  render() {
    return (
      <>
        <NavbarComponent />
        <PanelLeft title="Payment Info" body={<PayInfo />}>
          <PanelRight title="Personal Info" body={<PersonalInfo />} />
        </PanelLeft>
        <PanelLeft
          title="Choose a Payment Method"
          body={<PayMethod />}
          panel={
            <ButtonPanel
              goButtonLeft="/order-page"
              buttonLeft="Previous step"
              goButtonRight="/ticket-result"
              buttonRight="Pay your order"
            />
          }
        ></PanelLeft>
        <FooterComponent />
      </>
    );
  }
}
