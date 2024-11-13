import React from 'react';
import Card from '../Card/Card';
import Jeans from '../../assets/img/Frock.jpg'
import Shirts from '../../assets/img/Saree.jpg'
import Tshirt from '../../assets/img/Shalvar.jpg'
import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants';

const items = [{
  'title':'Frock',
  imagePath:Jeans
},{
  'title':'Saree',
  imagePath:Shirts
},{
  'title':'Shalvar',
  imagePath:Tshirt
},{
  'title':'Trousers',
  imagePath:require('../../assets/img/Trousers.jpg')
},
{
  'title':'Shirt',
  imagePath:require('../../assets/img/GreenShirt.jpg')
},
{
  'title':'Wedding Dress',
  imagePath:require('../../assets/img/Wedding Dress.jpg')
}];
const SellProducts = () => {
  return (
    <>
<h1 class=' text-3xl text-black-400'><b>|</b>Best Selling Products</h1>
    <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={'react-slider-custom-item'}
        className='px-8'
      >
        
        {items && items?.map((item,index)=> <Card key={item?.title +index} title={item.title} imagePath={item.imagePath}/>)}

      </Carousel>
    </>
  );
};

export default SellProducts;
