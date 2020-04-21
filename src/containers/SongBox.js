import React from 'react';
import SongList from '../components/SongList'

class SongBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            songs:[]
        }
    }

    
  componentDidMount(){
    const url ='https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({
      songs: songs.feed.entry
    }))
}


render(){

    return(
        <div>
            <h2>Top 20 Itunes UK Songs</h2>
            <SongList songs={this.state.songs} />
        </div>
    )


    }
}

export default SongBox;