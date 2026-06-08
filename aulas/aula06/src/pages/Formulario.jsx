import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import { atualizar, criar, obter } from "../services/produtoService";

function Formulario() {
  const [erro, setErro] = useState();
  const { id } = useParams
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const salvar = async (dados) => {
    try {
      if (id) {
        await atualizar ({id, ...dados});
      } else {
        await criar (dados)
      }
      navigate("/produtos");
    } catch (error) {
        setErro(error.message)
    }
  };

  useEffect (() =>{
    if (!id) {
      return;
    }
    const disparar = async () => {
      const resposta = await ResizeObserverEntry({id});
      reset(resposta);
    }
  
  })

  return (
    <>
      <h1>Cadastro de Produtos</h1>
      <p>{erro}</p>
      <form onSubmit={handleSubmit(salvar)}>
        <input
          type="text"
          placeholder="Nome do Produto"
          {...register("nome")}
        />
        <input 
          type="number"
          placeholder="Preço 0.00" 
          {...register("preco")} 
        />
        <input 
          type="text"
          placeholder="Unidade" 
          {...register("unidade")} 
        />
        <Link to="/produtos">Cancelar</Link>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default Formulario;
