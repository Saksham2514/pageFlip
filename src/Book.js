import { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "./components/Page";
import axios from "axios";

export default function MyBook(props) {
  const [data, setData] = useState([]);
  axios.get("https://brandon.co.in/api/").then((res) => setData(res.data));

  return (
    <HTMLFlipBook width={1000} height={450} showCover>
      {data.map((page) => (
        <div>
          <Page
            key={props.id}
            image={page.image}
            bg={page.bg}
            title={page.title}
          >
            {page.text}
          </Page>
        </div>
      ))}
    </HTMLFlipBook>
  );
}
