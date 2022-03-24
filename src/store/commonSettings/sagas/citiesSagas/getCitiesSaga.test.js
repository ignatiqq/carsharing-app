import { getCities } from "./getCitiesSaga";
import { TableCity } from "api/services";
import { runSaga } from "redux-saga";
import { SET_ALL_CITIES, SET_ALL_CITIES_LOADING, SET_ALL_CITIES_LOADING_ERROR } from "../../constants";
 
describe('citiesSagas', () => {

    afterAll(() => {
        jest.clearAllMocks()
    })

    it("get citites success", async() => {

        const data = {data: {data: [{count: 11, city: "Ульяновск"}]}}
        TableCity.getCities = jest.fn().mockResolvedValue(data);

        const dispatched = [];

        await runSaga(
          {
            dispatch: (action) => dispatched.push(action),
          },
          getCities,
        ).toPromise()

        expect(TableCity.getCities).toHaveBeenCalled();
        expect(dispatched).toEqual([
            {
                type: SET_ALL_CITIES_LOADING,
                payload: true
            },
            {
                type: SET_ALL_CITIES,
                payload: [{count: 11, city: "Ульяновск"}]
            },
            {
                type: SET_ALL_CITIES_LOADING,
                payload: false
            }
        ])
    })

    it("get cities failed", async () => {

        const data = "Request failed with status code 404"
        TableCity.getCities = jest.fn().mockRejectedValue({
            message: data
        });

        const dispatches = [];

        await runSaga(
            {   
                dispatch: (action) => dispatches.push(action)
            },
            getCities
        ).toPromise()

        expect(TableCity.getCities).toHaveBeenCalled();
        expect(dispatches).toEqual(
            [
                {
                    type: SET_ALL_CITIES_LOADING,
                    payload: true
                },
                {
                    type: SET_ALL_CITIES_LOADING_ERROR,
                    payload: data
                },
                {
                    type: SET_ALL_CITIES_LOADING,
                    payload: false
                },
            ]
        )

    })
})