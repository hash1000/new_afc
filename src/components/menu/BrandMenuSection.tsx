import type { MenuSection } from "@/lib/menu-items";
import MenuItemCard from "./MenuItemCard";

export default function BrandMenuSection({
  section,
  image,
  comingSoon,
  imageFit,
  accentColor,
}: {
  section: MenuSection;
  image: string;
  comingSoon?: boolean;
  imageFit?: "contain" | "cover";
  accentColor?: string;
}) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <div className="flex items-center gap-3">
        <h2 className="font-display text-brand-red shrink-0 text-lg sm:text-xl">{section.title}</h2>
        <div className="h-px flex-1 bg-black/10" aria-hidden="true" />
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
        {section.items.map((item) => (
          <MenuItemCard
            key={item.id}
            item={item}
            image={image}
            comingSoon={comingSoon}
            imageFit={imageFit}
            accentColor={accentColor}
          />
        ))}
      </div>
    </section>
  );
}
