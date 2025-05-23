import api from '../api';
import App from '../App';

export async function getAvatars() {
  try {
    const data = await api.GET('avatars');
    return data.data || [];
  } catch (error) {
    return [];
  }
}

export async function getRoomPhotos() {
  try {
    const data = await api.GET('room-photos');
    return data.data || [];
  } catch (error) {
    return [];
  }
}

export async function getRoomByCode(code: string) {
  console.log(33333)
  try {
    const res = await api.GET(`rooms/${code}`);

    if (!res.success) {
      throw new Error();
    }
    return res.data;
  } catch (error) {
    throw Error('something went wrong');
  }
}
