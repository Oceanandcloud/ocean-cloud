import { useEffect } from 'react';
import { HeroProductCard } from './HeroProductCard';
import "./testimonial.css"
import gsap from 'gsap';



const Testimonial = () => { 
  return (
    <>
    <div class="bestseller">
        <h1 className='heading'>Shop By Brand</h1>
        <div class="bestseller-products">
          <HeroProductCard 
          category="Dynamite"
          name="Dyanmite Paint"
          description="Beyond the regular pacing with the advanced."  
          image="./products/dynamite_satin.png"
            />
          <HeroProductCard  
          category="Dynamic"
          name="Dyanmic Paint"
          description="The balance between you and your expression."  
          image="./products/dynamic_satin.png"
            />
        </div>
      </div>
    </>
  );
}

export default Testimonial
