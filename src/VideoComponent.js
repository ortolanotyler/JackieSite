import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import vlogvideo from "./vlogvideo.mp4";

function VlogVideo() {
    return (
        <Link to="/vlogs">
            <div style={{ width: '100%', position: 'relative', paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
                <video 
                    style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '90%'
                    }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    title="Video Title"
                >
                    <source src={vlogvideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </Link>
    );
}

export default VlogVideo;
