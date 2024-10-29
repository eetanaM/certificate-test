import { createAsyncThunk } from "@reduxjs/toolkit"

import { postOrder } from "../../utils/api/api"

export const executePurchase = createAsyncThunk("order/postOrder", postOrder)
