import Link from "next/link";
// import

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
          (
            {
              id: number,
              albumTitle: string,
              albumArt: string,
              songTitle: string,
              artist: string,
              genre: string,
            },
            index: number
          ) => {
            return (
              <li key={index}>
                <Link href="detail/id">{songTitle}</Link>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
}
