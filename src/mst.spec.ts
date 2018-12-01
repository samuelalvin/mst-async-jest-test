import { SomeRandomModel, ISomeRandomModel } from './mst';

describe('mst unit tests', () => {
    let someRandomModel: ISomeRandomModel;

    beforeEach(() => {
        someRandomModel = SomeRandomModel.create();
    });
    
    it('should fetch okay - try 1', async (done) =>{
        await someRandomModel.fetchSomething();
        expect(someRandomModel.isDoneFetching).toBeTruthy();
        done();
    });

    it('should fetch okay - try 2', (done) =>{
        someRandomModel.fetchSomething();
        setTimeout(() => {
            expect(someRandomModel.isDoneFetching).toBeTruthy();
            done();
        }, 200);
    });
});