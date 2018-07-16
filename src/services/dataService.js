import { endpoints } from '../constants/endpoints';
import { User } from '../entities/User';
import moment from 'moment';

export const fetchData = () => {
    return fetch(endpoints.url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            setToLocalStorage(data);
            return data.results.map((user) => {
                const { gender, name, email, picture, dob } = user;
                return new User(name, gender, picture, email, dob.date);
            })
        })
}

const setToLocalStorage = (fetchedData) => {
    localStorage.setItem('lastUpdated', new Date());
    localStorage.setItem('storageData', JSON.stringify(fetchedData));
}

export const lastUpdate = () => {
    const updateDate = localStorage.getItem('lastUpdated') || new Date();
    return moment(updateDate).fromNow();
}
