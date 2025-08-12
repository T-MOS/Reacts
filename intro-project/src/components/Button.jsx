export default function Button( { children, onSelect } ) {
    return (
        <ul>
            <button className="button" onClick={onSelect}> { children }</button>
        </ul>
    );
}