import api from '../api';

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
