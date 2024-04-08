import axios from 'axios';
import { showAlert } from './alerts';

// type is 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const endpoint = type === 'password' ? 'updateMyPassword' : 'updateMe';
    const result = await axios({
      method: 'PATCH',
      url: `/api/v1/users/${endpoint}`,
      data,
    });
    if (result.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
      window.setTimeout(() => {
        location.reload();
      }, 1500);
    }
  } catch (error) {
    console.log(error);
    showAlert('error', error.response.data.message);
  }
};
