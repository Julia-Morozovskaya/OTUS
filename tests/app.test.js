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
        const data = [
            {
              items: [{ price: 10, quantity: 2 }],
              discount: 0
            },
            {
              items: [{ price: 200, quantity: 30 }],
              discount: ""
            },
            // ...
        ]
        
    
       for (const item of data) {
            expect(() => getTotal(...item)).toThrow()
        } 
    })
})
