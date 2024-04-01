import React, { useEffect, useRef } from 'react';
import modifyAnchorTags from './modifyanchortags'; // Update the path as necessary
import TextReveal from './Views/MeetJackie/TextReveal';

import './BarbieBlogPost.css';
import HyvorTalkComments from './HyvorTalkComments';
import SubscribeButton from './SubscribeButton';


const Victoria1 = `${process.env.PUBLIC_URL}/Images/Victoria1.png`;
const Victoria2 = `${process.env.PUBLIC_URL}/Images/Victoria2.png`;
const Victoria3 = `${process.env.PUBLIC_URL}/Images/Victoria3.png`;
const Victoria4 = `${process.env.PUBLIC_URL}/Images/Victoria4.png`;
const Victoria5 = `${process.env.PUBLIC_URL}/Images/Victoria5.png`;
const Victoria6 = `${process.env.PUBLIC_URL}/Images/Victoria6.png`;
const Victoria7 = `${process.env.PUBLIC_URL}/Images/Victoria7.png`;
const Victoria8 = `${process.env.PUBLIC_URL}/Images/Victoria8.png`;
const Victoria9 = `${process.env.PUBLIC_URL}/Images/Victoria9.png`;
const Victoria10 = `${process.env.PUBLIC_URL}/Images/Victoria10.png`;
const Victoria11 = `${process.env.PUBLIC_URL}/Images/Victoria11.png`;
const Victoria12 = `${process.env.PUBLIC_URL}/Images/Victoria12.png`;
const Victoria13 = `${process.env.PUBLIC_URL}/Images/Victoria13.png`;
const Victoria14 = `${process.env.PUBLIC_URL}/Images/Victoria14.png`;
const Victoria15 = `${process.env.PUBLIC_URL}/Images/Victoria15.png`;
const Victoria16 = `${process.env.PUBLIC_URL}/Images/Victoria16.png`;
const Victoria17 = `${process.env.PUBLIC_URL}/Images/Victoria17.png`;
const Victoria18 = `${process.env.PUBLIC_URL}/Images/Victoria18.png`;
const Victoria19 = `${process.env.PUBLIC_URL}/Images/Victoria19.png`;
const Victoria20 = `${process.env.PUBLIC_URL}/Images/Victoria20.png`;
const Victoria21 = `${process.env.PUBLIC_URL}/Images/Victoria21.png`;
const Victoria22 = `${process.env.PUBLIC_URL}/Images/Victoria22.png`;
const Victoria23 = `${process.env.PUBLIC_URL}/Images/Victoria23.png`;
const Victoria24 = `${process.env.PUBLIC_URL}/Images/Victoria24.png`;
const Victoria25 = `${process.env.PUBLIC_URL}/Images/Victoria25.png`;
const Victoria26 = `${process.env.PUBLIC_URL}/Images/VictoriaFinal.png`;
const Barbie16 = `${process.env.PUBLIC_URL}/Images/Barbie16.png`;







const Card = ({ blogContent }) => {
    return (
        <div><div><TextReveal text='POP CULTURE OBSESSED'/></div>

        <div className="card" style={{ marginTop: '1rem', maxWidth: '100%' , display: 'center', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            <div className="blog-content" style={{ lineHeight: '1.5' }}>{blogContent}</div>
        </div></div>
    );
};

const VictoriaSecret = () => {
    const websiteId='10569';

   const blogRef = useRef(null);
  
   useEffect(() => {
     modifyAnchorTags(blogRef.current);
   }, []);
    const blogContent = (
        <div className="container" style={{ 
            lineHeight: '2.2em',

                display: 'center',
                maxWidth: '100%', 
            margin: '10em',
      
               }}>

<div>
<div> 
<div>
  <a href="URL_HERE">Beauty // Pop Culture // Trends</a>
</div>
    
    <img src= {Victoria1} alt = 'b1' style={{width:'100%'}}></img>
    <iframe width="100%" height="545" src="https://www.youtube.com/embed/Uz03ReLZO9k?si=MH1SxGBcBIzqo20N&amp;start=3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    
    </div>
    <SubscribeButton/>



    <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Welcome back, beauties! I don’t know about you, but I could definitely use a pick-me-up in the middle of winter. My go-to remedy is a mini shopping spree paired with a fabulous beauty routine! Let’s reminisce about the Victoria’s Secret Fashion Show of 2013, particularly the breathtaking Snow Angel segment. Remember the dazzling white lingerie, extravagant diamond necklaces, voluminous textured hair, and the understated yet glamorous makeup? Absolutely iconic. It was also Taylor Swift’s first Victoria’s Secret performance, looking as much of a supermodel as the angels on the winter wonderland-themed runway.

     </p>
     <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Although I'm drawing inspiration from the 2013 VSFS show, behind the
scenes photos from the runway were a staple of girly Tumblr throughout
2014. Let’s revisit some beloved beauty products from 2014 and I’ll
introduce some contemporary alternatives that capture a similar, girly
Tumblr vibe. Walking down beauty memory lane has been so much fun, and
I hope to revive some love of products you may have used 10 years ago!   </p>

<div> <a href='https://www.instagram.com/p/C3amrWou7Li/' alt=''> 
<img src= {Victoria2} alt = 'b1' style={{width:'100%'}}></img>
</a>
</div>




<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            First, I treated myself to a bit of shopping at Victoria's Secret, where I found a gorgeous white push-up bra from PINK as pictured above, the newest version of their iconic fashion show robe, and a new scent! After testing all the fragrances, the Tease Crème Cloud Eau de Parfum stood out as my favorite along with the matching body lotion. My top beauty must-have though? The VS glosses. I picked up a set including Caramel Kiss gloss. The sweet smell and bold shine is an instant mood booster and has been a go-to for years!

</p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
        <a href='https://go.shopmy.us/p-1491445' style={{ flex: 1 }}>
        <img src={Victoria3} alt="Victoria's Secret SKIMS Campaign" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491462' style={{ flex: 1 }}>
        <img src={Victoria4} alt="Close-up of Victoria's Secret product" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491466' style={{ flex: 1 }}>
        <img src={Victoria5} alt="Victoria's Secret makeup look" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
How To Get the Victoria’s Secret
SNOW ANGEL look! </p>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
  <img src={Victoria6} alt='b1' style={{ maxWidth: '80%', height: 'auto' }} />
</div>
<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>

Glowing Bronze, Healthy Skin  </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
A staple of Victoria's Secret models is their radiant, well-moisturized bronzed skin. To achieve this, I turn to the COCO & EVE Self Tan in dark, allowing it to develop its magic overnight. For a deeper dive into my thoughts on this self-tanner, check out my review here. </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
To complete the throwback vibe to 2014, let’s prep the lips with an EOS lip
balm, or the iconic Maybelline Baby Lips to ensuring they're as soft and
hydrated as well. Low-key these are not my favorite balms for moisture, but
they do bring me back.  </p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
        <a href='https://go.shopmy.us/p-1491445' style={{ flex: 1 }}>
        <img src={Victoria7} alt="Victoria's Secret EOS lip balm" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491462' style={{ flex: 1 }}>
        <img src={Victoria8} alt="Victoria's Secret Maybelline Baby Lips" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491466' style={{ flex: 1 }}>
        <img src={Victoria9} alt="Victoria's Secret COCO & EVE Self Tan" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Bed-Head Meets Blowout Hair </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Orlando Pita, the hairstylist, aimed for the models to sport a blowout with the texture of bed-head hair. Since I don't have shorter layers to fully achieve this look naturally, I opted for a Raquel Welch MILES OF STYLE wig in the shade Honey Pecan for my Victoria's Secret-inspired photoshoot.        </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
For those wanting to use their own hair, I suggest applying mousse, blow-drying, and then curling away from the face with a 1.25-inch T3 micro wand. Adding a texture spray will help separate the layers for that perfect blend of polish and tousle.      </p>





<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Base Makeup</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Starting with moisturized skin is crucial. The Too Faced Hangover Replenishing Face Primer has been my go-to for hydration. For those who prefer a matte finish, Maybelline Baby Skin Instant Pore Eraser and Benefit Cosmetics the POREfessional Face Primer are excellent picks, though I lean towards the hydration of the hangover primer for this look.        </p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
        <a href='https://go.shopmy.us/p-1491445' style={{ flex: 1 }}>
        <img src={Victoria9} alt="Victoria's Secret hair look inspiration" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491462' style={{ flex: 1 }}>
        <img src={Victoria10} alt="Victoria's Secret T3 micro wand" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491466' style={{ flex: 1 }}>
        <img src={Victoria11} alt="Victoria's Secret texture spray" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Dick Page, the makeup artist for the 2013 show, applied an antiqued rose lipstick as a blush across the cheeks and nose before foundation for a healthy glow—a lighter take on underpainting. I'm using a Maybelline lipstick in a similar shade and satin finish to replicate this effect.       </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
The minimalist approach was key for the skin, so I used Armani Beauty Luminous Silk Foundation sheered out for a natural finish. The L’Oréal True Match Lumi products are great alternatives from the drugstore!

     </p>

     <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
A touch of Maybelline Age Rewind concealer only one shade lighter than the foundation brightens the center of the face. Avoid too bright of a concealer as the skin wasn’t too heavily highlighted and contoured, unlike upcoming makeup trends. (Looking at you, 2016!)

         </p>

         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
        <a href='https://go.shopmy.us/p-1491445' style={{ flex: 1 }}>
        <img src={Victoria12} alt="Victoria's Secret base makeup" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491462' style={{ flex: 1 }}>
        <img src={Victoria13} alt="Victoria's Secret Maybelline Age Rewind concealer" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491466' style={{ flex: 1 }}>
        <img src={Victoria14} alt="Victoria's Secret Armani Beauty Luminous Silk Foundation" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Setting The Face</p>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
GUERLAIN Meteorites Highlighting Powder Pearls were a staple in 2014 beauty flat-lays. While many drugstore dupes have vanished, this product remains a favorite for setting makeup with a glowy finish. Plus… it’s so pretty and smells expensive.     </p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Bronzer & Blush</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Hoola Bronzer by Benefit Cosmetics is a staple in my makeup bag! I'm applying it lightly for a fresh, soft sculpt. Hoola is great for this look because it doesn’t contain a lot of shimmer. That way, when we use NARS Orgasm blush which does contain some shimmer, the skin will have the perfect amount of glow without being overpowering.   </p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
        <a href='https://go.shopmy.us/p-1491445' style={{ flex: 1 }}>
        <img src={Victoria15} alt="Victoria's Secret GUERLAIN Meteorites Highlighting Powder Pearls" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491462' style={{ flex: 1 }}>
        <img src={Victoria16} alt="Victoria's Secret Hoola Bronzer" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491466' style={{ flex: 1 }}>
        <img src={Victoria17} alt="Victoria's Secret NARS Orgasm blush" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>



<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Natural Groomed Brows</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            For the eyes, start with a deep brown liner, I chose URBAN DECAY | 24/7 Glide-On Waterproof Eyeliner Pencil in Demolition, a matte deep brown along the upper lash line and into the outer v. Smoke this out for a base for eyeshadow.  </p>

            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
The Too Faced Natural Eyes palette is still my go-to palette. Blend the deepest bronze over the lid and into the crease, brightened up with the gold over the center of the lid for a gentle, shimmering look.

  </p>

  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
    <a href='https://go.shopmy.us/p-1491445' style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Victoria18} alt="Barbie Blog" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491462' style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Victoria19} alt="Barbie Blog" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491466' style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Victoria20} alt="Barbie Blog" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>








<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
If you want to go with drugstore products, remember the wet & wild trios?! For a softer VS-inspired look, the Walking On Eggshells palette would totally work, just swap the lightest shade in the palette for the gold.

   </p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Lashes & Lips</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
After defining the lash line with more black liner, curl your lashes and apply mascara—Lash Paradise and Too Faced Better Than Sex are my girly, nostalgic favorites.      </p>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
While lip liner was less common in the 2010s, I used Charlotte Tilbury Lip Cheat in Iconic Nude, followed by a tinted balm. The YSL Rouge Volupté Shine in Nude Lingerie is a stunning choice for a pretty pink that mirrors Candace Swanepoel's look.

      </p>


      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
        <a href='https://go.shopmy.us/p-1491445' style={{ flex: 1 }}>
        <img src={Victoria21} alt="Victoria's Secret Urban Decay eyeliner" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491462' style={{ flex: 1 }}>
        <img src={Victoria22} alt="Victoria's Secret Too Faced Natural Eyes palette" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491466' style={{ flex: 1 }}>
        <img src={Victoria23} alt="Victoria's Secret makeup look finish" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Finishing Touches</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
For highlighter, I used the Charlotte Tilbury Bar of Gold. Taking the lightest shade, apply to the cheekbones, nose, and inner corner of the eye. I remember saving up for this highlighter palette in 2014 and still love it.       </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
On the drugstore side, WinkyLux offers adorable rose-shaped highlighters, a perfect addition to any hyper-feminine vanity. If these highlighters were around in 2014, you bet they’d be all over Tumblr.        </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Don’t overlook Victoria's Secret glosses for that signature scent and sheen! As mentioned, Caramel Kiss as my all-time favorite.         </p>


<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '0em', gap: '0em' }}>
        <a href='https://go.shopmy.us/p-1491469' style={{ flex: 1 }}>
        <img src={Victoria24} alt="Victoria's Secret Charlotte Tilbury Lip Cheat" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491474' style={{ flex: 1 }}>
        <img src={Victoria25} alt="Victoria's Secret YSL Rouge Volupté Shine" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-1491514' style={{ flex: 1 }}>
        <img src={Victoria25} alt="Victoria's Secret finishing touches" style={{ maxWidth: '100%', height: 'auto' }} />
    </a>
</div>

          

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
The Final Look & DIY Winter Wonderland Lingerier</p>

<div> <a href='https://www.instagram.com/p/C3amrWou7Li/'>
<img src= {Victoria26} alt = 'b1' style={{marginLeft: '7rem',padding: '7rem', width:'80%', height: 'auto'}}></img>
    </a>
    
</div>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Echoing the 2013 show's "birds of a feather" theme, I crafted angel wings from paper cutouts and floral wire. Would be a fun idea for a Halloween costume! A shimmering body cream or oil will complete your supermodel glow.

      </p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
The Iconic Pink Robes & A 2014 Tumblr Girl Gift Guide! </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
The 2013 robes behind the scenes at the fashion show were a stunning light pink and white stripe in a satin finish. The new robes for 2023/2024 are very similar and linked below along with more products that complete the 2014 girly, pink aesthetic.
            </p>
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
SHELF EMBEDDED HERE
            </p>
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            Want to be featured on my site? Submit your recreation or version of this look here. I’d love to see you switch up your style with confidence!


            </p>


<div> <img src= {Barbie16} alt = 'b1' style={{width:'100%'}}></img></div>

       </div></div>
    );

    return (
        <div ref={blogRef}><Card
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
        
        <HyvorTalkComments
    websiteId={websiteId}
    pageId={"Victoria-Secret"} // Unique identifier for this blog post
/>
</div>
    );
};

export default VictoriaSecret;
