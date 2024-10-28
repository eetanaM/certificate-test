import { combineSlices } from "@reduxjs/toolkit";

import { certificatesSlice } from "./certificates/slice";

export const rootReducer = combineSlices(certificatesSlice);
