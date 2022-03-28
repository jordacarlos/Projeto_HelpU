import { useEffect,useState } from 'react'
import img from '../../assets/freepik_cursos.gif'
import "../Course/course.css"
import Axios from 'axios'
import "./Modal_addNew.css";
import Modal_addNew from "./Modal_addNew.js"

const Course = ({}) => {
    const [cursoList, setcursoList] = useState ([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response) =>{
            setcursoList(response.data);
        });
    },[]);

    const deleteCurso = (cursoId) =>{
        Axios.delete(`http://localhost:3001/api/delete/${cursoId}`)
    }

    const [openModal, setopenModal] = useState(false)

    return(
        <main>
            <div className="main_title">
                <img src ={img} alt = "img"/>
                <div className="main_greeting">
                    <h1>Olá</h1>
                    <p>Veja aqui os cursos cadastrados</p>
                </div>
            </div>
            <hr />
            <div className="AddNew">
                <button class="action_add_new" onClick={() => setopenModal(true)}>
                    <a href ="#"><i class="fa fa-plus"  aria-hidden="true"></i> Novo</a>
                </button>
            </div>
            {openModal && <Modal_addNew closeModal ={setopenModal} />}
            
                <div class="table_responsive">
                <table>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Criado em</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {cursoList.map((val,i) =>{
                        {i++}
                        return <tr>
                            <td ><label id="info">{i}</label></td>
                            <td><img src="https://freetoolssite.com/wp-content/uploads/2022/02/846799.png.webp" alt="" /></td>
                            <td><label>{val.Nome}</label></td>
                            <td><label>{val.Descricao}</label></td>
                            <td><label>{val.Nome}</label></td>
                            <td>
                                <span class="action_btn">
                                <a href ="/Cursos" onClick={() => alert("Ainda n pronto")}><i class="fa fa-pencil edit"  aria-hidden="true"></i></a>
                                <a href ="/Cursos" onClick={() => {deleteCurso(val.id)}}><i class="fa fa-trash trash" aria-hidden="true"></i></a>
                                </span>
                            </td>
                        </tr>
                    })}
                     
                  </tbody>
                 
                </table>
            </div>
        </main>
    )}
export default Course;