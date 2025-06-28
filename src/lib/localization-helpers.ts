import contacts from "@/content/global/contacts.json";
import footerEn from "@/content/global/en/footer.json";
import headerEn from "@/content/global/en/header.json";
import seoEn from "@/content/global/en/seo.json";
import style from "@/content/global/style.json";
import widget from "@/content/global/widget.json";
import { defaultLocale } from "site.config";

const settings: Record<string, LocalizedSettings> = {
	en: {
		header: headerEn,
		footer: footerEn,
		contacts: contacts,
		seo: seoEn,
		style: style,
		widget: widget,
	},
};

export function getLocalizedSettings(locale?: string): LocalizedSettings {
	return settings[locale ?? defaultLocale] ?? settings[defaultLocale];
}

export function isLocalizedUrl(url: string): boolean {
	// Since we only have English, no localized URLs
	return false;
}

export function unlocalizedUrl(url: string): string {
	// Since we only have English, return the URL as is
	return url;
}

export function translatePath(l: string, path: string) {
	// Since we only have English, return the path as is
	return path;
}
