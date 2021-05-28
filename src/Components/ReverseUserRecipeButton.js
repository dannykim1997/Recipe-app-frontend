export default function SelectionForm(props) {
    
    const sort = (e) => {
        e.preventDefault()
        props.reverseOrder(e.target.value)
    }
    
    return (
        <div>
            <h2>default oldest to newest</h2>
            <button onClick={sort}>reverse order</button>
        </div>
    )
}