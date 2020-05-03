import LocalStorageService from './LocalStorageService';
import UtilService from './UtilService';

export default {
    query,
    add,
    remove,
    update,
    getById
}

const TICKET_KEY = 'ticket'

async function query() {
    try {
        const tickets = LocalStorageService.load(TICKET_KEY);
        if (!tickets) {
            LocalStorageService.save(TICKET_KEY, demoTicketsList)
            return demoTicketsList
        }
        return tickets;
    } catch (err) {
        throw err;
    }
}

async function add(ticket) {
    try {
        let tickets = LocalStorageService.load(TICKET_KEY) || [];
        ticket._id = UtilService.makeId()
        tickets.unshift(ticket)
        LocalStorageService.save(TICKET_KEY, tickets);
        return ticket;
    } catch (err) {
        throw err;
    }
}

async function remove(id) {
    try {
        let tickets = LocalStorageService.load(TICKET_KEY);
        const updatedTicketsList = tickets.filter( ticket => ticket._id !== id )
        LocalStorageService.save(TICKET_KEY, updatedTicketsList);
    } catch (err) {
        throw err;
    }
}

async function update(ticket) {
    try {
        let tickets = LocalStorageService.load(TICKET_KEY);
        const idx = tickets.findIndex( currTicket => {
            return ticket._id === currTicket._id 
        });
        tickets.splice(idx, 1, ticket);
        LocalStorageService.save(TICKET_KEY, tickets);
    } catch (err) {
        throw err;
    }
}

async function getById(id) {
    try {
        const tickets = LocalStorageService.load(TICKET_KEY);
        return tickets.find( ticket => ticket._id === id);
    } catch (err) {
        throw err;
    }
}


const demoTicketsList = [
    {
        "_id":"Dm1xGeGGrv",
        "createdAt":1581869891925,
        "dueDate":1581869891455,
        "subject":"Learn To Swim",
        "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
    },{
        "_id":"ltc9EiTA6H",
        "createdAt":1581854391912,
        "dueDate":1581854334912,
        "subject":"De Finibus Bonorum et Malorum",
        "body":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatu"
    },{
        "_id":"vHwvtL2Rlw",
        "createdAt":1581854383403,
        "dueDate":0,
        "subject":"Sem et tortor consequat",
        "body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },{
        "_id":"L8VNCR5A6F"
        ,"createdAt":1581854372403
        ,"dueDate":1581854391212
        ,"subject":"Enim ut tellus elementum"
        ,"body":"Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. In egestas erat imperdiet sed euismod nisi porta lorem. Dui vivamus arcu felis bibendum. Sem et tortor consequat id porta nibh venenatis cras sed. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Sociis natoque penatibus et magnis dis parturient montes nascetur. Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla. Nunc sed augue lacus viverra. At lectus urna duis convallis convallis tellus id interdum velit. Dui nunc mattis enim ut tellus elementum sagittis vitae."
    },{
        "_id":"T8z4oplfmx",
        "createdAt":1581854360844,
        "dueDate":1581854365844,
        "subject":"Tempus quam pellentesque",
        "body":"Vitae proin sagittis nisl rhoncus mattis. Pretium viverra suspendisse potenti nullam ac tortor vitae. Aliquet lectus proin nibh nisl condimentum id venenatis a. Tortor id aliquet lectus proin nibh nisl condimentum. Tempus quam pellentesque nec nam aliquam sem"
    },{
        "_id":"RWMCSpGtLe",
        "createdAt":1581854355409,
        "dueDate":0,
        "subject":"Convallis convallis!",
        "body":"Tristique risus nec feugiat in. Vitae proin sagittis nisl rhoncus mattis. Pretium viverra suspendisse potenti nullam ac tortor vitae. Aliquet lectus proin nibh nisl condimentum id venenatis a. Tortor id aliquet lectus proin nibh nisl condimentum. Tempus quam pellentesque nec nam aliquam sem et. Quis auctor elit sed vulputate mi sit. Viverra orci sagittis eu volutpat odio facilisis mauris sit."
    },{
        "_id":"9ibwY9exkj",
        "createdAt":1581854348641,
        "dueDate":0,
        "subject":"Nulla aliquet enim tortor",
        "body":"Nulla aliquet enim tortor at auctor urna. Justo nec ultrices dui sapien eget. Posuere ac ut consequat semper viverra nam. Nisi quis eleifend quam adipiscing vitae proin. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Egestas congue quisque egestas diam in arcu cursus."
    },{
        "_id":"qNSzOdyV9v",
        "createdAt":1581839790647,
        "dueDate":"1992-01-02",
        "subject":"Neque viverra justo",
        "body":"Neque viverra justo nec ultrices dui sapien eget mi. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget. Magna ac placerat vestibulum lectus mauris ultrices eros in. Vel facilisis volutpat est velit egestas dui id ornare arcu. "
    },{
        "_id":"Mghstd35yR",
        "createdAt":1581792370871,
        "dueDate":0,
        "subject":"Tortor dignissim convallis",
        "body":" Sed libero enim sed faucibus. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Euismod nisi porta lorem mollis aliquam ut porttitor. Non consectetur a erat nam at lectus urna duis."
    },{
        "_id":"qM0qFyhLaw",
        "createdAt":1581791155274,
        "dueDate":0,
        "subject":"Non consectetur a erat",
        "body":"Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Viverra justo nec ultrices dui sapien eget mi proin. Suspendisse sed nisi lacus sed viverra tellus in. "
    },{
        "_id":"mQGAtdPB8n",
        "createdAt":1581784710682,
        "dueDate":"",
        "subject":"Aliquam malesuada bibendum",
        "body":"Aliquam malesuada bibendum arcu vitae elementum curabitur. Viverra justo nec ultrices dui sapien eget mi proin. Suspendisse sed nisi lacus sed viverra tellus in. !"
    },{
        "_id":"ZBWecfVrEC",
        "createdAt":1581784699958,
        "dueDate":"",
        "subject":"Morbi non arcu risus quis varius",
        "body":"Mus mauris vitae ultricies leo integer malesuada nunc vel. Vitae congue eu consequat ac felis. Tortor at risus viverra adipiscing at. Quam quisque id diam vel quam. In fermentum posuere urna nec tincidunt praesent semper!"
    }
]