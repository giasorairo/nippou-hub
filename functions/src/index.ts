import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import * as cors from 'cors';
import {
  deleteMembers,
  getMembers,
  postMembers,
  putMembers,
} from './controller/members';

const app = express();
// cors対策
app.use(cors({ origin: true }));
// リクエストデータ取得のためのパーサ登録
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// firebase-admin初期化
admin.initializeApp();

// メンバー
app.get('/members', getMembers);
app.post('/members', postMembers);
app.put('/members/:memberId', putMembers);
app.delete('/members/:memberId', deleteMembers);

// 出力
const api = functions.https.onRequest(app);
module.exports = { api };
