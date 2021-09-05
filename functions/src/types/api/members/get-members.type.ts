/**
 * メンバ一覧取得API
 *
 * endPoint: /api/members
 * method: GET
 */

/** リクエストの型 */
// なし

/** レスポンスの型 */
export type ApiGetMembersResponseDataEntity = MemberDataEntity[];

export type MemberDataEntity = {
  id: string,
  /** 名前 */
  name: string,
  /** 署名 */
  signature: string,
};
