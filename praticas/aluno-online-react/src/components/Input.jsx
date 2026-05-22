import './Input.css';

function Input(props) {
  return (
    <div className="input-group">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type || 'text'}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        className={props.erro ? 'input-error' : ''}
      />
      {/* Se houver mensagem de erro, exibe aqui embaixo */}
      {props.erro && <span className="error-message">{props.erro}</span>}
    </div>
  );
}

export default Input;