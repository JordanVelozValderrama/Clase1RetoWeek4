const isKayoSick = false;

const willIGetMoreCake = new Promise(
    (resolve, reject) => {
        if(!isKayoSick) {
            const cake = {
                pasteles: 2
            };
            resolve(cake);
        } else {
            const reason = new Error('Kayo is sick, there will be no more cakes. But the party will be fun.');
            reject(reason);
        }
    }
);

async function askKayo() {
    try{
        console.log('before asking Kayo');
        let cake = await willIGetMoreCake;
        console.log(cake);
        console.log('after asking Kayo');
    } catch(error) {
        console.log(error.message);
    }
}

(async () => {
    await askKayo();
})();