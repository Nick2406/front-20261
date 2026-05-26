import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './RequerimentoForm.css';

function RequerimentoForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const navigate = useNavigate();

  const dataAtual = new Date().toISOString().split('T')[0];

  const onSubmit = (data) => {
    console.log('Dados do requerimento salvos com sucesso:', data); 
    reset();
    navigate('/requerimentos');
  };

  return (
    <div className="form-container">
      <h2>Novo Requerimento</h2>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label>Tipo de Requerimento</label>
          <select 
            {...register("tipo", { required: "Tipo é obrigatório" })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="Dispensa">Dispensa de Disciplina</option>
            <option value="Revisão de Nota">Revisão de Nota</option>
            <option value="Trancamento">Trancamento de Matrícula</option>
            <option value="Mudança de Turno">Mudança de Turno</option>
            <option value="Renovação de Matrícula">Renovação de Matrícula</option>
          </select>
          {errors.tipo && <span className="error-message">{errors.tipo.message}</span>}
        </div>

        <div className="input-group">
          <label>Descrição</label>
          <textarea 
            rows="5"
            {...register("descricao", { 
              required: "Descrição é obrigatória",
              minLength: { 
                value: 10, 
                message: "A descrição deve ter no mínimo 10 caracteres" 
              }
            })}
          ></textarea>
          {errors.descricao && <span className="error-message">{errors.descricao.message}</span>}
        </div>

        <div className="input-group">
          <label>Data do Requerimento</label>
          <input 
            type="date" 
            readOnly
            value={dataAtual}
            {...register("data")}
          />
        </div>

        <div className="form-actions">
          <button type="button" onClick={() => navigate('/requerimentos')}>
            Cancelar
          </button>
          <button type="submit">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}

export default RequerimentoForm;