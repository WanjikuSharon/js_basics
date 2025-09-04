function addressMaker(address) {
    const { state, city } = address;

    const newAdress = {
        city,
        state,
        country: 'Kenya'
    };
    console.log(`${newAdress.city}, ${newAdress.state}, ${newAdress.country}`);
}
addressMaker({ city: 'Nairobi', state: 'Nairobi', country: 'Kenya' });