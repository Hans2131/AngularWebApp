describe('myEvenements filter', function () {
    beforeEach(module('webtopay'));

    var filter;
    var evenements;

    beforeEach(inject(function (_$filter_) {
        filter = _$filter_('myEvenements');

        evenements = [];
        evenements.push({ owner: "test@test.com" });
        evenements.push({ owner: "other@test.com" });
        evenements.push({ owner: "test@test.com" });
    }));

    it('returns 2 with email as given', function () {
        expect(filter(evenements, "test@test.com", true).length).toEqual(2);
    });

    it('returns 1 with email as given', function () {
        expect(filter(evenements, "other@test.com", true).length).toEqual(1);
    });

    it('returns 3 because filter usage is false', function () {
        expect(filter(evenements, "test@test.com", false).length).toEqual(3);
    });
});