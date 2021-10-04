import * as express from 'express';
import * as admin from 'firebase-admin';

export const deleteMembers = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  try {
    const { memberId } = req.params;
    await admin.firestore().collection('members').doc(memberId).delete();
    res.status(200);
    res.send({ message: 'success' });
  } catch (e) {
    res.status(400);
    res.send({ message: e || 'error' });
  }
};
