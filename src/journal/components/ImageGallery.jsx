import { memo } from "react";
import { ImageList, ImageListItem } from "@mui/material";


export const ImageGallery = memo(({photos}) => {


  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
      {photos?.map((photo) => (
        <ImageListItem key={photo}>
          <img
            src={`${photo}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${photo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
})