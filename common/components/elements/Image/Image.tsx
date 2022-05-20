import { getStrapiMedia } from '../../../../lib/media'
import NextImage from 'next/image'

const Image = ({ image }: any) => {
  const { alternativeText, width, height } = image?.data?.attributes;

  const myLoader = () => getStrapiMedia(image)

  return (
    <NextImage
      loader={myLoader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  )
}

export default Image