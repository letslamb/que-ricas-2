import story from './../../../markdowns/story/*.md'

export const aboutPage = story
  .map(({ metadata, html }) => {
    if (metadata.image) {
      metadata.image = metadata.image.replace('.', 'https://www.que-ricas.com/g')
    }
    return ({ ...metadata, html })
  })

