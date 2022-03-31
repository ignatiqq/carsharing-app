import { api } from "api/config";

class CitiesService {

    getCities() {
        return api.get("/db/city")
    }

}

export default new CitiesService();