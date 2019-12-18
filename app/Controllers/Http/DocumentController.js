'use strict'

const Helpers = use('Helpers')


const Document = use('App/Models/Image')
const Property = use('App/Models/Property')

/**
 * Resourceful controller for interacting with images
 */
class DocumentController {
    /**
     * Create/save a new image.
     * POST images
     */
    async store({ params, request }) {
        const property = await Property.findOrFail(params.id)

        const documents = request.file('image', {
            types: ['image'],
            size: '2mb'
        })

        await documents.moveAll(Helpers.tmpPath('uploads'), file => ({
            name: `${Date.now()}-${file.clientName}`
        }))

        if (!documents.movedAll()) {
            return documents.errors()
        }

        await Promise.all(
            documents
              .movedList()
              .map(image => property.documents().create({ path: image.fileName }))
        )
    }

    async show ({ params, response }) {
        return response.download(Helpers.tmpPath(`uploads/${params.path}`))
    }
}

module.exports = ImageController