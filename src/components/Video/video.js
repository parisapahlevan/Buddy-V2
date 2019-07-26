import React from "react";
import ReactPlayer from 'react-player';


class VideoComponent extends React.Component {
    render () {
      return (
      <div>
        <ReactPlayer
          url='https://firebasestorage.googleapis.com/v0/b/paw-media.appspot.com/o/video%2FIMG_4894.mov?alt=media&token=afa4fa87-5ac8-4d55-9357-49a41177fb71'
          className='react-player'
          playing= {true}
          controls= {true}
          loop= {true}
          volume = '0'
          muted = {true}
        />
      </div>
      );
    }
}
export default VideoComponent;