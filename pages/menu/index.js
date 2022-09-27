import MainLayout from "../../components/Layout/MainLayout";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicFoodMenuPage = dynamic(
  () => import("../../components/Menu/FoodMenu"),
  {
    suspense: true,
  }
);

const Menu = () => {
  return (
    <MainLayout>
      <Suspense fallback={<h1>...loading</h1>}>
        <DynamicFoodMenuPage />
      </Suspense>
    </MainLayout>
  );
};

export default Menu;
