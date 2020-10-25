import app from '../../firebase';

const addUrl = async (url) => {
    const result = await app.firestore().collection('apis').where('url', '==', url).get();
    if (result.size > 0) {
        return result.docs[0].id;
    }
    const { id } = await app.firestore().collection('apis').add({
        uid: app.auth().currentUser.uid,
        url,
    });
    return id;
};

export default addUrl;