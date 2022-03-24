import { api } from "api/config";

class TableCity {

    getCities() {
        return api.get("/db/city")
    }

}

export default new TableCity();