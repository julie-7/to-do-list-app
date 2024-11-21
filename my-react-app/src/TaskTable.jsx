import { useEffect, useState } from "react"

export const TaskTable = () => {
    const [data, setData] = useState([])

    return (
        <>
            <h1>table</h1>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Task</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(

                            <tr>
                                <td>{item.ID}</td>
                                <td>{item.Task}</td>
                                <td>{item.Completed ? "completed": "uncompleted"}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>


        </>


    )
}