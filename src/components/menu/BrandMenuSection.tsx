import type { MenuSection } from "@/lib/menu-items";
import MenuItemCard from "./MenuItemCard";

export default function BrandMenuSection({
  section,
  image,
  accentColor,
}: {
  section: MenuSection;
  image: string;
  accentColor?: string;
}) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <h2 className="font-display text-brand-red shrink-0 text-lg sm:text-xl">{section.title}</h2>
        <div className="h-px flex-1 bg-black/10" aria-hidden="true" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} image={image} accentColor={accentColor} />
        ))}
      </div>
    </section>
  );
}
