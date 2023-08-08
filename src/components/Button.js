const Button = ({otherClassName,text,clickHandler,buttontype})=>{
    const type = buttontype || "button"
    const className = `fw-bold btn text-white btn-primary ${otherClassName ? otherClassName : ""}`
    return <button type={type} onClick={clickHandler} className={className}>{text}</button>
}

export default Button
