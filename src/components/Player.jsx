import React from 'react';
import ReactHlsPlayer from 'react-hls-player';

const player = (props) => {
    return (
        <ReactHlsPlayer
            url='https://s5.ipcamlive.com/streams/055fda518ee94a6c0/stream.m3u8'
            autoplay={false}
            controls={true}
            width={500}
            height={375}
        />
    );
}

export default player;