//Importando o useState que server para trabalhar com páginas estáticas se4m a necessidade de reload.
import React, {useState}  from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../PageDefault'
import FormField from '../../../FormField'

function CadastroCategoria(){ 

   const [categorias, setCategorias] = useState([]); 
   const valoresIniciais = {
       nome: '',
       descricao:'',
       cor:'',
    } 
   const [values, setvalues] = useState(valoresIniciais);
   
   function setValue(chave, valor){
        setvalues({
            ...values,
            [chave]: valor,
        })

   }

   function getHandle(event){                        
        setValue(event.target.getAttribute('name'), event.target.value)
    }


   return (
       <PageDefault>
            <h1>Cadastro Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(event){
                event.preventDefault();
                setCategorias([...categorias, values])
                setvalues(valoresIniciais)
               }}>

                {/*
                Esses com as div código foi substituído pelo FormField
                <div
                    <label>
                        Nome da Categoria.
                        <input type="text"  name="nome" value ={values.nome}
                        onChange={getHandle}
                        />
                    </label>
                </div> 
                <div>
                
                <label>
                Cor.
                <input type="color" name="cor" value ={values.cor}
                onChange={getHandle}
                        />
                    </label>
                </div>    */}
            
                
            <FormField value={values.nome} type="text" label="Nome da Categoria:" onChange={getHandle} name="nome" />
            <div>
                    
                <label>
                    Descrição:
                    <textarea type="text" name="descricao" value ={values.descricao}
                    onChange={getHandle}
                    />
                </label>
            </div> 
            <FormField value={values.cor} type="color" label="Cor: "  onChange={getHandle} name="cor" />
                 
                
                <button>
                    Cadastrar
                </button>
                    
            </form>
               <ul>
                 {categorias.map((categoria, indice)=>{
                    return(
                         <li key={`${categoria}${indice}`}> {categoria.nome} </li>
                     )
                 })}
    
               </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria; 