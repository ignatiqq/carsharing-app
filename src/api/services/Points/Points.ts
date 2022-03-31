import { api } from "api/config";

class PointsService {

    getPoint() {
        return api.get("db/point")
    }

}

export default new PointsService();