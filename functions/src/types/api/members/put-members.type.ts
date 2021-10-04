/**
 * メンバ更新API
 *
 * endPoint: /api/members/{:memberId}
 * method: PUT
 *
 */

/**
 * リクエストの型
 *
 * json
 */
export type ApiPutMembersRequestData = {
  /** 名前 */
  name: string,
  /** 署名 */
  signature: string,
};

/** レスポンスの型 */
export type ApiPutMembersEntity = {
  message: string,
};
