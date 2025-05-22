import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SlideContent from './slideContent';

function Carrousel({ data }) {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper" id='projets'>
        {data.map((slide, index) => (
        <SwiperSlide key={index} className='img'>
            <SlideContent slide={slide} />
        </SwiperSlide>
        ))}
        </Swiper>
    )
}

export default Carrousel;