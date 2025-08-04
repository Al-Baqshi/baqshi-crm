import { type ContentEntryMap, getCollection } from "astro:content";

export async function getCollectionStaticPaths<CollectionName extends keyof ContentEntryMap>(
	collectionName: CollectionName,
): Promise<PathParams<CollectionName>[]> {
	const collection = await getCollection(collectionName);

	const visibleItems = collection.filter((item) => {
		return !item.data.hidden;
	});

	const paths = visibleItems.map((item) => {
		// Remove the locale prefix (en/) from the slug
		const slugParts = item.slug.split("/");
		const localizedSlug = slugParts.slice(1); // Remove the first part (en)

		let finalSlug = localizedSlug;

		if (collectionName === "pages") {
			// For pages handle homepage slug
			finalSlug = localizedSlug[0] === "homepage" || localizedSlug[0] === "index" ? [] : localizedSlug;
		}

		return {
			params: {
				slug: finalSlug.join("/") || undefined,
			},
			props: {
				data: item,
			},
		};
	});

	return paths;
}
