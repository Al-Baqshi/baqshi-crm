import contacts from "@/content/global/contacts.json";
import footer from "@/content/global/en/footer.json";
import header from "@/content/global/en/header.json";
import seo from "@/content/global/en/seo.json";
import style from "@/content/global/style.json";
import widget from "@/content/global/widget.json";

const settings: LocalizedSettings = {
	header: header,
	footer: footer,
	contacts: contacts,
	seo: seo,
	style: style,
	widget: widget,
};

export function getLocalizedSettings(locale?: string): LocalizedSettings {
	return settings;
}

export function isLocalizedUrl(url: string): boolean {
	// No localized URLs
	return false;
}

export function unlocalizedUrl(url: string): string {
	// Return the URL as is
	return url;
}

export function translatePath(l: string, path: string) {
	// Return the path as is
	return path;
}
