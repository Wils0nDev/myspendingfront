import { useReducer } from "react";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import { authReducer } from "../reducers/authReducer";

import Input from "../components/input";
import Label from "../styled-components/Label";
import TitleForm from "../styled-components/TitleForm";
import "../css/loading.css";

const initialState = [
  {
    id : new Date().getTime(),
    desc: 'Aprender React',
    done : false
  }
]


const Loading = () => {

  const [auth,getData] = useAuth({ name: "", lastname: "" })
  const { name, lastname} = auth
  const [ auths ] = useReducer(authReducer,initialState)
  
  const sendAuth = (e) => {
    e.preventDefault();
    
  }


  return (
    <div className="form-loading">
      <form onSubmit={sendAuth}>
        <div className="header-form">
          <TitleForm>Iniciar Sesión</TitleForm>
        </div>
        <div className="content-form">
          <div className="form-field">
            <Label>Usuario</Label>
            <Input addData={getData}  valorInput={name} nameInput="name" />
          </div>
          <div className="form-field">
            <Label>Contraseña</Label>
            <Input addData={getData} valorInput={lastname} nameInput="lastname" />
          </div>
        </div>
        <div className="actions-form">
          <button type="submit" className="primary-form" disabled={false}>
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Loading;
