export function formatFileList (fileList) {
  const formattedList = fileList
    .map((file) => {
      const cleanFile = file
        .split('\n')
        .filter((el, index) => index !== 0)
        .filter((el) => el.split(',').length === 4)
        .filter((el) => {
          const fileRow = el.split(',')
          return fileRow.every((el) => !!el)
        })

      if (cleanFile && cleanFile.length) {
        const formattedFile = {}
        const fileName = cleanFile[0].split(',')[0]

        formattedFile.file = fileName
        formattedFile.lines = []

        cleanFile.forEach((element) => {
          const elementRow = element.split(',')

          formattedFile.lines.push({
            text: elementRow[1],
            number: elementRow[2],
            hex: elementRow[3]
          })
        })

        return formattedFile
      } else {
        return null
      }
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aDotIndex = a.file.indexOf('.')
      const bDotIndex = b.file.indexOf('.')
      const aNumber = Number.parseInt(a.file.slice(4, aDotIndex))
      const bNumber = Number.parseInt(b.file.slice(4, bDotIndex))

      return aNumber < bNumber ? -1 : aNumber > bNumber ? 1 : 0
    })

  return formattedList
}
