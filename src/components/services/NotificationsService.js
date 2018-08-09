import { delay } from 'redux-saga';

export default {
    async GetNotifications() {
        console.warn("Real NOTIFICATION SERVICE! REALLY CONTACTING APIS!");
        await delay(1000);
        return { count:42 };
    }
}