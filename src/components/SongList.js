import React from 'react';
import SongDetail from './SongDetail'
import './SongList.css'

const SongList = (props) => {
    const options = props.songs.map((song,index)=> {
        return <SongDetail song={song} key={song.id.attributes['im:id']} chartPosition={index+1} />
    })

    return(
       <table class="highlist">
        <th>Position</th>
        <th>Artist</th>
        <th>Song Title</th>
        {options}
       </table>
    );
}




export default SongList;