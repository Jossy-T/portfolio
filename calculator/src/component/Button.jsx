export default function Button({label,onClick,style}){
    return(
        <button style={style} onClick={onClick}>{label}</button>
    )
}