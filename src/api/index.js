// src/api.js
import axios from 'axios';
const token =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImZmYWU3Y2M2MWNiN2YxZTc5MzI2Mjc5NWM5NzFlNWIwMWRmYzU3YjM3MjBlNTUwNzE4ZTBhYjliMDBiNTUwYWI4OGEwOGNlMzJhN2NkNTk3In0.eyJhdWQiOiIxIiwianRpIjoiZmZhZTdjYzYxY2I3ZjFlNzkzMjYyNzk1Yzk3MWU1YjAxZGZjNTdiMzcyMGU1NTA3MThlMGFiOWIwMGI1NTBhYjg4YTA4Y2UzMmE3Y2Q1OTciLCJpYXQiOjE2NTk0Mjk5MTcsIm5iZiI6MTY1OTQyOTkxNywiZXhwIjoxNjkwOTY1OTE3LCJzdWIiOiIxMjc1MyIsInNjb3BlcyI6W119.vNn2eo2pCVQDbAp1UIbrDJ2dA176LoGur8sCQOdEbFlo8un78-IqL5rcVsyZGadpSHKmf8YnreTTvsuagsolTWw8Kw7FU5ZwVdEItB3tRqIOTVuKUsGqRYos66Ucm7Ifo_PP17tsX6BVNf8SSjE_XWS9U_UZ_glMaYWTF3qfGmJ7nfaRpoiWJEPDwXrSUF_FDZOHtxhDDVxdRyVV7GZcBKdUkexGFbbXL63Vw9E4NmfNXCyAXzoTHmAo-qvEJiAdIilkTgmHjSLqPiez9Ugo_9XLkFi8aArX02uIZU-Sp_4GUjeA4IIZ_QIVDkCcVK3S2llk14nd6CgtRQ-2XXnpf_mWycI7wzGuZw4GAgO-6z_PadBRRsOLVWH5aWX4D9Jo2a7Hj3Y0BdpC3jRQHwuQuTo41R_nqEsmXsS6-mQCt7LHq4pnvSSUMUV13X0wLhP1koKaFDe2fJZOq1Kuje1vZftBM9dZAAx1t5uFa9BlWObh6oKmfy_riA71TTMVzz1UWwJi88WRJTCdTi_lmidC2u7yaUos7BtHqn3Plgwbp4r-mJ19guBiwxi8cDfqKJ4d2jIZVPtIBRc9ASEaPEV8Q74XmnoEy-UHM5zCnJqP5-GoouZutEhDQVDP9hyjdSSSiI0yCb33igfefXHtTi48E6yCHgDcK-3AovBXFjeIcII';

export const createOrder = async apiData => {
  try {
    const response = await axios.post(
      'https://api.mysupership.vn/v1/partner/orders/add',
      apiData,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const responseData = response.data;
    return responseData.status;
  } catch (error) {
    console.log(error.response.data);
    return 'error';
  }
};

export const fetchWarehouses = async () => {
  try {
    const response = await axios.get(
      'https://api.mysupership.vn/v1/partner/warehouses',
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.data.status === 'Success') {
      return response.data.results;
    }
  } catch (error) {
    return null;
  }
};

export const getOrderPrice = async (
  pickupProvince,
  pickupDistrict,
  Province,
  district,
  weight,
  value,
) => {
  try {
    const response = await axios.get(
      `https://api.mysupership.vn/v1/partner/orders/price?sender_province=${pickupProvince}&sender_district=${pickupDistrict}&receiver_province=${Province}&receiver_district=${district}&weight=${weight}&value=${value}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    return null;
  }
};
