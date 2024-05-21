import AlbumListItem from "@containers/list/AlbumListItem";
import styles from "./page.module.scss";

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
      <ul className={styles["album-list"]}>
        {data.result.map((item: any, index: number) => {
          return <AlbumListItem key={index} item={item} />;
        })}
      </ul>
    </>
  );
}
