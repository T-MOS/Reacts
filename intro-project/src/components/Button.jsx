export default function Button({ id, children, onClick }) {
    return (
        <button 
            className="button" 
            onClick={(e) => {
                const label = e.currentTarget.textContent.trim();
                onClick(label)
            }}
        >
            { children }
        </button>
    );
}