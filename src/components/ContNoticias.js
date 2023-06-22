import moda2 from '../img/moda2.jpg';

function ContNoticias(props){
    return(
        <span>
            <h2>Confira as notícias do mundo da moda!</h2>
            <img src={moda2} alt="Mulher posando"/>
            <p>
          <strong> 1- Moda sustentável e ética:</strong> O movimento em direção à moda sustentável e ética continua a ganhar destaque, com marcas adotando práticas mais responsáveis, como materiais reciclados, produção ética e transparência em toda a cadeia de suprimentos.<br></br> <br></br>

          <strong> 2- Inovações tecnológicas na moda:</strong> A tecnologia está transformando a indústria da moda, com avanços como roupas inteligentes, impressão 3D e realidade aumentada, proporcionando experiências inovadoras e novas possibilidades criativas.<br></br> <br></br>

          <strong> 3- Diversidade e inclusão na moda:</strong> A valorização da diversidade e inclusão está ganhando espaço, com marcas e designers buscando representar uma variedade maior de tamanhos, etnias, idades e identidades de gênero em suas campanhas e desfiles.<br></br> <br></br>

          <strong> 4- Colaborações entre marcas e designers:</strong> Parcerias entre marcas de moda e designers renomados, celebridades e artistas continuam sendo uma tendência popular, criando coleções exclusivas que combinam diferentes estilos e atraindo a atenção dos consumidores.<br></br> <br></br>

          <strong> 5- Eventos e premiações da moda:</strong> Grandes eventos e premiações da moda, como o Met Gala e os principais prêmios de moda, são uma vitrine para as marcas e designers exibirem suas criações, além de capturarem a atenção da mídia e dos entusiastas da moda.
            </p>



                    {props.noticias}
        </span>
    )
}
export default ContNoticias;