import React from 'react';

const SongDetail = (props) =>{



return(
    <tr>
    <td>{props.chartPosition}</td>
    <td>{props.song['im:artist'].label}</td>
    <td>{props.song['im:name'].label}</td>
    </tr>
)
}







export default SongDetail;