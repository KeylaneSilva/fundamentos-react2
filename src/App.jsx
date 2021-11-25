import PrimeiroComponente from './components/basicos/PrimeiroComp'
import ComParametro from './components/basicos/ComParametro'

import Aleatorio from './components/aleatorio/Aleatorio'

// usando arrow function av
export default _ => 
        <div id="app">
        {/* <PrimeiroComponente />
        <ComParametro s
            aluno = 'Ricardo'
            nota = '8.7'/> */}
            <Aleatorio min='1' max='10'/>
        </div>
    