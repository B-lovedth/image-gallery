import { useState, useEffect } from "react";
import { createClient } from "pexels";
import { useAuthContext } from "../Context/AuthContext";
import { Image } from "./Image";
import SkeletonLoader from "./SkeletonLoader";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { arrayMove, SortableContext, rectSortingStrategy } from "@dnd-kit/sortable";
import { GridBox } from "./StyledComponents";
const Search = () => {
  const client = createClient(import.meta.env.VITE_PEXELS_API_KEY);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { query } = useAuthContext();
  const getImages = async (query) => {
    try {
      setLoading(true);
      const data = await client.photos.search({ query, per_page: 16 });
      setImages(data.photos);
      console.log(data.photos);
      localStorage.setItem("images", JSON.stringify(data.photos));
      console.log(data);
    } catch (error) {
      setError(`${error.message}, Check your network`);
      console.log(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    getImages(query);
  }, [query]);
  const handleDragEnd = (event) => {
    console.log("Drag and called")
    const {active,over} = event
    if(active.id !== over.id){
        const oldIndex = images.findIndex((image)=>image.id === active.id)
        const newIndex = images.findIndex((image)=>image.id === over.id)
        const newImages = arrayMove(images,oldIndex,newIndex)
        setImages(newImages)
    }
  }

  if (loading) return <SkeletonLoader />;

  if(error) return <h1 style={{fontSize:"3rem",textAlign:"center",margin:"5rem 0"}}>{error}</h1>
  if(!images.length) return <h1 style={{fontSize:"3rem",textAlign:"center",margin:"5rem 0"}}>No Images Found</h1>
  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} grid={{ rowGap: 10, columnGap: 10 }}>
    <GridBox>
      <SortableContext
        items={images.map((image) => image.id)}
        strategy={rectSortingStrategy}
      >
        {images && images.map((image, key) => {
          const imgProps = {
            id: image.id,
            alt: image.alt,
            src: image.src.medium,
            photographer: image.photographer,
            photographer_url: image.photographer_url,
          };
          return <Image {...imgProps} key={key} />;
        })}
      </SortableContext>
    </GridBox>
    </DndContext>
  );
};


export default Search;
