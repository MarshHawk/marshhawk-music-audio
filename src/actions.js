export function play(trackId, track) {
    return {
        type: "PLAY",
        payload: {id:trackId, track: track}
    }
}

export function pause(trackId) {
    return {
        type: "PAUSE",
        payload: {id:trackId}
    }
}