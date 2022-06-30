import React from "react"
import { Header } from "../components/Header"
import Navbar  from '../components/Layout/Navbar/Index'


function Home() {
    return (
       <div>
            <Header title="Olá mundo =)" subtitle="Estas são algumas anotações minhas." bgColor='#363636'></Header>
            <Navbar/>
        </div> 
    )
}

export default Home