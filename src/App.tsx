import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import Header from "./components/Header";
import Footer from "./components/Footer";
const API_KEY = import.meta.env.VITE_API_KEY;

// Put your API key here
builder.init(API_KEY);

// set whether you're using the Visual Editor,
// whether there are changes,
// and render the content if found
export default function CatchAllRoute() {
  const isPreviewingInBuilder = useIsPreviewing();
  const [notFound, setNotFound] = useState(false);
  const [content, setContent] = useState(null);

  // get the page content from Builder
  useEffect(() => {
    async function fetchContent() {
      const content = await builder
        .get("page", {
          url: window.location.pathname,
        })
        .promise();

      setContent(content);
      setNotFound(!content);

      // if the page title is found,
      // set the document title
      if (content?.data.title) {
        document.title = content.data.title;
      }
    }
    fetchContent();
  }, [window.location.pathname]);

  // If no page is found, return
  // a 404 page from your code.
  // The following hypothetical
  // <FourOhFour> is placeholder.
  if (notFound && !isPreviewingInBuilder) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <main className="p-4">
        <BuilderComponent model="page" content={content} />
      </main>
    </>
  );
}
