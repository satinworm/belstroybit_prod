import { RoofsAdvantages } from "../components/roofs/RoofsAdvantages";
import { RoofsFormSection } from "../components/roofs/RoofsForm";
import { RoofsGallerySection } from "../components/roofs/RoofsGallaerySection";
import { RoofsMainSection } from "../components/roofs/RoofsMainsection";
import RoofsReviews from "../components/roofs/RoofsReview";
import { RoofsTypesSection } from "../components/roofs/RoofsTypesSection";

export const Roofs = () => {
	return (
		<>
			<RoofsMainSection />
			<RoofsTypesSection />
			<RoofsGallerySection />
			<RoofsAdvantages />
			<RoofsReviews />
			<RoofsFormSection />
		</>
	);
};
