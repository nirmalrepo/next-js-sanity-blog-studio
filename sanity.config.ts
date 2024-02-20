import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {presentationTool} from 'sanity/presentation'
import {locate} from './plugins/presentation/locate'
export default defineConfig({
  name: 'default',
  title: 'GPAo Studio',
  projectId: 'j4vfx2it',
  dataset: 'production',

  plugins: [
    structureTool(),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: 'http://localhost:3001/api/draft',
        },
      },
      title: 'Preview',
      locate,
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
