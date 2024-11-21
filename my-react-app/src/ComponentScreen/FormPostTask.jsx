import { useEffect, useState } from "react"
export const TableTask = () => {
    let url = import.meta.env.VITE_TOKEN
    let endpoint = "/To-Do-List-App"
    let token = import.meta.env.VITE_TOKEN
    let newurl = url + endpoint


    const [data, Setdata] = useState([])

    const getData = async () => {

        const response = await fetch(newurlURL, {
            method: "POST",
            headers: {
                "Authorization": token,
                "apikey": token
            }

        })

        if (response.ok) {
            let info = await response.json()
            Setdata(info)
        }

    }

    useEffect(() =>
        getData()
        )}
    


