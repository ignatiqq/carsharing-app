import { api } from "api/config";

class CarsService {

    getCars() {
        return api.get("/db/car")
    }

}

export default new CarsService();