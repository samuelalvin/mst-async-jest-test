import { SomeRandomModel, ISomeRandomModel } from './mst';

describe('mst unit tests', () => {
    let someRandomModel: ISomeRandomModel;

    beforeEach(() => {
        someRandomModel = SomeRandomModel.create();
    });
    
    it('should fetch okay - try 1', async (done) =>{
        const initialIsFetchSomethingDone = someRandomModel.isFetchSomethingDone;
        const initialIsAnotherFetchDone = someRandomModel.isAnotherFetchDone;
        const initialIsLastFetchDoneDone = someRandomModel.isLastFetchDone;

        await someRandomModel.fetchSomething();

        expect(initialIsFetchSomethingDone).toBeFalsy();
        expect(initialIsAnotherFetchDone).toBeFalsy();
        expect(initialIsLastFetchDoneDone).toBeFalsy();
        expect(someRandomModel.isFetchSomethingDone).toBeTruthy();
        expect(someRandomModel.isAnotherFetchDone).toBeTruthy();
        expect(someRandomModel.isLastFetchDone).toBeTruthy();
        done();
    });

    it('should fetch okay - try 2', (done) =>{
        const initialIsFetchSomethingDone = someRandomModel.isFetchSomethingDone;
        const initialIsAnotherFetchDone = someRandomModel.isAnotherFetchDone;
        const initialIsLastFetchDoneDone = someRandomModel.isLastFetchDone;

        someRandomModel.fetchSomething();

        setTimeout(() => {
            expect(initialIsFetchSomethingDone).toBeFalsy();
            expect(initialIsAnotherFetchDone).toBeFalsy();
            expect(initialIsLastFetchDoneDone).toBeFalsy();
            expect(someRandomModel.isFetchSomethingDone).toBeTruthy();
            expect(someRandomModel.isAnotherFetchDone).toBeTruthy();
            expect(someRandomModel.isLastFetchDone).toBeTruthy();
            done();
        }, 200);
    });

    it('should fetch okay - try 3', async () =>{
        const initialIsFetchSomethingDone = someRandomModel.isFetchSomethingDone;
        const initialIsAnotherFetchDone = someRandomModel.isAnotherFetchDone;
        const initialIsLastFetchDoneDone = someRandomModel.isLastFetchDone;

        await someRandomModel.fetchSomething();

        expect(initialIsFetchSomethingDone).toBeFalsy();
        expect(initialIsAnotherFetchDone).toBeFalsy();
        expect(initialIsLastFetchDoneDone).toBeFalsy();
        expect(someRandomModel.isFetchSomethingDone).toBeTruthy();
        expect(someRandomModel.isAnotherFetchDone).toBeTruthy();
        expect(someRandomModel.isLastFetchDone).toBeTruthy();
    });
});