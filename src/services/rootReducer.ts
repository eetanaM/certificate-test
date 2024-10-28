import { combineSlices } from "@reduxjs/toolkit";

import { certificatesSlice } from "./certificates/slice";
import { orderSlice } from "./order/slice";

export const rootReducer = combineSlices(certificatesSlice, orderSlice);
