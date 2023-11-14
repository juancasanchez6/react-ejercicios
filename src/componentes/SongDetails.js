import Message from "./Message";
import SongArtist from "./SongArtist"
import SongLyric from "./SongLyric"

const SongDetails = ({search, lyric, bio}) => {

    if(!lyric || !bio) return null;
  return (
    <div>
        {}
      <h2>Detalles</h2> 
      {lyric.error || lyric.name === "AbortError" ? <Message /> : <SongLyric />}
      <SongArtist />
      <SongLyric />
    </div>
  )
}

export default SongDetails
