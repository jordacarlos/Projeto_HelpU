import Axios from 'axios'
import React from "react";
import { useEffect,useState } from 'react'
import "./Modal_addNew.css";

function Modal({closeModal,setcursoList}){

    const [Nomecurso, setNomecurso] = useState ([]);
    const [Descricaocurso, setDescricaocurso] = useState ([]);

    const submitNewCurso = () =>{
        Axios.post("http://localhost:3001/api/insert", {
            Nomecurso:Nomecurso,
            Descricaocurso: Descricaocurso
        }).then(()=>{
            alert("Curso adicionado com sucesso");
            window.location.reload()
        });
    };

    return ( 
    <div className="ModalMain">
        <div className="ModalContainer">
            <div className="title">
                <h1>Preencha as informações</h1>
            </div>
            <div className="body">
                <div>
                    <p>Name</p>
                    <input type="text" placeholder="Nome" className="name" onChange={(e) => {(setNomecurso(e.target.value))}}/>
                </div>
                <div className="second-input">
                    <p>Descrição</p>
                    <textarea type="text" maxLength="100" placeholder= "Descrição do curso" className="desc" onChange={(e) =>{(setDescricaocurso(e.target.value))}}/>
                </div>
            </div>

            <div className="footer">
                <button href="/Cursos" onClick={() => closeModal(false)} className="cancelBtn"> Cancelar</button>
                <button href="/Cursos" onClick={submitNewCurso} >Confirmar</button>
            </div>
        </div>
    </div>
    )
}
export default Modal;