import LayoutComponent from "components/Layouts";
import VirtualListComponent from "components/VirtualList";

import { ContactListWrapper, Container } from "./styled";

const ContactList = () => {
  return (
    <LayoutComponent>
      <Container>
        <ContactListWrapper>
          <VirtualListComponent />
        </ContactListWrapper>
      </Container>
    </LayoutComponent>
  );
};

export default ContactList;
