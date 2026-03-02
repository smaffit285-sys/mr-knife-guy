/**
 * Community Knives Type Definition
 * Temporary type definition until auto-generated entities are updated
 */

export interface CommunityKnives {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  itemName?: string;
  /** @wixFieldType number */
  itemPrice?: number;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  itemImage?: string;
  /** @wixFieldType text */
  itemDescription?: string;
  /** @wixFieldType text */
  knifeStyle?: string;
  /** @wixFieldType text */
  sellerName?: string;
  /** @wixFieldType text */
  sellerContact?: string;
  /** @wixFieldType boolean */
  isAvailable?: boolean;
}
