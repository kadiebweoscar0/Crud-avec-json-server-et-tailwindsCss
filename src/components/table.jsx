import { useContext } from "react"
import { ContextApp } from "../App"

export default function Tableau() {
  const {colomuns, records} = useContext(ContextApp)
  // console.log(colomuns);

  return (
    <div className="">
        <table className="table-auto">
            <thead>
                <tr>
                  {
                    colomuns.map((colmun, index) =>(
                      <th key={index}>{colmun}</th>
                    ))
                  }
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  {
                    records.map((row, index) =>(
                      <tr key={index}>
                        <td >{row.id}</td>
                        <td >{row.name}</td>
                        <td >{row.username}</td>
                        <td >{row.email}</td>
                        <td>update / delete</td>
                      </tr>
                      
                    ))
                  }
                </tr>
            </tbody>
        </table>
        
    </div>
  )
}
