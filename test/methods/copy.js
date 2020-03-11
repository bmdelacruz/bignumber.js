if (typeof Test === 'undefined') require('../tester');

Test('copy', function () {
    var x = new BigNumber(38273);
    Test.areEqual(38273, x.copy().toNumber());
})