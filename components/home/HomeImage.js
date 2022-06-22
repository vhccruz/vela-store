const HomeImage = () =>
  <div>
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FScreen%20Shot%202022-06-22%20at%2009.15.06.png?alt=media&token=35763e05-5cc3-47f8-ac71-5b0d75d8f9d6' className='desktop' alt='Vela 2 - Vela Bikes' />
    <img src='https://firebasestorage.googleapis.com/v0/b/vela-c1f68.appspot.com/o/public%2Fvelastore%2FScreen%20Shot%202022-06-22%20at%2009.15.06.png?alt=media&token=35763e05-5cc3-47f8-ac71-5b0d75d8f9d6' className='mobile' alt='Smartbike - Vela Bikes' />
    <style jsx>{`
      img {
        min-height: 50vh;
        object-fit: cover;
        object-position: right;
        width: 100%;
      }
      .desktop {
        display: none;
      }
      @media only screen and (min-width: 768px) {
        img {
          margin-top: 0em;
          object-fit: cover;
          width: 98.9vw;
          height: calc(100vh - 3.5em);
          object-position: bottom-right;
        }
        .mobile {
          display: none;
        }
        .desktop {
          display: initial;
        }
      }
    }
  `}</style>
</div>

export default HomeImage
