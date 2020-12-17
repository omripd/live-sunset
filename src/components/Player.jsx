import React, { Component } from 'react';
import ReactHlsPlayer from 'react-hls-player';

class player extends Component {

    geURL1 = () => {
        return 'https://edge08.nginx.hdontap.com/ho3/elporto_swellmagnet.stream/chunklist.m3u8'

    }
    geURL2 = () => {
        return 'https://s5.ipcamlive.com/streams/055fda518ee94a6c0/stream.m3u8'
    }

    


    render () {
        return (
            <div id="player1">
                <ReactHlsPlayer
                    url={this.geURL1()}
                    autoplay={true}
                    controls={true}
                    width={500}
                    height={375}
                />
            </div>
        );
    }
}

export default player;