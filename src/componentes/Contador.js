
import '../hojas-de-estilo/Contador.css'
function contador({numClics}){
    return (

      <div
      className='contador'>

      {numClics}x

      </div>

    );
}

export default contador;