import * as express from 'express';
import * as admin from 'firebase-admin';
import { ApiPutMembersRequestData } from '../../types/api/members';

export const putMembers = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    // URLからメンバIDを取得
    const { memberId } = req.params;
    // リクエストデータ取得
    const requestData: ApiPutMembersRequestData = req.body;
    // バリデーションチェック
    if (!requestData?.name
      || !requestData?.signature) {
      throw new Error('バリデーションエラー');
    }
    // メンバ更新処理
    await admin
      .firestore()
      .collection('members')
      .doc(memberId)
      .update({ ...requestData });
    // レスポンス
    res.status(200);
    res.send();
  } catch (e) {
    res.status(400);
    res.send({ message: e || 'エラー' });
  }
};
