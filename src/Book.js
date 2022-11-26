import { useEffect, useState } from "react";
import HTMLFlipBook,{} from "react-pageflip";
import Page from "./components/Page";
import axios from "axios";

export default function MyBook(props) {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    
  
      axios.get("https://brandon.co.in/api/").then((res) => setData(res.data));

  
  }, [])
  

  return (
    <HTMLFlipBook width={10} height={475  } style={{padding:0,margin:0, background: "url('https://i.pinimg.com/originals/f2/d0/59/f2d059abe5b821df61fb22fd98e21d53.jpg') 0 0  no-repeat" , backgroundSize:" 100% 100% "}}  >
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
