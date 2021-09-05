import * as express from 'express';
import * as admin from 'firebase-admin';
import { v4 as uuid } from 'uuid';
import { ApiPostMembersRequestData } from '../../types/api/members';

export const postMembers = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    // リクエストされたデータを取得
    const requestData: ApiPostMembersRequestData = req.body;
    // メンバid作成
    const memberId = uuid();
    // バリデーションチェック
    if (!requestData?.name
      || !requestData?.signature) {
      throw new Error('バリデーションエラー');
    }
    // メンバ登録
    await admin
      .firestore()
      .collection('members')
      .doc(memberId)
      .set({ id: memberId, ...requestData });
    // レスポンス
    res.status(200);
    res.send();
  } catch (e) {
    res.status(400);
    res.send({ message: 'error' });
  }
};
