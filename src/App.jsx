import PrimeiroComponente from './components/basicos/PrimeiroComp'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/aleatorio/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import MembrosFamilia from './components/basicos/MembrosFamilia'
import Repeticao1 from './components/repeticao/Repeticao1'
import RepeticaoProd from './components/repeticao/RepeticaoProd'
import './App.css'

// usando arrow function av
export default _ => 
        <div className="App">
                <PrimeiroComponente 
                    msg='Fundamentos React'
                />
            <div className="CardConf">
                <Card 
                    titulo="Desafio #5" color="#035">
                    <RepeticaoProd />
                </Card>
                <Card 
                    titulo="Desafio #5" color="#065">
                    <Repeticao1 />
                </Card>
                <Card 
                    titulo="Desafio filhos"
                    color="#778899">
                    <Familia sobrenome="Delmontes">
                        <MembrosFamilia
                            nome="Keylane"
                        >
                        </MembrosFamilia>
                        <MembrosFamilia
                            nome="Adriana"
                        >
                        </MembrosFamilia>
                        <MembrosFamilia
                            nome="Ricardo"
                        >
                        </MembrosFamilia>
                    </Familia>
                </Card>

                <Card 
                    // passando a cor dinamicamente por props
                    titulo="Desafio #01" color="#020">
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
    