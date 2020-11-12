const HomeVideo = () =>
  <div className='banner'>
    <video loop autoPlay muted> 
      <source src='/static/VelaBikesSmartbikeArtesanal.mp4' type='video/mp4' />  
    </video>
    <style jsx>{`
      .banner {
        margin-top: -3.5em;
        display: grid;
        position: relative;
        z-index: 0;
      }
      .banner video {
        width: 100%;
        height: 100vh;
        object-fit: cover;
      }
    `}</style>
  </div>

export default HomeVideo