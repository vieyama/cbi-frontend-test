import React, { useState } from "react";
import Head from "next/head";

import HeaderComponent from "./HeaderComponent";
import ModalForm from "components/widgets/ModalForm";

import { LayoutContainer } from "./styled";

interface ILayoutComponent {
  children: React.ReactNode;
}

const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  const [displayAddModal, setDisplayAddModal] = useState(false);

  return (
    <LayoutContainer>
      <Head>
        <title>My Contacts</title>
        <meta name="description" content="My Contact Apps" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent
        setDisplayAddModal={setDisplayAddModal}
        displayAddModal={displayAddModal}
      />
      {children}
      <ModalForm
        setDisplayAddModal={setDisplayAddModal}
        displayAddModal={displayAddModal}
      />
    </LayoutContainer>
  );
};

export default LayoutComponent;
