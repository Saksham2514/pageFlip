import { useState } from "react";
import HTMLFlipBook,{} from "react-pageflip";
import Page from "./components/Page";
import axios from "axios";

export default function MyBook(props) {
  const [data, setData] = useState([]);
  axios.get("https://brandon.co.in/api/").then((res) => setData(res.data));

  return (
    <HTMLFlipBook width={1000} height={475  }  >
      {data.map((page,ind) => (
        <div>
          <Page
            key={ind}
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
