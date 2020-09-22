import PaddedView from 'components/PaddedView'
import Link from 'next/link'
import { offWhite, offBlack, white } from '../../style/colors'
import Button from '../Button'

const Highlight = () => {
  return (
    <PaddedView style={{ background: '#272727' }}>
      <div className='Highlight'>
        <div className='content'>
          <p>A smartbike que oferece o melhor desempenho para a cidade, em dois modelos diferentes.</p>
        </div>
        <div className='models'>
            <div className='qr'>
              <a href="/vela2">
                <img alt='Vela 2 Quadro reto' src='/static/vela2/models/VEL-V2-550-29-VERDE-PRETO.png' />
                <p>
                  <h2>Quadro reto</h2>
                  <span>3 tamanhos</span>
                  <span>1,58m até 2m</span>
                </p>
              </a>
            </div>
            <div className='qb'>
              <a href="/vela2">
                <img alt='Vela 2 Quadro baixo' src='/static/vela2/models/VEL-V2-490-29-VERDE-PRETO.png' />
                <p>
                  <h2>Quadro baixo</h2>
                  <span>2 tamanhos</span>
                  <span>1,58m até 1,90m</span>
                </p>
              </a>
            </div>
        </div>
        <div className='color'>
          <p>A Vela possui uma paleta única, com cinco cores exclusivas para você escolher.</p>
        </div>
      </div>
      <div className='price'>
        <div className='left'>
          <h3>Compra</h3>
          <h2>R$ 6.890</h2>
          <p>Até 12x sem juros</p>
        </div>
        <div className='actions'>
          <Link href='/vela'>
            <Button primary>Saiba mais</Button>
          </Link>
        </div>
        <div className='right'>
          <h3>Aluguel</h3>
          <h2>R$ 489/mês</h2>
          <p>Disponível em novembro</p>
        </div>
      </div>
      <style jsx>{`
          .Highlight {
            padding: 2em 1em;
          }
          .content{
            background-color: ${offBlack};
            padding: 1rem 1rem;
            margin-bottom: 1rem;
          }
          .content p, .color p {
            color: ${offWhite};
            text-align: center;
          }
          .models {
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          .models img {
            background-color: ${offWhite};
            padding: 2rem 0;
          }
          .models p {
            padding: 2rem;
            background-color: ${white};
            text-align: center;
            box-shadow: 0px .75rem 1rem -1.25rem rgba(20,20,20, 0.8);
          }
          .models span {
            display: block;
          }
          .color {
            background-color: ${offBlack};
            padding: 1rem;
          }
          .price {
            display: flex;
            flex-direction: column;
            color: ${offWhite};
            padding: 0em 2em 1em 2em;
            justify-content: center;
          }
          .price h2{
            color: ${offWhite};
          }
          .price h3{
            color: ${offWhite};
          }
          .actions {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 10em;
          }
          .actions :global(button) {
            margin: 0;
          }
          .left, .right {
            padding: 2em;
            text-align: center;
          }
          @media only screen and (min-width: 768px) {
            .Highlight {
              padding: 4em 2em;
            }
            .content {
              width: 30em;
              height: 15em;
              display: flex;
              justify-content: flex-start;
              z-index: 0;
              padding: 2rem;
              margin: 0 auto;
            }
            .content p {
              max-width: 14em;
              text-align: left;
            }
            .models {
              flex-direction: row;
              justify-content: center;
              position: relative;
              z-index: 1;
            }
            img {
              max-width: 30em;
            }
            .qr {
              margin: -5em 2em 0 2em;
            }
            .qb {
              margin: -10em 2em 0 2em;
            }
            .color {
              width: 30em;
              height: 15em;
              display: flex;
              justify-content: flex-end;
              z-index: 0;
              padding: 2rem;
              margin: -10em auto 0 auto;
            }
            .color p {
              max-width: 12em;
              text-align: right;
              align-self: flex-end;
            }
            .price {
              flex-direction: row;
              padding: 0 2em 2em 2em;  
            }
            }
          }
        `}</style>
    </PaddedView>
  )
}

export default Highlight
