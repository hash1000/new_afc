import type { MenuSection } from "@/lib/menu-items";
import MenuItemCard from "./MenuItemCard";

export default function BrandMenuSection({
  section,
  image,
}: {
  section: MenuSection;
  image: string;
}) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <h2 className="font-display text-brand-red text-lg sm:text-xl">{section.title}</h2>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {section.items.map((item) => (
          <MenuItemCard key={item.id} item={item} image={image} />
        ))}
      </div>
    </section>
  );
}
