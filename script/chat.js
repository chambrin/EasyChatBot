// crée la conversation
const chat = {
    1: {
        text: 'bonjour !',
        options: [
            {
                text: "<strong>Bonjour !</strong>",
                next: 2
            },
            {
                text: "<strong>Hello !</strong>",
                next: 3
            }
        ]
    },
    2 : {
        text: 'france !',
    },
    3: {
        text: 'pas france',
    },
};