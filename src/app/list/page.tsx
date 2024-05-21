import AlbumListItem from "@containers/list/AlbumListItem";

interface Props {
  id: number;
  albumTitle: string;
  albumArt: string;
  songTitle: string;
  artist: string;
  genre: string;
}

async function getRecordData() {
  const response = await fetch("http://localhost:3000/data/recordData.json");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Page() {
  const data = await getRecordData();

  return (
    <>
      <ul>
        {data.result.map(
          ({ id, albumTitle, albumArt, songTitle, artist, genre }: Props) => {
            return (
              <AlbumListItem
                key={id}
                id={id}
                albumTitle={albumTitle}
                albumArt={albumArt}
                songTitle={songTitle}
                artist={artist}
                genre={genre}
              />
            );
          }
        )}
      </ul>
    </>
  );
}
