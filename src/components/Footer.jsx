import React from 'react';
import { Heart } from 'lucide-react';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>@ 2024 TMinus HealthCare. All rights reserved.</p>
                <p>Made with <Heart size={16} className="inline" /> for better healthcare by Tminus</p>
            </div>
        </footer>
    )
}

export default Footer;