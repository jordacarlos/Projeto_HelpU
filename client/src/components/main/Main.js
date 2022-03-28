import "../main/Main.css"
import hello from "../../assets/freepik.gif"
import Chart from "../charts/Chart"
import { useEffect,useState } from 'react'
import Axios from 'axios'

const Main = () => {

    const [cursoNumber, setcursoNumber] = useState ([]);

    useEffect(()=>{
        Axios.get('http://localhost:3001/api/get').then((response) =>{
            setcursoNumber(response.data);
        });
    },[]);

    return(
        <main>
            <div className="main_div">
                <div className="main_title">
                    <img src ={hello} alt = "hello"/>
                    <div className="main_greeting">
                        <h1>Hello Codersbite</h1>
                        <p>Welcome to your admin Dashboard</p>
                    </div>
                </div>

                <div className="main_cards">
                    <div className="card">
                        <i className="fa fa-user fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Monitores</p>
                            <span className="font-bold text-title">88</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-calendar fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Monitorias marcadas</p>
                            <span className="font-bold text-title">110</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-video-camera fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Aulas</p>
                            <span className="font-bold text-title">{cursoNumber.length}</span>
                        </div>
                    </div>
                    <div className="card">
                        <i className="fa fa-thumbs-up fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">like</p>
                            <span className="font-bold text-title">999</span>
                        </div>
                    </div>
                </div>

                <div className="charts">
                    <div className="charts_left">
                        <div className="charts_right_title">
                            <div>
                                <h1> Daily Reports</h1>
                                <p>Cupertino, USA</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts_right">
                        <div className="charts_right_title">
                            <div>
                                <h1>Status Rápido</h1>
                            </div>
                            <i className="fa fa-bookmark"></i>
                        </div>
                        <div className="charts_right_cards">
                            <div className="card1">
                                <h1>Income</h1>
                                <p>58,888</p>
                            </div>

                            <div className="card2">
                                <h1>Aulas Hoje</h1>
                                <p>{cursoNumber.length}</p>
                            </div>

                            <div className="card3">
                                <h1>Users</h1>
                                <p>58</p>
                            </div>

                            <div className="card4">
                                <h1>Orders</h1>
                                <p>88</p>
                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>
        </main>


    )
}

export default Main;