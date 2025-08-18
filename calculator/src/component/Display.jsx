import {useSelector} from 'react-redux'

 export default function Display() {
 const { currentValue, history, angleUnit, memory } = useSelector(s =>
 s.calculator)
 return (

//  <div className="history">{history}</div>
 <div className="value">{currentValue}</div>
//  <div className="unit">Angle: {angleUnit} {memory !== 0 ? `• M=${memory}
//  ` : ''}</div>


 )
 }
