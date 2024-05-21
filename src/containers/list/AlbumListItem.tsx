"use client";

import Link from "next/link";
import Button from "@components/Button/Button";

interface Props {
  id: number;
  albumTitle: string;
  albumArt: string;
  songTitle: string;
  artist: string;
  genre: string;
}

const test = () => {
  console.log("worked");
};

export default function AlbumListItem({ id, songTitle }: Props) {
  return (
    <>
      <li>
        <Link href={`/detail/${id}`}>{songTitle}</Link>
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
