import React, { useEffect, useRef } from 'react';
import TextReveal from '../Views/MeetJackie/TextReveal';
import halfeti1 from '../Images/Halfeti1.png';
import halfeti2 from '../Images/Halfeti2.png';
import halfeti3 from '../Images/Halfeti3.png';
import halfeti4 from '../Images/Halfeti4.png';
import halfeti5 from '../Images/Halfeti5.png';
import halfeti6 from '../Images/Halfeti6.png';

const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%' , display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const HalfetiReview = () => {

    const websiteId = "YOUR_WEBSITE_ID"; 
    const blogRef = useRef(null);
  


    const blogContent = (
        <div className="container" style={{ 
                
            display: 'center',
            maxWidth: '100%', 
        margin: '5rem',
        padding: '5rem',
           }}>


<div>    <img src= {halfeti1} alt = 'b1' style={{width:'100%'}}></img></div>
<div>    <img src= {halfeti2} alt = 'b1' style={{width:'100%'}}></img></div>

   

<div>

<div>    <img src= {halfeti3} alt = 'b1' style={{width:'100%'}}></img></div>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
🌹 Background Information
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            
Halfeti by Penhaligon's is an aromatic voyage to the exotic trade routes of
the East, capturing the essence of the rare black roses of Halfeti, Turkey. It's
an opulent and heady scent that exudes luxury and mystery
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
🌿 Fragrance Profile
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Concentration: Eau de Parfum
Fragrance Family: Oriental Woody
Top Notes: Grapefruit, Bergamot, Green Notes
Heart/Middle Notes: Rose, Lavender, Cardamom, Nutmeg,
Saffron, Creamy Jasmine
Base Notes: Leather, Oud, Amber, Resins, Tonka Bean, Vanilla,
Sandalwood
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Overall Scent Profile: Halfeti is an exotic experience as it opens
with a vibrant burst of citrus that soon unfolds into a rich, spicy
heart of Eastern spices and florals - particularly rose. The dry
down reveals a deep, sensuous base of woody and resinous
notes, creating a lasting and unforgettable impression.
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
🗺 Personal First Impressions:

</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
My first encounter with Penhaligon's fragrances was when I received a tester
set featuring a variety of scents from this iconic British perfume house.
Among them, Halfeti stood out and quickly became a favorite for both my
husband and I. As a unisex fragrance, it boasts a rich, exotic, and distinct
aroma. The "Trade Routes" collection from Penhaligon's draws inspiration
from various destinations, and although I've never visited Halfeti, Turkey,
this particular fragrance transports me to what I imagine would be a warm
and vibrant night bazaar.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Out of the many Penhaligon's perfumes I've tried, Halfeti is one that I've
often chosen as a gift for other women, particularly older women as it is
quite a mature scent, and it's the one I've personally depleted most
frequently. Its uniqueness and relative obscurity often earn me compliments
and inquisitive queries about the scent I'm wearing. I don’t gatekeep, but
you sure can 😉
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
I recommend visiting a Penhaligon’s boutique or your nearest Nordstrom or
Saks Fifth Avenue to experience Halfeti for yourself. It might be challenging
to envision how the enchanting combination of notes comes together, but
they do so in a bold and alluring manner that is simply irresistible. You’ll
smell expensive with this deeply rich scent, and that is what you pay for with
Penhaligon’s!
</p>

<div>  <img src= {halfeti4} alt = 'b1' style={{width:'100%'}}></img></div>
<div>  <img src= {halfeti5} alt = 'b1' style={{width:'100%'}}></img></div>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
💗 Review & Recommendations
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Longevity: This fragrance is known for its staying power, often lasting
beyond 8 hours
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Sillage: It commands attention with its potent sillage, leaving a trail that's
both warm and mysterious.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Occasions and Seasonality: Halfeti's depth and warmth make it perfect for
cooler seasons, and its boldness suits formal events or evenings when you
want to make a statement.
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
⚖ Comparisons
</p>

<div>  <img src= {halfeti5} alt = 'b1' style={{width:'100%'}}></img></div>




<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
📝 Final Thoughts
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Pros and Cons: The blend of exotic spices and florals
might be intense for those who prefer lighter scents. But
for lovers of rich, complex fragrances, Halfeti is a treasure.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Value for Money: Given its complexity and longevity, Halfeti is a worthy
indulgence for those who appreciate niche perfumery..
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Who Would Enjoy It: A signature scent for the bold and adventurous, it's
for those who aren't afraid to stand out. I personally feel like this is a more
mature fragrance.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Conclusion: Halfeti by Penhaligon's is a fragrant masterpiece, weaving
together the essence of the East with British perfumery's finesse. It's a scent
that promises to transport you to another world, one spritz at a time.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Have you experienced the allure of Halfeti by Penhaligon's? Share your
thoughts below.
</p>
<div>  <img src= {halfeti6} alt = 'b1' style={{width:'100%'}}></img></div>




</div></div>
    );

    return (
        <div><div
        style = {{width:'100%', marginBottom: '2rem'}}
        ><TextReveal text='PENHALIGONS'/>
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

export default HalfetiReview;
