import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { headers } from "../utils/constant";


export const getData =createAsyncThunk("covid/getData", async ({code, query}) => {

    //api a gönderilekecek parametreler
    const params = {iso: code, q:query}

    // isocode a göre ülkenin covid bilgilerini alan istek
    const req1 =  axios.get("https://covid-19-statistics.p.rapidapi.com/reports", {params, headers})

    // isocodea göre ülkeinin detay verilerini alan istek
    const req2 =  axios.get(code ? `https://restcountries.com/v3.1/alpha/${code}` : `https://restcountries.com/v3.1/name/${query}`)

    // her iki api isteğini aynı anda gönder
    const responses = await Promise.all([req1, req2])

    // NESNE DAĞITMA, alttan alıp üste geçirdik sonra kaldırmak istediğimizi delete ile kaldırdık
    // region verilerini bir üst nesne ile aynı düzeye çıkarttık
    const covid = {
        ...responses[0].data.data[0],
        ...responses[0].data.data[0].region,
    }
    delete covid.region
    delete covid.cities

    //aksiyonun payloadı return edildi
    return {covid, country: responses[1].data[0]};
})

export default getData;