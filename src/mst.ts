import { types, flow, Instance } from 'mobx-state-tree';

export const SomeRandomModel = types.model('someRandomModel', {
    isFetchSomethingDone: types.optional(types.boolean, false),
    isAnotherFetchDone: types.optional(types.boolean, false),
    isLastFetchDone: types.optional(types.boolean, false),
}).actions(self => {
    const lastFetch = flow(function*() {
        yield Promise.resolve(4);
        yield Promise.resolve(4);
        self.isLastFetchDone = true;
    });

    const anotherFetch = flow(function*() {
        yield Promise.resolve(1);
        yield Promise.resolve(1);
        yield lastFetch();
        self.isAnotherFetchDone = true;
    });

    const fetchSomething = flow(function*() {
        yield anotherFetch();
        yield Promise.resolve(2);
        yield Promise.resolve(3);
        yield lastFetch();
        self.isFetchSomethingDone = true;
    });

    return {
        fetchSomething
    };
});

export interface ISomeRandomModel extends Instance<typeof SomeRandomModel> {}