import './Header/style.css';
import moda1 from '../img/moda1.jpg'


function ContHome(alan){
    return(
        <span>
            <h1>Não Sabe o que escolher? Temos dicas!</h1>
                <img src={moda1} alt="Pessoa escolhendo roupa"/>
           <h3>Para looks esportivos:</h3>
           <p><strong>1 -Conforto em primeiro lugar:</strong> Opte por roupas esportivas feitas de tecidos leves e respiráveis, que permitam movimento e ofereçam conforto durante a prática esportiva.<br></br> <br></br>

           <strong>2 -Camadas funcionais:</strong> Em climas mais frios, camadas são essenciais. Use uma camiseta técnica como base, adicione uma jaqueta leve e, se necessário, um casaco corta-vento para proteção adicional.<br></br> <br></br>

           <strong>3 -Escolha a roupa certa para a atividade:</strong> Considere as necessidades específicas da atividade esportiva. Por exemplo, para corrida, opte por shorts ou leggings com tecido que absorva o suor e um tênis apropriado para corrida.<br></br> <br></br>

           <strong>4 -Estampas e cores vibrantes: </strong>Seja ousado e adicione um toque de estilo ao seu look esportivo com estampas divertidas e cores vibrantes. Isso trará energia ao visual e mostrará seu estilo pessoal.<br></br> <br></br>

           <strong>5 -Acessórios práticos: </strong>Não se esqueça de acessórios úteis, como uma garrafa de água reutilizável, uma touca para proteger do sol ou fones de ouvido sem fio para ouvir música enquanto se exercita.</p>

           <h3>Para looks casuais:</h3>
           <p>
          <strong>1- Jeans e camiseta básica:</strong> Um clássico atemporal, jeans bem ajustados combinados com uma camiseta básica são uma opção casual infalível. Você pode adicionar personalidade ao look com acessórios, como um lenço colorido ou um relógio estiloso.<br></br> <br></br>

          <strong> 2- Sapatilhas ou tênis:</strong> Opte por sapatilhas ou tênis confortáveis para criar um visual casual descontraído. Existem várias opções de modelos e cores que podem adicionar um toque de estilo ao seu look.<br></br> <br></br>

          <strong> 3- Camadas e sobreposições:</strong> Para os dias mais frescos, adicione uma jaqueta jeans, um cardigã ou um moletom leve sobre a camiseta básica. Isso cria uma aparência mais interessante e permite ajustar o visual conforme a temperatura muda.<br></br> <br></br>

          <strong>  4- Estampas e cores divertidas:</strong> Experimente com estampas e cores vivas em suas peças casuais. Camisetas estampadas, calças coloridas ou um suéter com um padrão interessante podem adicionar um toque de originalidade ao seu look.<br></br> <br></br>

          <strong> 5- Acessórios complementares:</strong> Adicione acessórios simples, mas elegantes, como um chapéu, óculos de sol, uma bolsa transversal ou uma pulseira. Esses detalhes podem elevar seu look casual e mostrar seu estilo pessoal.

           </p>
           <h2>Continue no site, em breve haverão mais dicas!</h2>

            
            
            {alan.looks}
        </span>

    )
}
export default ContHome;

