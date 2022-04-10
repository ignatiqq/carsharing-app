import { api } from "api/config";

class CategoryService {

    getCarCategories() {
        return api.get("/db/category");
    }

}

export default  new CategoryService();