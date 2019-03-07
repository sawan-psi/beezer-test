import fire from '../firebase-config';
import { FETCH_FIRE_DATA_ACTION, LOADING } from '../constants/fireConstants';

/**
 * Action Creators
 */
export const fireDataAction = (fireData) => {
    return {
        type: FETCH_FIRE_DATA_ACTION,
        fireData
    }
}

export const isLoading = (loading) => {
    return {
        type: LOADING,
        loading
    }
}


/**
 * Actions
 */
export const fetchFireDataAction = () => {
    return (dispatch) => {
        dispatch(isLoading(true));
        fire.database().ref('/').on('value', (snapshot) => {
            dispatch(fireDataAction(snapshot.val()));
            dispatch(isLoading(false));
        });
    }
}