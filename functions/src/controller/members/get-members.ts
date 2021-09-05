import * as express from 'express';
import * as admin from 'firebase-admin';

export const getMembers = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const snapshot = await admin.firestore().collection('members').get();
    if (snapshot.empty) {
      res.status(200);
      res.send([]);
      return;
    }
    const members = snapshot.docs.map((doc) => {
      const data = doc.data();
      return data;
    });
    res.status(200);
    res.send(members);
  } catch (e) {
    res.status(400);
    res.send({ message: 'error' });
  }
};
