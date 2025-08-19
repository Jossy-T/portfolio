export default function Button({label,onClick,style}){
    return(
        <button className="calculatorbutton" style={style} onClick={onClick}>{label}</button>
    )
}