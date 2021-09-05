/**
 * メンバ登録API
 *
 * endPoint: /api/members
 * method: POST
 *
 */

/**
 * リクエストの型
 *
 * json
 */
export type ApiPostMembersRequestData = {
  /** 名前 */
  name: string,
  /** 署名 */
  signature: string,
};

/** レスポンスの型 */
// なし
