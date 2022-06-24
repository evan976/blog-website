import request from '../service'

export const ARTICLE_API_PATH = '/posts'

type LikeType = {
  type: 'like' | 'dislike'
}

class ArticleService {
  findAll(data: Record<string, string | number>) {
    return request<Record<string, string | number>, PaginateResult<IArticle>>({
      url: ARTICLE_API_PATH,
      method: 'GET',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findById(id: string) {
    return request<string, IArticle>({
      url: `${ARTICLE_API_PATH}/${id}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findByCategoryId(id: string) {
    return request<string, PaginateResult<IArticle>>({
      url: `${ARTICLE_API_PATH}/category/${id}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  findByTagId(id: string) {
    return request<string, PaginateResult<IArticle>>({
      url: `${ARTICLE_API_PATH}/tag/${id}`,
      method: 'GET',
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }

  updateLikes(id: string, data: LikeType) {
    return request<LikeType, IArticle>({
      url: `${ARTICLE_API_PATH}/${id}/like`,
      method: 'PATCH',
      data,
      interceptors: {
        responseInterceptor: (res) => res
      }
    })
  }
}

export default new ArticleService()