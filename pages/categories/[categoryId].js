import { useRouter } from "next/router";
import FoodItems from "../../components/FoodItems/FoodItems";
import MainLayout from "../../components/Layout/MainLayout";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const DynamicFoodItemsPage = dynamic(
  () => import("../../components/FoodItems/FoodItems"),
  {
    suspense: true,
  }
);
const Category = () => {
  const router = useRouter();

  let category = "";
  category = router.query.categoryId;

  return (
    <MainLayout>
      <Suspense>
        {category !== "" && category !== undefined && (
          <DynamicFoodItemsPage category={category} />
        )}
      </Suspense>
    </MainLayout>
  );
};

export default Category;
