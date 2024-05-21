"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@components/Button/Button";
import styles from "./AlbumListItem.module.scss";

interface Props {
  item: {
    id: number;
    albumTitle: string;
    albumArt: string;
    songTitle: string;
    artist: string;
    genre: string;
  };
}

const test = () => {
  console.log("worked");
};

export default function AlbumListItem({ item }: Props) {
  const { id, albumTitle, albumArt, songTitle, artist, genre } = item;

  return (
    <>
      <li className={styles["album-list-item"]}>
        <Link href={`/detail/${id}`} aria-label={songTitle}>
          <span className={styles["album-art"]}>
            <Image src={albumArt} alt={`${albumTitle} 앨범 아트`} fill={true} />
          </span>
          <span>{songTitle}</span>
        </Link>

        <Button
          type="button"
          color="secondary"
          size="large"
          content="secondary button"
          isDisabled={false}
          onClick={test}
        />
      </li>
    </>
  );
}
