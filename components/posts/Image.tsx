import { Image as CloudinaryImage, Transformation } from "cloudinary-react";

export type ImageParamsType = { file: string; caption?: string; alt: string };

export const Image = ({ file, caption, alt }: ImageParamsType) => {
  return (
    <figure className="">
      <div className="">
        <CloudinaryImage publicId={file} alt={alt} className="w-full">
          <Transformation fetchFormat="auto" />
          <Transformation quality="80" />
          <Transformation crop="limit" width="1280" />
        </CloudinaryImage>
      </div>
      <figcaption className="whitespace-nowrap text-xs py-4">
        {caption || alt}
      </figcaption>
    </figure>
  );
};
