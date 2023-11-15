
import "./ProductListSection.css";



const ProductListSection = () => {
  return (
    <>
    <div class="info">
        <div class="info-text">
          <div class="info-text-heading">
            <h1>Let’s <span className="orange-text">design</span> and never stop doing it</h1>
            <p>
            At ocean and cloud attesting to an utmost belief that there is a fathomless count of ideas in the embodiment that gives life to the imagination of the soul turning it into a living work of peak ART. Within the bounds of this embodiment, rein in a flourishing fountain of ideas and tabula rasa for yet another MASTERPIECE. There also lies the belief that EXPRESSION is the only way for the same embodiment to communicate with other embodiments, an invitation to something not spoken of. 
Ocean and cloud not only extend an invitation to view but also to create and set your mark as an embodiment who adds beauty and life to obscurity and let's keep doing it like never before.
            </p>
          </div>
          <div class="info-text-cta">
            <span className="orange-text"><h4>Go to our products</h4></span>
            <span class="material-symbols-outlined icon-arrow orange-text">
              arrow_forward
            </span>
          </div>
        </div>
        <div class="info-photo">
          <img src="./img/info.jpg" />
        </div>
      </div></>
  );
};

export default ProductListSection;
