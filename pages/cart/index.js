import MainLayout from "../../components/Layout/MainLayout";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicCartPage = dynamic(() => import("../../components/Cart/Cart"), {
  suspense: true,
});
const CartPage = () => {
  return (
    <MainLayout>
      <Suspense fallback={<h1>...loading</h1>}>
        <DynamicCartPage />
      </Suspense>
    </MainLayout>
  );
};

export default CartPage;
