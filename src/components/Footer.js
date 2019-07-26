import React from 'react';

function FooterComponent() {
    return (
        <footer style={footerStyle} className="footer">
        <div className="container">
          <span className="text-muted">Place sticky footer content here. TEST DEPLOY 1 2 3</span>
        </div>
      </footer>
    );
}

const footerStyle = {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '60px',
        lineHeight: '60px',
        backgroundColor: '#f5f5f5'
}

export default FooterComponent;
