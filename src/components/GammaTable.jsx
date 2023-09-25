import React from 'react'
import useGamma from '../custom/useGamma'

const GammaTable = () => {
  const data = ["Mean", "Median", "Mode"]

  const rawArr = useGamma() //using custom hook
  return (
    <section className='gamma'>
      <h2>  Gamma Table </h2>
      <table id='gamma-table'>
        <thead>
          <tr>
            <th>Measure</th>
            {
              rawArr.map((e) => (
                <th key={`gamma-${e.alcohol}`}>
                  Class {e.alcohol}
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={`gamma ${item}`}>
              <th>Gamma {item}</th>
              {
                rawArr.map((e) => (
                  <td  key={`gamma-${e[`${item.toLowerCase()}`]}`}>
                    {/* mode may have many values so giving it in dropdown */}
                     {
                      item !== 'Mode'? e[`${item.toLowerCase()}`] : 
                      <select>
                        {
                          e[`${item.toLowerCase()}`].map(e=>(
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

export default GammaTable
