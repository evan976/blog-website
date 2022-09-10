const formatComments = (comments: Array<any>) => {
  const map = new Map()

  const roots: Array<CommentWithChildren> = []

  for (let i = 0; i < comments.length; i++) {
    const commentID = comments[i].id

    map.set(commentID, i)
    ;(comments[i] as CommentWithChildren).children = []

    if (typeof comments[i]?.parentId === 'number') {
      const parentIndex = map.get(comments[i].parentId)

      ;(comments[parentIndex] as CommentWithChildren)?.children?.push(
        comments[i] as CommentWithChildren,
      )

      continue
    }

    roots.push(comments[i])
  }

  return roots
}

export default formatComments
