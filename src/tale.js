export const kolobok = (name) => {
    switch(name) {
        case "дедушка":
            console.log("Я от дедушки ушел");
            break;
        case "лиса":
            console.log("Меня съели");
            break;
        default: 
        console.log("Упс! Попробуй что-нибудь другое")
    }
}

export const newYear = (name) => {
    const santa = "Дед Мороз"
    const snowMaiden = "Снегурочка"
    if(name === santa){
        console.log(`${santa}! ${santa}! ${santa}!`)
    } else if (name === snowMaiden) {
        console.log(`${snowMaiden}! ${snowMaiden}! ${snowMaiden}!`)
    } else {
        console.log("Ой, а таких я не знаю..")
    }
}