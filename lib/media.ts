import { getStrapiURL } from './api'

/**
 * Get media url
 * @param {Obeject} media Media data object
 * @returns media url
 */
export function getStrapiMedia(media: any) {
  const { url } = media.data.attributes
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url
  return imageUrl
}