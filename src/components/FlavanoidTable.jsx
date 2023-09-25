import React from 'react'
import useFlavanoids from '../custom/useFlavanoids'

const FlavanoidTable = () => {
  const data = ["Mean", "Median", "Mode"]

  const rawArr = useFlavanoids() //using custom hook
  return (
    <section className='favanoids'>
      <h2>Favanoids Data</h2>
      <table id='flavanoid-table'>
        <thead>
          <tr>
            <th>Measure</th>
            {
              rawArr.map((e) => (
                <th key={`flavanoid ${e.alcohol}`}>
                  Class {e.alcohol}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={`flavanoid ${item}`}>
              <th>Flavanoid {item}</th>
              {
                rawArr.map((e) => (
                  <td key={`flav ${e[`${item.toLowerCase()}`]}`}>
                    {/* mode may have many values so giving it in dropdown */}
                    {
                      item !== 'Mode' ? e[`${item.toLowerCase()}`] :
                        <select>
                          {
                            e[`${item.toLowerCase()}`].map(e => (
                              <option key={e}>{e}</option>
                            ))
                          }
                        </select>
                    }
                  </td>
                ))
              }
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default FlavanoidTable
