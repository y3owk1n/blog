declare module "extract-mdx-metadata" {
    export default function extractMdxMeta<T>(content: string): Promise<T>;
}
