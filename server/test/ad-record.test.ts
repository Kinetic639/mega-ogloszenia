import {AdRecord} from "../records/ad.record";
import {AdEntity} from "../types";

const defaultObj = {
    name: 'Test Name',
    description: 'Test Description',
    url: ' https://test.pl',
    lat: 9,
    lon: 9,
    price: 123
}

test('Can build AdRecord', () => {
    const ad = new AdRecord(defaultObj)

    expect(ad.name).toBe('Test Name')
    expect(ad.description).toBe('Test Description')
})

test('Can build AdRecord', () => {
    expect(() => new AdRecord({
        ...defaultObj, price: -4
    })).toThrow('Cena produktu musi być większa od 0 i mniejsza od 9999999.')
})


//@TODO: Check rest of validations
