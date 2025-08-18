import { useDispatch } from 'react-redux'
import Button from './Button'
import {clearAll, deleteLast, inputDigit,inputDecimal
,applyFunction,evaluate,chooseOperator} from "../Redux/CalculatorSlice"
import Display from './Display'

export default function Keypad(){
const dispatch= useDispatch()
return(
<div style={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center",padding:"20px 0px 80px 0px",backgroundColor:"black",color:"white"}}  className="keypad">
        
    <div style={{fontSize:"30px",margin:"30px"}}>
        <Display/>
    </div>

    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
    
        <Button style={{width:"53px",height:"31px",color:"white",backgroundColor:"red"}} label="AC" onClick={() => dispatch(clearAll())} className="function" />
        <Button style={{width:"53px",height:"31px",color:"white",backgroundColor:"red"}} label="DEL" onClick={() => dispatch(deleteLast())} className="function" />
        <Button style={{width:"35px",height:"31px",backgroundColor:"#79f3ca"}} label="√" onClick={() => dispatch(applyFunction('sqrt'))} className="function" />
        <Button style={{margin:"0px -6px 0px 0px",width:"32px",height:"31px",backgroundColor:"#79f3ca"}} label="/" onClick={() => dispatch(chooseOperator('/'))} className="operator" />
    
    </div>

        
    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
    
        <Button style={{width:"50px",height:"31px"}} label="1" onClick={() => dispatch(inputDigit(1))} />
        <Button style={{width:"50px",height:"31px"}} label="2" onClick={() => dispatch(inputDigit(2))} />
        <Button style={{width:"50px",height:"31px"}} label="3" onClick={() => dispatch(inputDigit(3))} />
        <Button style={{width:"30px",height:"31px",backgroundColor:"#79f3ca"}} label="+" onClick={() => dispatch(chooseOperator('+'))} className="operator" />
        
    </div>


    <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
    
        <Button style={{width:"50px",height:"31px"}} label="4" onClick={() => dispatch(inputDigit(4))} />
        <Button style={{width:"50px",height:"31px"}} label="5" onClick={() => dispatch(inputDigit(5))} />
        <Button style={{width:"50px",height:"31px"}} label="6" onClick={() => dispatch(inputDigit(6))} />
        <Button style={{width:"30px",height:"31px",backgroundColor:"#79f3ca"}} label="-" onClick={() => dispatch(chooseOperator('-'))} className="operator" />
                
    </div>


    <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
    
        <Button style={{width:"50px",height:"31px"}} label="7" onClick={() => dispatch(inputDigit(7))} />
        <Button style={{width:"50px",height:"31px"}} label="8" onClick={() => dispatch(inputDigit(8))} />
        <Button style={{width:"50px",height:"31px"}} label="9" onClick={() => dispatch(inputDigit(9))} />
        <Button style={{width:"30px",height:"31px",backgroundColor:"#79f3ca"}} label="*" onClick={() => dispatch(chooseOperator('x'))} className="operator" />
                
    </div>
        

    <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
        
        <Button style={{width:"50px",height:"31px"}} label="0" onClick={() => dispatch(inputDigit(0))} className="zero" />
        <Button style={{width:"50px",height:"31px",fontWeight:"900"}} label="." onClick={() => dispatch(inputDecimal())} />
        <Button style={{padding:"10px",backgroundColor:"orange",width:"80px",height:"32px"}} label="=" onClick={() => dispatch(evaluate())} className="equals"/>
                
    </div>

</div>

)
}