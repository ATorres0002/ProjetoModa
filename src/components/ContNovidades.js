import moda3 from '../img/moda3.jpg';

function ContNovidades(props){
    return(
        <span>
            <h1>Tendências de Cores para o Verão na Moda</h1>
            <br></br>
            <img src={moda3} alt="Mulher posando"/>
            <h2>A moda é um universo em constante mudança, e as cores desempenham um papel crucial na definição das tendências a cada estação. 
                Quando se trata do verão, as cores desempenham um papel ainda mais importante, já que buscamos tons vibrantes e refrescantes para combinar com a energia dessa estação ensolarada. 
                Neste artigo, exploraremos algumas das cores que estão em destaque como tendências no mundo da moda para o verão.</h2>
            <h2>1 - Amarelo Solar:</h2>
            <p>O amarelo solar é uma cor luminosa e otimista que captura perfeitamente o espírito do verão. Essa tonalidade vibrante adiciona um toque de alegria a qualquer look, seja em vestidos, saias, camisas ou acessórios. 
                O amarelo solar combina bem com tons neutros, como branco e bege, criando um contraste elegante.</p>
            <h2>2 - Laranja Energético:</h2>
            <p>O laranja energético é uma cor ousada e cheia de vida, ideal para o verão. Essa tonalidade vibrante traz calor e entusiasmo para qualquer produção de moda. 
                Você pode incorporar o laranja energético em peças-chave, como macacões, blusas ou bolsas, e combiná-lo com tons mais suaves, como o branco ou até mesmo com outros tons de laranja para criar um visual impactante.</p>
            <h2>3 - Rosa Vibrante:</h2>
            <p>O rosa vibrante é uma cor que está em alta para o verão, transmitindo feminilidade e diversão. 
                Essa tonalidade ousada pode ser encontrada em vestidos, blusas, shorts e até mesmo em calçados. 
                Você pode combiná-la com tons neutros para um visual equilibrado ou arriscar em combinações com outras cores vibrantes para um estilo mais ousado.</p>
            <h2>4 - Azul Celeste:</h2>    
            <p>O azul celeste é uma cor suave e refrescante que evoca a serenidade do céu em um dia de verão. 
                Essa tonalidade é perfeita para roupas casuais e elegantes, proporcionando um ar de sofisticação. O azul celeste pode ser usado em vestidos leves, camisas soltas e saias fluidas, transmitindo uma sensação de frescor e tranquilidade.</p>
            <h2>5 - Verde Menta:</h2>
            <p>O verde menta é uma cor fresca e moderna que tem ganhado destaque nas passarelas e nas ruas. Essa tonalidade suave e refrescante é perfeita para o verão, transmitindo uma sensação de calma e leveza. Você pode adicionar toques de verde menta em peças como blusas, calças, saias e acessórios, combinando-o com tons neutros para um visual equilibrado.</p>
            <p>É importante lembrar que as tendências de cores na moda são apenas sugestões, e o mais importante é usar o que você se sente confortável e confiante. Explore essas cores tendência do verão e experimente combinações que expressem sua personalidade e estilo único. O verão é a época perfeita para ousar e se divertir com as cores, então aproveite as tendências e crie looks incríveis que reflitam a energia ensolarada dessa estação.</p>

            {props.novas}


        </span>
    )
    
}
export default ContNovidades;