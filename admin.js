
const {kafka} = require('./client')
async function init(){
    const admin = kafka.admin();
    console.log("Admin connecting");
    admin.connect();
    console.log("Admin Connection Success");
    console.log("Creating topics for rider updates");
    await admin.createTopics({
        topics: [{
         topic: 'rider-update',
         numberParitions: 2,
        }]
     })
     console.log("Creating topics-->")
     await admin.disconnect();
}

init();

