import Rx from 'rxjs';
const fps = 1,
    interval = 1000/fps;
export default Rx.Observable.interval(interval).timeInterval();
