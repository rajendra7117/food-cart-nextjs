import dynamic from "next/dynamic";
import { Suspense } from "react";
import MainLayout from "../../components/Layout/MainLayout";

const DynamicResultsPage = dynamic(() =>
  import("../../components/Search/Results", {
    suspense: true,
  })
);
const SearchResults = () => {
  return (
    <MainLayout>
      <Suspense fallback={<h1>...loading</h1>}>
        <DynamicResultsPage />
      </Suspense>
    </MainLayout>
  );
};

export default SearchResults;
