export default function Estilo() {
    return <>
        <label htmlFor="estilo">Estilo</label>
        <select name="estilo" id="estilo">
            <option value="">Selecione...</option>
            <option value="acao">Ação</option>
            <option value="comedia">Comédia</option>
            <option value="terror">Terror</option>
            <option value="drama">Drama</option>
        </select>
    </>
}