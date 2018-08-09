function pad2(number) {
    return ( number < 10 ? '0' : '') + number;
}

function formatDateToInput(date) {
    const formatedDay = pad2(date.getDate());
    const formatedMonth = pad2(date.getMonth()+1);
    return `${date.getFullYear()}-${formatedMonth}-${formatedDay}`;
}

export function getDefaulFormValue() {
    return {
       firstName: '',
       lastName: '',
       surname: '',
       gender: 'm',
       age: 18,
       prefer: 'bike',
       date: formatDateToInput(new Date()),
       country: 'USA',
       policy: true,
       multiSelect: [],
       rating: 3,
       happiness: 50,
       about: '',
    };
}