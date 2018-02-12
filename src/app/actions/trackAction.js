export function setTrack(nameSong) {
  return {
    type: "ADD_TRACK",
    payload: nameSong
  }
}
export function filterList(list) {
  return {
    type: "FILTER_LIST",
    payload: list
  }
}
export function deleteTrack(track) {
  return {
    type: "DELETE_TRACK",
    payload: track
  }
}
