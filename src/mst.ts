import { types, flow, Instance } from 'mobx-state-tree';

export const SomeRandomModel = types.model('someRandomModel', {
    isFetching: types.optional(types.boolean, false),
    isDoneFetching: types.optional(types.boolean, false)
}).actions(self => {
    const lastFetch = flow(function*() {
        yield Promise.resolve(4);
        yield Promise.resolve(4);
        console.log('third fetch');
    });

    const anotherFetch = flow(function*() {
        yield Promise.resolve(1);
        yield Promise.resolve(1);
        yield lastFetch();
        console.log('second fetch');
    });

    const fetchSomething = flow(function*() {
        self.isFetching = true;
        yield anotherFetch();
        yield Promise.resolve(2);
        yield Promise.resolve(3);
        yield lastFetch();
        console.log('first fetch');
        self.isFetching = false;
        self.isDoneFetching = true;
    });

    return {
        fetchSomething
    };
});

export interface ISomeRandomModel extends Instance<typeof SomeRandomModel> {}