const {kafka} = require('./client');
const group =  process.argv[2];

async function init(){
   const consumer = kafka.consumer({groupId: "user-1"});
    await consumer.connect();
    await consumer.subscribe({ topics: ['rider-updates'],fromBeginning: true })

    console.log("smds")

    await consumer.run({
        eachMessage: async ({ topic, partition, message, heartbeat, pause }) => {
            console.log("smds")
            console.log({
                key: message.key.toString(),
                value: message.value.toString(),
                headers: message.headers,
                topic: topic,
                partition: partition,
                group: group
            })
        },
    })
}

init();
