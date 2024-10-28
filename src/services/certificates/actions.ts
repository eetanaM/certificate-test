import { createAsyncThunk } from "@reduxjs/toolkit"

import { loadCertificates } from "../../utils/api/api"

export const getCertificates = createAsyncThunk("certificates/getCertificates", loadCertificates)
