import React from 'react';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WeExcel from './Views/viewComponents/WeExcel/WeExcel';

const Footer = () => {
    return (
        <div>
            <WeExcel />
            <footer style={{ 
                backgroundColor: '#EBE8E4', 
                color: '#745B4F', 
                textAlign: 'center',
                padding: '40px 20px' }}>
                
                <div style={{ color: '#745B4F', fontSize: '40px', marginBottom: '20px' }}>
                    <a href="https://youtube.com/@JackieWyers?si=sklULUqnNkzkmiaY" alt='Jackie Wyers Youtube Link' target="_blank" rel="noopener noreferrer">
                        <YouTubeIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                    <a href="https://www.instagram.com/jackiewyers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" alt='Jackie Wyers Instagram Link' target="_blank" rel="noopener noreferrer">
                        <InstagramIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                    <a href="https://pin.it/27OmCVDye"alt='Jackie Wyers Pinterest Link' target="_blank" rel="noopener noreferrer">
                        <PinterestIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                    <a href="mailto:jackietwyers@gmail.com">
                        <MailOutlineIcon style={{ color: '#745B4F', fontSize: 70 }} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
