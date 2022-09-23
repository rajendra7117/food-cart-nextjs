import { useRouter } from "next/router";
import FoodItems from "../../components/FoodItems/FoodItems";
import MainLayout from '../../components/Layout/MainLayout'
const Category = () => {

    const router = useRouter()

    const category = router.query.categoryId

  
    return <MainLayout><FoodItems category={category}/></MainLayout>
}

export default Category;