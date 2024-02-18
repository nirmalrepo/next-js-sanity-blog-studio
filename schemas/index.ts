import donationAmountType from './atoms/donationAmountType'
import formCustomFieldType from './atoms/formCustomFieldType'
import formAskBlurbType from './atoms/formAskBlurbType'
import contentBlockType from './atoms/contentBlockType'
import sectionHero from './organisms/sectionHero'
import sectionContent from './organisms/sectionContent'
import sectionForm from './organisms/sectionForm'
import blockContent from './blockContent'
import category from './category'
import post from './templates/post'
import author from './author'

export const schemaTypes = [
  post,
  author,
  category,
  blockContent,
  sectionHero,
  sectionContent,
  sectionForm,
  donationAmountType,
  formCustomFieldType,
  formAskBlurbType,
  contentBlockType,
]
