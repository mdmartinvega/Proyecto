import '../styles/Input.css';

export default function Input() {
    return (
        <div className="input-search">
            <form><input 
            // value={input} 
            // onChange={e => setInput(e.target.value)} 
            placeholder="¿Dónde quieres ir?"/>
            </form>
        </div>
    )
}
