import { Carousel, Image } from 'react-bootstrap';
import meditacao from '../telas/img/meditacao.jpg';
import mar from '../telas/img/mar.jpg';
import note from '../telas/img/note.jpeg';
import { useState } from 'react';

function Carouseltela() {

  const [images, setImages] = useState([meditacao, mar, note]);

  return (
    <Carousel fade className='banner' >
      {images.map((image) => (
        <Carousel.Item>
          <Image src={image} fluid={true} className="d-block w-100" />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default Carouseltela;