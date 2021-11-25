import PrimeiroComponente from './components/basicos/PrimeiroComp'
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/aleatorio/Aleatorio'
import Card from './components/layout/Card'

// usando arrow function av
export default _ => 
        <div>
        <PrimeiroComponente 
            msg='Fundamentos React'
        />

        <Card 
            titulo="Desafio #01">
            <Aleatorio min='1' max='10'/>
        </Card>
        <Card 
            titulo="Desafio #02">
            <ComParametro s
            aluno = 'Ricardo'
            nota = '8.7'/>
        </Card>
        
        </div>
    