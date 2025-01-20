import PageWrapper from "@cards/components/common/PageWrapper";
import TeenPattiPage from "@cards/components/teen-patti";
import { NextPage } from "next";

const TeenPatti: NextPage = () => {
  return (
    <PageWrapper>
      <TeenPattiPage />
    </PageWrapper>
  );
};

export default TeenPatti;
