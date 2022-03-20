import { SET_SIDEBAR_OPEN } from "./constants"

export const setSidebarOpen = (data: boolean) => ({
    type: SET_SIDEBAR_OPEN,
    payload: data
})