import React, { useEffect, useRef } from 'react';
import TextReveal from '../Views/MeetJackie/TextReveal';
const jicky1 = `${process.env.PUBLIC_URL}/Images/jicky1.png`;
const jicky2 = `${process.env.PUBLIC_URL}/Images/jicky2.png`;
const jicky3 = `${process.env.PUBLIC_URL}/Images/jicky3.png`;
const jicky4 = `${process.env.PUBLIC_URL}/Images/jicky4.png`;
const jicky5 = `${process.env.PUBLIC_URL}/Images/jicky5.png`;
const jicky6 = `${process.env.PUBLIC_URL}/Images/jicky6.png`;

const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%' , display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const JickyReview = () => {

    const websiteId = "YOUR_WEBSITE_ID"; 
    const blogRef = useRef(null);
  


    const blogContent = (
        <div className="container" style={{ 
                
            display: 'center',
            maxWidth: '100%', 
        margin: '5rem',
        padding: '5rem',
           }}>


<div>    <img src= {jicky1} alt = 'b1' style={{width:'100%'}}></img></div>
<div>    <img src= {jicky2} alt = 'b1' style={{width:'100%'}}></img></div>
<div>    <img src= {jicky3} alt = 'b1' style={{width:'100%'}}></img></div>
<div>    <img src= {jicky4} alt = 'b1' style={{width:'100%'}}></img></div>
<div>    <img src= {jicky5} alt = 'b1' style={{width:'100%'}}></img></div>
<div>    <img src= {jicky6} alt = 'b1' style={{width:'100%'}}></img></div>
    
   

<div>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Perfume Profile:
Jicky by Guerlain


</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            
Perfume Name: Jicky
Brand: Guerlain
Year of Release: 1889
Perfumers: Aimé Guerlain

</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            
Price: Jicky by Guerlain in the Eau de Parfum concentration
75 ml (2.53 oz) - $150.00 USD

</p>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
⭐ Background Information
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            
Jicky by Guerlain stands as one of the oldest perfumes in continuous
production, a testament to its timeless appeal. Conceived by Aimé Guerlain
in the late 19th century, Jicky is a revolutionary fragrance that harmoniously
blends the freshness of lavender and citrus with a warm, spicy undertone,
making it a precursor to modern perfumery.

</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            
There is both the Jicky by Guerlain Eau de Parfum concentration, and Eau
de Toilette which have different bottles and potency. Guerlain maintains the
integrity and signature of Jicky across both formulations. The differences
cater to varying preferences in fragrance intensity and longevity, I personally
have the Eau De Toilette though it can only be found on eBay as it has been
discontinued (prices start at $200 USD!🐝 )

</p>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
🍋 Fragrance Profile
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Concentration: Eau de Toilette Spray
Fragrance Family: Oriental Fougère
Top Notes: Bergamont, Rosemary, Lemon, Mandarin Orange
Heart/Middle Notes: Lavender, Orris Root, Tonka Bean, Basil
and Jasmine
Base Notes: Vanilla, Spices, Leather, Amber, Sandalwood,
Palisander Rosewood
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Overall Scent Profile: Jicky is an enigmatic blend of vibrant top notes
and a mysterious, deep base. Its opening is fresh and inviting, quickly
evolving into a complex, spicy heart, and settling into a rich, warm embrace
of vanilla and woods. This duality makes Jicky both refreshing and
comforting masterpiece.
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
👱 Personal First Impressions:

</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
My introduction to Jicky was inspired by the beautiful and bohemian
Sharon Tate. While preparing for a Sharon Tate-inspired makeup tutorial, I
discovered her fondness for Jicky by Guerlain, alongside Chanel No. 5.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Although Chanel No. 5's heavy florals are iconic, I found myself drawn to
Jicky for its unique blend of masculine and feminine notes, and notably, its
powdery finish that distinguishes it from the floral dominance of Chanel
No. 5.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Jicky’s harmonious balance and warm, powdery essence make it a versatile
and endearing fragrance. Penhaligon’s Trade Routes fragrances rank
among my all-time favourites, and Jicky shares a similar boldness but is
somewhat more affordable.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
This distinctive fragrance begins with light and feminine notes of lavender,
lemon, and mandarin, eventually settling into a base of vanilla, spices, and
sandalwood—some of my favorite base notes. Jicky not only holds historical
significance, often considered the first modern perfume in history, but it also
transcends trends with a fresh, warm, powdery finish. I recommend this
fragrance for those seeking a mature scent. By that, I mean it might not have
been my choice as a teenager, but in adulthood, it has become a cherished
go-to fragrance I absolutely adore.
</p>




<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
💗 Review & Recommendations
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Longevity: Remarkably long-lasting, Jicky can easily carry you through the
day into the evening.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Sillage: Moderate but noticeable, it leaves a subtle, intriguing trail that
invites closer attention.
</p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Occasions and Seasonality: Jicky's versatility makes it suitable for all
seasons, shining particularly well in the transitional periods of spring and
fall. It's ideal for both casual daytime wear and more formal evening
settings.
</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
⚖ Comparisons
</p>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Jicky often draws comparisons to other classic
fragrances like Chanel No. 5, but remains in a
category of its own due to its historical significance
and unique composition. It might remind some of
modern fougères yet retains a distinct character that
is unmistakably Guerlain.


</p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
📝 Final Thoughts
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Pros and Cons: While Jicky's unconventional blend might not appeal to
those who favor straightforward, modern fragrances, its allure lies in its
complexity and historical richness. It’s also a fragrance that needs to dry
down to understand the appeal - don’t judge after the initial spray!
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Value for Money: Considering its iconic status and the quality of
ingredients, Jicky represents a significant investment in the art of perfumery.
I personally love the eau de toilette and luckily found my bottle on Amazon
making it a convenient buy. Looks to be only on Ebay and Etsy have any bee
bottles currently.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Who Would Enjoy It: Ideal for the fragrance connoisseur and the
adventurous spirit, Jicky suits those who appreciate a fragrance with depth,
history, and a powdery finish.
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Conclusion: Jicky by Guerlain has an enduring popularity which is a tribute
to its timeless elegance and pioneering spirit. Sharon Tate has fabulous
taste!
</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Have you explored the historic allure of Jicky by Guerlain? Share your
thoughts and experiences below!
</p>




</div></div>
    );

    return (
        <div><div
        style = {{width:'100%', marginBottom: '2rem'}}
        ><TextReveal text='JICKY // GUERLAIN'/>
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

export default JickyReview;
