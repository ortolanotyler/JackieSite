import React, { useEffect, useRef } from 'react';
import modifyAnchorTags from './modifyanchortags'; // Update the path as necessaryimport Latte1 from './Images/Latte1.png';
import SubscribeButton from './SubscribeButton';
import './BarbieBlogPost.css';
import TextReveal from './Views/MeetJackie/TextReveal';
import HyvorTalkComments from './HyvorTalkComments';

const Latte1 = `${process.env.PUBLIC_URL}/Images/Latte1.png`;
const Latte2 = `${process.env.PUBLIC_URL}/Images/Latte2.png`;
const Latte3 = `${process.env.PUBLIC_URL}/Images/Latte3.png`;
const Latte4 = `${process.env.PUBLIC_URL}/Images/Latte4.png`;
const Latte5 = `${process.env.PUBLIC_URL}/Images/Latte5.png`;
const Latte6 = `${process.env.PUBLIC_URL}/Images/Latte6.png`;
const Latte7 = `${process.env.PUBLIC_URL}/Images/Latte7.png`;
const Latte8 = `${process.env.PUBLIC_URL}/Images/Latte8.png`;
const Latte9 = `${process.env.PUBLIC_URL}/Images/Latte9.png`;
const Latte10 = `${process.env.PUBLIC_URL}/Images/Latte10.png`;
const Latte11 = `${process.env.PUBLIC_URL}/Images/Latte11.png`;
const Latte12 = `${process.env.PUBLIC_URL}/Images/Latte12.png`;
const Latte13 = `${process.env.PUBLIC_URL}/Images/Latte13.png`;
const Latte14 = `${process.env.PUBLIC_URL}/Images/Latte14.png`;
const Latte15 = `${process.env.PUBLIC_URL}/Images/Latte15.png`;
const LatteMissing = `${process.env.PUBLIC_URL}/Images/LatteMissing.png`;
const Latte16 = `${process.env.PUBLIC_URL}/Images/Barbie16.png`;





const Card = ({ blogContent }) => {
    return (
        <div className="card" style={{ maxWidth: '100%' , display: 'flex', textAlign: 'left', backgroundColor: '#fff', color: 'black', fontFamily: 'GFS Didot, sans-serif' }}>
            
            <div className="blog-content" style={{ lineHeight: '1.3' }}>{blogContent}</div>
        </div>
    );
};

const LatteMakeupBlogPost = () => {

    const websiteId = "10569"; 
 
    const blogRef = useRef(null);
  
    useEffect(() => {
      modifyAnchorTags(blogRef.current);
    }, []);

    const blogContent = (
        <div className="container" style={{ 
            lineHeight: '2.2em',

            display: 'center',
            maxWidth: '100%', 
        margin: '10rem',
  
           }}>


<div>  
<div>
  <a href="URL_HERE">Beauty // TRENDS </a>
</div>
    
    
    
      <img src= {Latte1} alt = 'b1' style={{width:'100%'}}></img></div>
<iframe width="100%" height="515" src="https://www.youtube.com/embed/Jm0BdU88kr4?si=q_f9U-l_aZqaY83s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
   
   

<div>
<div>
    <SubscribeButton/>
        </div>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            
Hello, beauties, it's Jackie here with another trend report driven by the TikTok algorithm! The latte makeup look is all about embracing the warm, tawny tones to create a '90s inspired glam with a cozy vibe. Think caramel-toned smokey eye, no foundation, faux freckles, and a milky lip.          </p>
<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
This look is inspired by the incredible work of Danielle J MUA, whose tutorial on TikTok caught my eye. While I've added my own little twists to tailor it to my features, the essence of her technique remains a guiding force.      </p>

<div>
<a href="https://www.instagram.com/p/CvFsHXNO7nf/?img_index=1" target="_blank" rel="noopener noreferrer">
        <img src={Latte2} alt='b1' style={{ width: '100%' }} />
    </a>

</div>
<div

>
<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'95%' , marginLeft: '1em'}}>
            Get The Latte Makeup Look</p>
</div>


<div> <img src= {Latte3} alt = 'b1' style={{width:'100%'}}></img></div>

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'95%' , marginLeft: '1em'}}>
The Base: Tanned and Natural </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Applying self-tanner the night before can really help create a harmonious, warm canvas. Make sure you’ve moisturized the skin before makeup, and we are going with no foundation for this style, but I gave my skin a boost with Charlotte Tilbury Hollywood Flawless Filter for a sheer glow with a hint of coverage.          </p>
<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'95%' , marginLeft: '1em'}}>
            Highlight and Contour</p>
            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            My favorite palette for warming up the skin and highlighting is the Make Up For Ever HD Skin sculpting palette. These shades are sheer, so again the base won’t appear too heavy. While the foundation is natural, this style of makeup does call for contour and highlight!            </p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0em' }}>
                    <a href='https://go.shopmy.us/p-1905338'>
                    <img src={Latte4} alt="Sunny Honey Bali Bronzing Foam
Coco and Eve" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://go.shopmy.us/p-1905337'>
                    <img src={Latte5} alt="HOLLYWOOD FLAWLESS FILTER
Charlotte Tilbury" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://go.shopmy.us/p-1905342'>
                    <img src={Latte6} alt="Makeup Forever HD SKIN SCULPTING PALETTE
" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
            </div>


            <p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'95%' , marginLeft: '1em'}}>
Yellow Based Bronzer</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Unlike the typical warm, red-toned bronzers, this look calls for a yellow-based bronzer to add warmth to the skin and complement the caramel-toned eyeshadows coming up.       </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Benefit Cosmetics Hoola Caramel is a great pick if you are fair-medium in skin tone. You can rock this look no matter your complexion, but it will suit warmer coloring best. See the espresso look for cool-toned skin! (P.S. If you are confused about your color palette, see here.)           </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Apply the bronzer over the top of the subtle contouring to amp up the tanned goddess effect!           </p>


          

<p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'95%' , marginLeft: '1em'}}>
Eye Makeup: Bronzed and Smoky</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Next, add a brown liner pencil to rim the lash line and softly fade into the crease. The ColourPop lipliner I used called BFF 3 is really creamy and easy to blend for this step, plus it is lighter than most traditional eyeliners on the market, making it appear softer. Make sure you're not using the eyeliner on the lips and eyes and sanitize between uses if you do opt for a lipliner on the eyes!       </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Continue by picking a palette that has warm matte and shimmer tones like ONE/SIZE BY PATRICK STARRR | Visionary Eyeshadow Palette to deepen up the outer corner of the eye and add a bronzer shimmer to the lid to pick up the light.          </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
For the eyes, continue to use the Hoola Bronzer in Caramel into the crease and under the lash line for a soft smokey effect.

           </p>

           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0em' }}>
              <a href='https://go.shopmy.us/p-1905342'>
                    <img src={Latte7} alt="Latte Product 4" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://go.shopmy.us/p-1905347'>
                    <img src={LatteMissing} alt="Revolve" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://go.shopmy.us/p-1905349'>
                    <img src={Latte8} alt="Sephora" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
            </div>



            <p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'95%' , marginLeft: '1em'}}>
            Brows</p>


            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            Inspired by Tanielle Jai’s work, her models typically rock very bold, Brooke Shields-esque brows. Fill your brows in with natural strokes and set in place with a brow gel. I went REALLY bold, so feel free to tone the brow down to suit your preferences!         </p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
Using a liquid liner, create more drama on the lash line and use this same liner to add beauty marks or faux freckles. This is a Tanielle Jai signature step that is super fun to try out. Pop on an outer corner lash, and the eyes are complete!
            </p>


            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0em' }}>
                                <a href='https://go.shopmy.us/p-1905345'>
                    <img src={Latte9} alt="LAWLESS Shape Up Soft Fill Eyebrow Pencil" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://amzn.to/3ThV4IM'>
                    <img src={Latte10} alt="Lilybred" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://go.shopmy.us/p-1905350'>
                    <img src={Latte11} alt="Velour-Xtension Classic Lash Extension Cluster Refills" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
            </div>

            <p style={{ fontSize:'3rem', fontFamily: 'GFS Didot, serif', margin: '0', maxWidth:'95%' , marginLeft: '1em'}}>
Lips & Finishing Touches</p>


<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
For the lips, over-line them with a medium-toned caramel brown shade, and blur out again for no harsh lines. Add a lip plumper for a fuller look in a milky pink or nude shade.

</p>

<p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
The finishing touch to bring this glamorous look all together is to use a golden highlighter on the cheeks, chin, nose, and even collarbones for a radiant glow. Paired with gold jewelry and a simple white top, the makeup truly embraced the Golden Goddess aesthetic with the new trending title of “Latte Makeup.”       </p>

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0em' }}>
                    <a href='https://go.shopmy.us/p-1905348'>
                    <img src={Latte12} alt="ctrl lippie pencil" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://go.shopmy.us/p-3891780'>
                    <img src={Latte13} alt="Kopari Beauty" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
                <a href='https://amzn.to/4bVvTD5'>
                    <img src={Latte14} alt="Sephora" style={{ maxWidth: '100%', height: 'auto' }} />
                </a>
            </div>


            <p style={{ fontSize:'1.5rem', fontFamily: 'GFS Didot, serif', margin: '1rem', maxWidth:'100%' , marginLeft: '0em'}}>
            Want to be featured on my site? Submit your recreation or version of this
look here. I’d love to see you switch up your style with confidence!             </p>
<div> <img src= {Latte16} alt = 'b1' style={{width:'100%'}}></img></div>

            </div></div>
    );

    return (
        <div><div
        style = {{width:'100%', marginBottom: '2rem'}}
        ><TextReveal text='LATTÉ ANYONE?'/>
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
        <HyvorTalkComments
        websiteId={websiteId}
        pageId={"Latte-Blog-1"} // Unique identifier for this blog post
    /></div></div>
    );
};

export default LatteMakeupBlogPost;
