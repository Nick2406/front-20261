import './Card.css';

function Card(props) {
  return (
    <article className="card-box">
      <h2>{props.titulo}</h2>
      <div className="card-conteudo">
        {props.children}
      </div>
    </article>
  );
}

export default Card;