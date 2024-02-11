import { useContext } from "react"
import { ContextApp } from "../App"

export default function Tableau() {
  const {colomuns, records} = useContext(ContextApp)
  // console.log(colomuns);

  return (
    <>
        <table className="table-auto">
            <thead className="border">
                <tr className="flex space-x-28 p-3">
                  {
                    colomuns.map((colmun, index) =>(
                      <th className="" key={index}>{colmun}</th>
                    ))
                  }
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  {
                    records.map((row, index) =>(
                      <tr className="border  m-2" key={index}>
                        <td className="p-2">{row.id}</td>
                        <td className="p-2">{row.name}</td>
                        <td className="p-2">{row.email}</td>
                        <td className="p-2">update / delete</td>
                      </tr>
                      
                    ))
                  }
                </tr>
            </tbody>
        </table>
        
    </>
  )
}
