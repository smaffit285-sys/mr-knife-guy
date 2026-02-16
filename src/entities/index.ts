/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: Bookings
 * Interface for Bookings
 */
export interface Bookings {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType text */
  service?: string;
  /** @wixFieldType number */
  quantity?: number;
  /** @wixFieldType text */
  zipCode?: string;
  /** @wixFieldType number */
  totalPrice?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
}


/**
 * Collection ID: Services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  basePrice?: number;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  image?: string;
}


/**
 * Collection ID: blogposts
 * Interface for BlogPosts
 */
export interface BlogPosts {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  title?: string;
  /** @wixFieldType text */
  slug?: string;
  /** @wixFieldType text */
  author?: string;
  /** @wixFieldType date */
  publishDate?: Date | string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  featuredImage?: string;
  /** @wixFieldType text */
  content?: string;
  /** @wixFieldType text */
  excerpt?: string;
  /** @wixFieldType text */
  seoTitle?: string;
  /** @wixFieldType text */
  seoDescription?: string;
}


/**
 * Collection ID: customertestimonials
 * Interface for CustomerTestimonials
 */
export interface CustomerTestimonials {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  customerName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  customerPhoto?: string;
  /** @wixFieldType number */
  starRating?: number;
  /** @wixFieldType text */
  quote?: string;
  /** @wixFieldType date */
  submissionDate?: Date | string;
  /** @wixFieldType text */
  sourcePlatform?: string;
  /** @wixFieldType boolean */
  isFeatured?: boolean;
}


/**
 * Collection ID: educationalresources
 * Interface for EducationalResources
 */
export interface EducationalResources {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  resourceTitle?: string;
  /** @wixFieldType text */
  resourceDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  thumbnailImage?: string;
  /** @wixFieldType url */
  downloadUrl?: string;
  /** @wixFieldType boolean */
  isLeadMagnet?: boolean;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType text */
  resourceType?: string;
}


/**
 * Collection ID: faqs
 * Interface for FrequentlyAskedQuestions
 */
export interface FrequentlyAskedQuestions {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  question?: string;
  /** @wixFieldType text */
  answer?: string;
  /** @wixFieldType text */
  category?: string;
  /** @wixFieldType number */
  displayOrder?: number;
  /** @wixFieldType boolean */
  isPublished?: boolean;
}


/**
 * Collection ID: knifecatalog
 * Interface for KnifeCatalog
 */
export interface KnifeCatalog {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  productName?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  productImage?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  longDescription?: string;
  /** @wixFieldType number */
  price?: number;
  /** @wixFieldType text */
  productType?: string;
  /** @wixFieldType boolean */
  inStock?: boolean;
  /** @wixFieldType url */
  consultationLink?: string;
}


/**
 * Collection ID: pastgiveawaywinners
 * Interface for PastGiveawayWinners
 */
export interface PastGiveawayWinners {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  winnerName?: string;
  /** @wixFieldType text */
  prizeWon?: string;
  /** @wixFieldType date */
  dateWon?: Date | string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  winnerPhoto?: string;
  /** @wixFieldType text */
  winnerQuote?: string;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType text */
  benefits?: string;
  /** @wixFieldType text */
  pricingInformation?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
}
