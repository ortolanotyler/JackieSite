import React, { useEffect, useRef } from 'react';
import TextReveal from '../Views/MeetJackie/TextReveal';

const BonBon1 = `${process.env.PUBLIC_URL}/Images/BonBon1.png`;
const BonBon2 = `${process.env.PUBLIC_URL}/Images/BonBon2.png`;
const BonBon3 = `${process.env.PUBLIC_URL}/Images/BonBon3.png`;
const BonBon4 = `${process.env.PUBLIC_URL}/Images/BonBon4.png`;
const BonBon5 = `${process.env.PUBLIC_URL}/Images/BonBon5.png`;
const BonBon6 = `${process.env.PUBLIC_URL}/Images/BonBon6.png`;


const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%' , display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const BonBonReview = () => {

    const websiteId = "YOUR_WEBSITE_ID"; 
    const blogRef = useRef(null);
  


    const blogContent = (
        <div className="container" style={{ 
                
            display: 'center',
            maxWidth: '100%', 
        margin: '5rem',
        padding: '5rem',
           }}>


<div>    <img src= {BonBon1} alt = 'b1' style={{width:'100%'}}></img></div>
<div>    <img src= {BonBon2} alt = 'b1' style={{width:'100%'}}></img></div>

   

<div>

<div>    <img src= {BonBon6} alt = 'b1' style={{width:'100%'}}></img></div>



<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
🍑 Background Information
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            
Bonbon is a celebration of self-indulgence, a fragrant ode to the joy of
savouring life's sweet moments. Its timeless appeal beckons one to a world
of pure, unadulterated pleasure.
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
🍬 Fragrance Profile
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Concentration: Eau de Parfum
Fragrance Family: Floral Fruity Gourmand
Top Notes: Mandarin, Orange, Peach
Heart/Middle Notes: Caramel, Jasmine, Orange blossom
Base Notes: Amber, Guaïac wood, Cedarwood, Sandalwood
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Overall Scent Profile: A luscious peach opening gives way to a heart
overflowing with caramel's sweet embrace, tempered by delicate floral
whispers. The base, a comforting blend of warm woods, anchors the
fragrance in sophistication.
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
🎀 Personal First Impressions:
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
My first brush with Bonbon took place in a Nordstrom back in 2015. Before
that moment, the realm of high-end perfumes was uncharted territory for
me. Yet, as I passed by the counter, the luxurious packaging caught my eye—
a whimsically wrapped candy in deep magenta hues, cradled in an equally
charming pink and black box. It was love at first sight!
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Upon the first whiff of Bonbon's sweet, sophisticated aroma, I was
hooked. This eau de parfum is described as a gourmand fragrance with
notes of Peach, Caramel, and Amber. I eagerly picked up a bottle, and the
staff sent me on my way with a bag filled with tissue paper lightly spritzed
with the fragrance. Walking through the mall that day, the number of
compliments I received was unparalleled 🎀 🍬
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
As a young adult at the time with a fondness for sweet, playful scents, I
steered away from body sprays and anything too fruity. I’ve always been
drawn to fragrances that lay on a foundation of sandalwood as they feel
warm, woody, and inviting alongside the sweetness. This is why Bonbon was
the perfect, first-luxury perfume buy that I’d recommend for teens or young
adults who love a mature, but sweet scent.
</p>

<div>  <img src= {BonBon3} alt = 'b1' style={{width:'100%'}}></img></div>



<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
💗 Review & Recommendations
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Longevity: A commendable 6 to 8 hours on the skin, though individual
experiences may vary.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Sillage: Its presence is assertive yet not overpowering, leaving a trail of
intrigue.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Occasions and Seasonality: Ideal for the cooler embrace of autumn and
winter, Bonbon transitions seamlessly from daytime charm to evening
elegance
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
⚖ Comparisons
</p>

<div>  <img src= {BonBon4} alt = 'b1' style={{width:'100%'}}></img></div>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Lovers of sweet gourmands and vanilla will find
joy in exploring similar fragrances, like Bianco
Latte Giardini Di Toscana, with its own take
on caramel. Yet, Bonbon's fruity opening sets it
apart, offering a distinctive allure.


</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
📝 Final Thoughts
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Pros and Cons: While its gourmand charm and lasting warmth are
undeniable, those in search of spicier or more subdued scents might look
elsewhere, perhaps to the likes of Legacy of Petra by Penhaligon's for a
woodsy, spicy alternative.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Value for Money: Bonbon is a testament to its craftsmanship, offering a
unique and enduring fragrance that justifies its price tag.
Who Would Enjoy It: A must-try for gourmand fragrance aficionados
seeking a sophisticated twist on sweetness.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Who Would Enjoy It: A must-try for gourmand fragrance aficionados
seeking a sophisticated twist on sweetness.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Conclusion: Bonbon by Viktor & Rolf is a masterful creation that offers
more than just a sweet fragrance; it's a statement of indulgence and
pleasure. Its lasting power, unique scent profile, and beautiful packaging
make it a fragrance worth exploring for those drawn to sweet, gourmand
scents.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Have you tried Viktor & Rolf fragrances? Let me know your thoughts below,
I’d love to hear your experience.
</p>

<div>  <img src= {BonBon5} alt = 'b1' style={{width:'100%'}}></img></div>





</div></div>
    );

    return (
        <div><div
        style = {{width:'100%', marginBottom: '2rem'}}
        ><TextReveal text='VICTOR & ROLF'/>
        </div>
        <div ref={blogRef}>
<Card
            title="Margot Robbie's BARBIE Makeup & DIY ‘90s Roller skate Costume!"
            description="Come on Barbie, Let’s get Glam!"
            blogContent={blogContent}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                textAlign: 'center'
            }}
        />
      </div></div>
    );
};

export default BonBonReview;
