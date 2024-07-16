import { kolobok } from "../src/tale";
import { newYear } from "../src/tale";

describe("Колобок", () => {
    test("Лиса", () => {
        kolobok("лиса")
    });
    test("Дедушка", () => {
        kolobok("дедушка")
    });
    test("Медведь", () => {
        kolobok("медведь")
    })
});

describe.only("Новый год", () => {
    test("Дед Мороз", () => {
        newYear("Дед Мороз")
    });
    test("Снегурочка", () => {
        newYear("Снегурочка")
    });
    test("Снеговик", () => {
        newYear("Снеговик")
    });

})
