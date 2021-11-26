import PrimeiroComponente from './components/basicos/PrimeiroComp'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/aleatorio/Aleatorio'
import Card from './components/layout/Card'
import './App.css'

// usando arrow function av
export default _ => 
        <div className="App">
                <PrimeiroComponente 
                    msg='Fundamentos React'
                />
            <div className="CardConf">

                <Card 
                    // passando a cor dinamicamente por props
                    titulo="Desafio #01" color="#080">
                    <Aleatorio min='1' max='10'/>
                </Card>
                <Card 
                    titulo="Desafio #02" color="#48D1CC">
                    <ComParametro s
                    aluno = 'Ricardo'
                    nota = '8.7'/>
                </Card>
                <Card 
                    titulo="Desafio #03" color="#EE82EE">
                    <ComParametro s
                    aluno = 'Ricardo'
                    nota = '8.7'/>
                </Card>
                <Card 
                    titulo="Desafio #04" color="#FFD700">
                    <ComParametro s
                    aluno = 'Ricardo'
                    nota = '8.7'/>
                </Card>
            </div>
        </div>
    