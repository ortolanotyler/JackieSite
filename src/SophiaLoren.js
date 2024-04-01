import React, { useEffect, useRef } from 'react';
import modifyAnchorTags from './modifyanchortags'; // Update the path as necessary
import TextReveal from './Views/MeetJackie/TextReveal';




import './BarbieBlogPost.css';
import HyvorTalkComments from './HyvorTalkComments';

const Sophia1 = `${process.env.PUBLIC_URL}/Images/Sophia1.png`;
const Sophia2 = `${process.env.PUBLIC_URL}/Images/Sophia2.png`;
const Sophia3 = `${process.env.PUBLIC_URL}/Images/Sophia3.png`;
const Sophia4 = `${process.env.PUBLIC_URL}/Images/Sophia4.png`;
const Sophia5 = `${process.env.PUBLIC_URL}/Images/Sophia5.png`;
const Sophia6 = `${process.env.PUBLIC_URL}/Images/Sophia6.png`;
const Sophia7 = `${process.env.PUBLIC_URL}/Images/Sophia7.png`;
const Sophia8 = `${process.env.PUBLIC_URL}/Images/Sophia8.png`;
const Sophia9 = `${process.env.PUBLIC_URL}/Images/Sophia9.png`;
const Sophia10 = `${process.env.PUBLIC_URL}/Images/Sophia10.png`;
const Sophia11 = `${process.env.PUBLIC_URL}/Images/Sophia11.png`;
const Sophia12 = `${process.env.PUBLIC_URL}/Images/Sophia12.png`;
const Sophia13 = `${process.env.PUBLIC_URL}/Images/Sophia13.png`;
const Sophia14 = `${process.env.PUBLIC_URL}/Images/Sophia14.png`;
const Sophia15 = `${process.env.PUBLIC_URL}/Images/Sophia15.png`;
const Sophia16 = `${process.env.PUBLIC_URL}/Images/Sophia16.png`;
const Sophia17 = `${process.env.PUBLIC_URL}/Images/Sophia17.png`;
const Sophia18 = `${process.env.PUBLIC_URL}/Images/Sophia18.png`;
const Sophia19 = `${process.env.PUBLIC_URL}/Images/Sophia19.png`;
const Sophia20 = `${process.env.PUBLIC_URL}/Images/Sophia20.png`;
const Sophia21 = `${process.env.PUBLIC_URL}/Images/Sophia21.png`;
const Sophia22 = `${process.env.PUBLIC_URL}/Images/Sophia22.png`;







const Card = ({ blogContent }) => {
    return (
     <div>   <div><TextReveal text = 'TIME TRAVEL TUTORIALS'/></div>
        <div className="card" style={{ maxWidth: '100%' , display: 'center', textAlign: 'left', backgroundColor: 'white', color: 'black', fontFamily: 'GFS Didot, sans-serif' , marginTop: '1rem' }}>
            
            <div className="blog-content" style={{ lineHeight: '1.2' }}>{blogContent}</div>
        </div></div>
    );
};

const SophiaLorenPost = () => {
    const blogRef = useRef(null);

    useEffect(() => {
        modifyAnchorTags(blogRef.current);

        // Dynamically load the Instagram embed script after the component mounts
        const script = document.createElement('script');
        script.src = "//www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
        
        // Re-parse the DOM for Instagram embeds after the script is loaded
        script.onload = () => {
            if (window.instgrm) {
                window.instgrm.Embeds.process();
            }
        };
    }, []);

  
    useEffect(() => {
      modifyAnchorTags(blogRef.current);
    }, []);

    
    const websiteId = "10569"; 


    const blogContent = (
        <div className="container" style={{ 
            display: 'flex',
            maxWidth: '100%', 
            margin: '10em',
            lineHeight: '2.2em',

           }}>

<div>
  <a href="URL_HERE">Beauty // Vintage Vibes // Time Travel Tutorials</a>
</div>
<div> 
    
<img src= {Sophia1} alt = 'b1' style={{width:'100%'}}></img></div>

<iframe width="100%" height="515" src="https://www.youtube.com/embed/o8_dfwGNXAc?si=q2_GxBp3sClXnUUB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<div>

            <p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
            Welcome back to my favorite series, Time Travel Tutorials, where we delve
into the glamorous world of beauty icons from the past. Today's spotlight is
on the mesmerizing Italian beauty, Sophia Loren. Born on September 20th,
1934, in Rome, Italy, Sophia Loren is a megastar in both Hollywood and
Italian cinema. Her career, spanning over six decades, is a testament to her
immense talent, charisma, and iconic makeup style, which continues to
inspire admiration (and imitation) today.         </p>
            <p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
            In this tutorial, we'll explore a timeless look inspired by her iconic pink
towel scene in "Arabesque." My goal is to inspire you with the best modern
products that capture the vintage charm of Loren's era, making it possible
for you to recreate this look. If you decide to give this tutorial a try, please be
sure to tag me or send a photo to be featured on the blog! I'd love to see you
in this glamorous style.  </p>

<div> <img src= {Sophia2} alt = 'b1' style={{width:'100%'}}></img></div>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
            The Essence of Sophia Loren’s Iconic
Makeup </p>
<div> <img src= {Sophia3} alt = 'b1' style={{width:'100%'}}></img></div>


<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
Over the years, I’ve explored numerous 1960s makeup styles.
While Twiggy, Jean Shrimpton, and Sharon Tate often sported
an exaggerated, graphic crease to emphasize an oversized lid,
Sophia was known for her double wing liner that created a very
elongated, sexy cat eye. Let’s break down the entire look from
the start!          </p>
     
<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
The Foundation of Loren's Look: A Tanned Base         </p>


<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
To replicate Sophia Loren's radiant tan from the "Arabesque" shower scene,
start with your favorite self-tanner. I initially used a dark shade of Loving
Tan, but I’d now recommend Coco & Eve Tanning Mousse. Skincare is
crucial for a flawless foundation application; after hydrating with a rich
moisturizer, I prepped under the eyes with Tatcha The Silk Peony Melting
Eye Cream.     </p>



<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5em', gap: '1em' }}>
            <a href='https://go.shopmy.us/p-3586259'>
            <img src={Sophia4} alt="Herbivore Pink Cloud Soft Moisture Cream" style = {{maxWidth:'100%'}} />
        </a>
        <a href='https://go.shopmy.us/p-3586269'>
            <img src={Sophia5} alt="Tatcha The Silk Peony Melting Eye Cream" style = {{maxWidth:'100%'}} />
        </a>
        <a href='https://go.shopmy.us/p-3586275'>
            <img src={Sophia6} alt="Coco and Eve Bali Bae Self Tan Set" style = {{maxWidth:'100%'}} />
        </a>
    </div>

       

<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
For primer, I opted for the Armani Beauty Luminous Silk Hydrating Primer,
(my favorite Italian brand) followed by Rare Beauty’s Serum foundation to
even out the tan while offering lighter coverage, mirroring Loren's sunkissed skin.        </p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Sculpting the Iconic Bone Structure </p>

<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
I went lighter on the foundation because we'll be highlighting and
contouring to mimic Loren's stunning bone structure, which will add to the
coverage.      </p>



<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
I highlighted my chin and jawline with Maybelline's Age Rewind Concealer,
focusing on the centre of my face and cheekbones to really make the centre
of the face pop.    </p>



<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5em', gap: '1em' }}>
        <a href='https://go.shopmy.us/p-3586283'>
        <img src={Sophia7} alt="Rare Beauty by Selena Gomez Liquid Touch Weightless Foundation" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-3586286'>
        <img src={Sophia8} alt="Maybelline Instant Age Rewind Multi-Use Dark Circles Concealer Medium to Full Coverage" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-3892070'>
        <img src={Sophia9} alt="Too Faced Born This Way Super Coverage Multi-Use Sculpting Concealer" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
</div>




<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
For contour, I layered Too Faced's Born This Way concealer in Honey, with a
touch of Chanel bronzer for depth, and Kevin Aucoin's contour powder to
gradually build up the look shading. This helped me try to achieve Loren's
stunning, low and round cheekbones, a divot in the chin, and a pointer nose
tip.         </p>


          

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
Old Hollywood Matte & Powdered Skin Finish</p>

<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
The overall makeup aesthetic in Old Hollywood emphasized a polished,
meticulously crafted appearance, with matte skin for a perfect canvas for the
dramatic eye makeup, sculpted eyebrows, and bold lip colours that defined
the period's iconic beauty looks. Achieve the matte skin with loose powder
on a puff! While dewy skin is super trendy now, give a matte base a try to
bring back iconic glamour and pretend your on set of your own film.      </p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5em', gap: '1em' }}>
        <a href='https://go.shopmy.us/p-3892107'>
        <img src={Sophia10} alt="Sophia Loren Product 1" style = {{maxWidth:'100%'}} />
    </a>
    <a href='https://go.shopmy.us/p-3586297'>
        <img src={Sophia11} alt="Sophia Loren Product 2" style = {{maxWidth:'100%'}} />
    </a>
    <a href='https://go.shopmy.us/p-3586318'>
        <img src={Sophia12} alt="Sophia Loren Product 3" style = {{maxWidth:'100%'}} />
    </a>
</div>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
            The “Laminated” Brows        </p>




<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
Sophia Loren's eyes are her most captivating feature. Let’s frame them with
full, arched, and elongated brows! Sophia’s brows appeared drawn on in
small strokes, brushed upwards, similar to a brow tattoo or laminated brow
style.           </p>

<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
The shape has a rounded arch and a tail that dips down slightly, extended
past the eye line. My brows are quite fuller, so I focused on slightly altering
my shape and combing the brows up for an inspired look.       </p>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
The Sophia Loren Double Winged Liner Cat Eye        </p>

<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
The first step to achieve the iconic eye is to use a white, gel liner to create a
wing from the outer corner of the eye outwards. Connect this wing to your
waterline, also rimmed with white to open up the eyes.     </p>
<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
Select a deep neutral palette, with greys, brows and taupes. I selected Dior5
Couleurs Couture Eyeshadow Palette (649 Nude Dress) and while some
photos of Sophia’s signature eye look like a charcoal grey (a deep, dark
shade of grey with a closeness to black,) in the Arabesque scenes, it looked a
bit more like a taupe ( more of a grey brown, warmer neutral) at least
through the lens.    </p>
<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
I took a rich taupe shadow smoked up from the lash line, softening the
edges with a lighter shimmery taupe into the crease. Don’t forget to
brighten up the brow bone to highlight the arched brow.    </p>
<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
Using a matte black shadow, map out the double wing, both above and
below the white liner closest to the lash line. Finish up with a bold gel liner
for precision and lots of mascara to make the eyes pop.  </p>



<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5em', gap: '1em' }}>
            <a href='https://go.shopmy.us/p-3586329'>
        <img src={Sophia13} alt="Sephora Colorful® Waterproof Eyeshadow & Eyeliner Multi-Stick" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-3586333'>
        <img src={Sophia14} alt="Dior Diorshow 5 Couleurs Couture Eyeshadow Palette" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-3586345'>
        <img src={Sophia15} alt="Amazon" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
</div>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
            The Elongated Lash Trick </p>


<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
With these glamorous eyes, take it a step further with outer corner lashes,
placed slightly beyond the natural lash line, hidden in the black liner.
Sexiest cat eye ever!          </p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5em', gap: '1em' }}>
        <a href='https://go.shopmy.us/p-3586360'>
        <img src={Sophia16} alt="Bodyography Expression EyeShadow" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://amzn.to/3wzIs6J'>
        <img src={Sophia17} alt="Ardell Lashes" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-3586368'>
        <img src={Sophia18} alt="Duo Striplash Adhesive Glue " style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
</div>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
            Lips and Cheeks: The Finishing Touches  </p>

            <p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'98%' , marginLeft: '1em'}}>
            For the lips, I chose a vibrant peachy pink shade from Charlotte Tilbury
called Sunset Lover—a perfect match for a sun-kissed Italian beauty! This
has sadly been discontinued, but a similar shade is Charlotte Tilbury Hot
Lips 3 Angel Alessandra, which is slightly more nude.
Sophia’s blush was subtle, so using the same lipstick as a bit of cream blush
works perfectly. A pink gloss added the final touch of colour. </p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '5em', gap: '1em' }}>
        <a href='https://go.shopmy.us/p-3586376'>
        <img src={Sophia19} alt="Charlotte Tilbury Lip Cheat Lip Liner" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-3586431'>
        <img src={Sophia20} alt="Charlotte Tilbury Hot Lips Lipstick 2" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
    <a href='https://go.shopmy.us/p-3586448'>
        <img src={Sophia21} alt="TOO FACED Lip Injection Glossy Plumping Lip Gloss MILKSHAKE" style={{ maxWidth: '30%', height: 'auto' }} />
    </a>
</div>
<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
            Nude Lips  </p>
<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
While peach lipsticks were often seen on screen, some behind-the-scenes
photos show a more nude style, as well as the second “Arabesque” look
covered below. Too Faced Milkshake gloss is a great option for this.  </p>


<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '1em'}}>
The Arabesque Hairstyle  </p>

<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
While this iconic look features a hot pink towel set (find a similar one on
Amazon here), you can also complete the look with a retro hairstyle, starting
with a high ponytail and pin-curling into a bun for volume and style. See a
mini tutorial below  </p>

<div>
<blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/CZUiijRh0LJ/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: 0, width: '-webkit-calc(100% - 2px)'}}
      >
        {/* Instagram embed content */}
      </blockquote>
      {/* This script tag is optional since we're adding the script dynamically in useEffect */}
      {/* <script async src="//www.instagram.com/embed.js"></script> */}
    </div>       

<p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
Whether you're a fan of Sophia Loren, a lover of the '60s, or just in search
of some beauty inspiration, I hope you found this guide inspiring. Join me
in celebrating the eternal elegance of Sophia Loren, and I can’t wait to
create another Time Travel Tutorial for you!         </p>



            <p style={{ fontSize:'1.7rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'98%' , marginLeft: '1em'}}>
            Want to be featured on my site? Submit your recreation or version of
this look here. I’d love to see you switch up your style with confidence!           </p>



           


                    
            </div></div>
    );

    return (
        <div ref={blogRef}><Card
        title="Margot Robbie's BARBIE Makeup & DIY ‘90s Roller skate Costume!"
        description="Come on Barbie, Let’s get Glam!"
        blogContent={blogContent}
        style={{
            display: 'center',
            marginLeft: '2em',
            justifyContent: 'center',
            alignItems: 'left',
            textAlign: 'center'
        }}
    />
    <HyvorTalkComments
    websiteId={websiteId}
    pageId={"Sophia-Loren"} // Unique identifier for this blog post
/></div>
    );
};

export default SophiaLorenPost;
