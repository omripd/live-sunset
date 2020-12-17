import React, { Component } from 'react';
import ReactHlsPlayer from 'react-hls-player';

class player extends Component {
    state = {
        url: 'https://edge08.nginx.hdontap.com/ho3/elporto_swellmagnet.stream/chunklist.m3u8'
    }

    renderLoadButton = (url, label) => {
        return (
            <button onClick={() => this.load(url)}>
                {label}
            </button>
        )
    }
    load = url => {
        this.setState({
            url
        })
    }

    render () {
        const { url } = this.state
        return (
            <div id="player1">
                <ReactHlsPlayer id='op'
                    url={url}
                    autoplay={true}
                    controls={true}
                    width={500}
                    height={375}
                />

                {this.renderLoadButton('https://edge08.nginx.hdontap.com/ho3/elporto_swellmagnet.stream/chunklist.m3u8', 'Spain')}
                {this.renderLoadButton('https://s5.ipcamlive.com/streams/055fda518ee94a6c0/stream.m3u8', 'Tel Aviv')}
            </div>
        );
    }
}

export default player;