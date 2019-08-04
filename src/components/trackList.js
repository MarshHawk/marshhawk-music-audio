import React from 'react'
import TrackCard from './trackCard'
import {connect} from 'react-redux'

function TrackList(props) {
    console.log(props)
    return (
        <ul className="cards">
            {props.tracks.map((t, i) => <TrackCard key={i} {...{...t, ...props.audioContext}}/>)}
        </ul>
    )
}

function mapState(state) {
    return {tracks: state.tracks, audioContext: state.audioContext}
  }

export default connect(mapState)(TrackList)