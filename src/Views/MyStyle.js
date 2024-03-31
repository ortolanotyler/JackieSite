import React from 'react';
import ItemSlider from './Sliderz/Slider';
import TextReveal from './MeetJackie/TextReveal';
import FallWinterSlider from './Sliderz/FallWinterSlider';
import PhotoShootSlider from './Sliderz/PhotoShootSlider';
import ThreeSections from './ThreeSections';

const MyStyle = () => {
    // Base style for anchor tags
    const anchorStyle = {
        color: 'black',
        textDecoration: 'none',
        fontFamily: 'GFS Didot, serif',
    };

    // Responsive base style for sections
    const sectionStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
        backgroundColor: 'white',
        fontFamily: 'GFS Didot, serif',
        padding: '1rem',
        // Adjust font size for larger screens
        fontSize: '4rem', // Default for mobile and small devices
        '@media (min-width: 768px)': {
            fontSize: '7rem', // Tablets and medium screens
        },
        '@media (min-width: 1024px)': {
            fontSize: '9rem', // Desktops and larger screens
        },
    };

    return (
        <div style={{ backgroundColor: 'white' }}>
             <TextReveal text="SPRING/SUMMER" />
            <div style={sectionStyle}>
                
            </div>
            <ItemSlider />
            <ThreeSections 
                section1Content={<div><a href="https://go.shopmy.us/p-3491370" style={anchorStyle}>Top: LPA //</a> <br/><a href="https://go.shopmy.us/p-3491382" style={anchorStyle}>Skirt: BY.DYLN //</a><br/><a href="https://go.shopmy.us/p-3491385" style={anchorStyle}>Necklace: ALEX MONROE (similar) //</a><br/><a href="https://go.shopmy.us/p-3491400" style={anchorStyle}>Shoes: ALOHAS //</a></div>}
                section2Content={<div><a href="https://go.shopmy.us/p-3492711" style={anchorStyle}>Bathing Suit: Revolve (similar) //</a> </div>}
                section3Content={<div><a href="https://go.shopmy.us/p-3492388" style={anchorStyle}>Top: V. Chapman Studio // Majorelle (similar) //</a> <br/><a href="https://go.shopmy.us/p-3492414" style={anchorStyle}>Pants: FAVORITE DAUGHTER //</a><br/><a href="https://go.shopmy.us/p-3492437" style={anchorStyle}>Heels: Steve Madden //</a><br/><a href="https://go.shopmy.us/p-3492555" style={anchorStyle}>Purse: CHANEL //</a></div>}
            />

            <div style={sectionStyle}>
                <TextReveal text="FALL/WINTER" />
            </div>
            <FallWinterSlider />
            <ThreeSections 
                section1Content={<div><a href="https://go.shopmy.us/p-3491370" style={anchorStyle}>Top: NBD (similar) //</a> <br/><a href="https://go.shopmy.us/p-3491382" style={anchorStyle}>Pants: CITIZENS OF HUMANITY //</a></div>}
                section2Content={<div><a href="https://go.shopmy.us/p-3493722" style={anchorStyle}>Dress: LPA (Similar) //</a> <br/><a href="https://go.shopmy.us/p-3493729" style={anchorStyle}>Boots SCHUTZ (similar to belt texture) //</a><br/><a href="https://shopmy.us/collections/379891" style={anchorStyle}>BELT: Thrifted //</a></div>}
                section3Content={<div><a href="https://go.shopmy.us/p-3491370" style={anchorStyle}>Dress: Lovers and Friends //</a> <br/><a href="https://go.shopmy.us/p-3491382" style={anchorStyle}>Boots: LARROUDÉ //</a></div>}
            />

            <div style={sectionStyle}>
                <TextReveal text="PHOTOSHOOTS" />
            </div>
            <PhotoShootSlider />
            <ThreeSections 
                section1Content={<div><a href="https://go.shopmy.us/p-3493493" style={anchorStyle}>Top: H:OURS //</a> <br/><a href="https://go.shopmy.us/p-3493482" style={anchorStyle}>Earrings: Joolz (similar) //</a><br/><a href="https://go.shopmy.us/p-3493499" style={anchorStyle}>Jeans: AGOLDE (similar) //</a><br/><a href="https://go.shopmy.us/p-3493527" style={anchorStyle}>Shoes: LPA //</a></div>}
                section2Content={<div><a href="https://go.shopmy.us/p-3494143" style={anchorStyle}>Pants: Lovers and Friends //</a> <br/><a href="https://go.shopmy.us/p-3494171" style={anchorStyle}>Bodysuit: Majorelle //</a><br/><a href="https://go.shopmy.us/p-3494173" style={anchorStyle}>Heels: Steve Madden //</a><br/></div>}
                section3Content={<div><a href="https://go.shopmy.us/p-3494681" style={anchorStyle}>Sweater Dress: Majorelle //</a> <br/><a href="https://go.shopmy.us/p-3494687" style={anchorStyle}>Jacket: Thrifted, Mango (similar) //</a><br/><a href="https://go.shopmy.us/p-3494697" style={anchorStyle}>Boots: By Far //</a><br/></div>}
            />
        </div>
    );
};

export default MyStyle;
