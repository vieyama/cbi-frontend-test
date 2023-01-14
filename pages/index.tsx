import QueryContextProvider from "contexts/contactQueryContext";
import ContactList from "views/ContactList";

import type { GetServerSidePropsContext, NextPage } from "next";

const Home: NextPage = () => {
  return (
    <QueryContextProvider>
      <ContactList />
    </QueryContextProvider>
  );
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const cookie = req?.cookies;

  if (!cookie?.auth) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Home;
