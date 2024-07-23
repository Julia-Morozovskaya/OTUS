import { nameIsValid } from "../src/app";
import { fullTrim } from "../src/app";
import { getTotal } from "../src/app";
import { expect } from '@jest/globals'

describe("Тесты на проверку имени", () => {
    test("Имя валидное", () => {
        const name = "jul"
        expect(nameIsValid(name)).toBe(true);
    });
    test("name = number", () => {
        const name = 123
        expect(nameIsValid(name)).toBe(false);
    })
    test("Имя невалидное", () => {
        const name = "JUL"
        expect(nameIsValid(name)).toBe(false);
    })
});

describe("Тесты на пробелы", () => {
    test("Строка с пробелом", () => {
        const text = "OTUS otus";
        const fullText = fullTrim(text);
        expect(fullText).toBe("OTUSotus");
    });
    test("string + number", () => {
        const text = "otus" + 123;
        const fullText = fullTrim(text);
        expect(fullText).toBe("otus123")
    })
    test("number + ''", () => {
        const text = 123 + "  ";
        const fullText = fullTrim(text);
        expect(fullText).toBe("123")
    })
});

describe("Подсчет суммы заказа", () => {
    test("Один параметризированный тест", () => {
    const one = [{
        price: 10,
        quantity: 2
    }]; 
    const two = [{
        price: 200,
        quantity: 30
    }]; 
    const three = [{
        price: 100,
        quantity: 4
    }];
    const items = [ one, two, three];
    const discount = [ 0, 5, -5, 120, "один" ];

   for (let i of discount) {
       for( let y of items) {
        if(typeof i !== "number" || i < 0 || i >= 100){
            expect(() => getTotal(y, i)).toThrow()
        } else {
            getTotal(y, i)
            console.log(getTotal(y, i))
        }
       }
    } 
})
})
