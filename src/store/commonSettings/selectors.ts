import type { RootState } from "store/store"

export const getSidebarOpen = ({commonSettings}: RootState) => commonSettings.sidebarOpen;