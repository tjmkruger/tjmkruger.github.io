
export enum ContentType { html = "html", youtube = "youtube", image = "image" }
export type Content = { type: ContentType, content: any }
export type Image = { file: string, caption?: string, alt: string }

export type Post = {
    slug: string, title: string, date: string, intro: string,
    card?: { title?: string, content?: string, image?: Image}
    featured?: boolean,
    image: Image,
    content: Content[],
    organisation: string,
    categories: string[]
}