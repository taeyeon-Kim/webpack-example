import moment from 'moment';

class greeter {

    constructor() {
    }

    greet() {
        const day = moment().format('dddd');
        console.log('Have a great ' + day + '!');
    };
}

export default greeter;