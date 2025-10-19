export default function Label(props) {
    return <label htmlFor={props.para} className="form-label">{props.children}</label>
}